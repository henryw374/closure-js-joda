(ns mod-js-joda
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [files-to-include]
            [cljs.build.api :as cba]))

(defn exec-ok [& args]
  (let [r (apply clojure.java.shell/sh args)]
    (assert (zero? (:exit r)) r)
    r))

(def helpers 
  #{"CurrentStandardZone"
    "MockSimplePeriod"
    "MockFieldNoValue"
    "MockFieldValue"
    "Empty"})

(def helper-re (apply str (interpose "|" helpers)))

(defn create-munge-tests []
  (doseq [f (filter #(.isFile %) (file-seq (io/file "./js-joda/packages/core/test/")))
          :let [file-name (subs (.getName f) 0 (- (count (.getName f)) (count ".js")))] 
          :when  (or (re-matches #".*Test.js$" (.getName f))
                            (re-matches (re-pattern helper-re) file-name))]
   (let [new-file (io/file (str "./js-joda/packages/core/module-test/" (.getName f)))
         contents (line-seq (io/reader f))
         new-contents
         (->> contents
              (remove (fn [line]
                        (re-matches #".*_init.*" line)))
              (map (fn [line]
                     (-> line
                       (string/replace #"'.*../testUtils" "'../test/testUtils")
                       (string/replace #"'.*../src/[^']+" "'../src/jsjodamodule")
                       (string/replace (re-pattern (str "'.*(" helper-re ")")) "'./$1")
                         )
                     )))]
     (io/make-parents new-file)
     (spit new-file
       (apply str
         (interpose "\n" new-contents)))))
  (exec-ok "cp" "./js-joda/packages/core/test/testUtils.js"
    "./js-joda/packages/core/module-test/"))

(comment 
  
  (create-munge-tests)
  )

(defn file->munged-lines [f]
  (let [file-name (subs (.getName f) 0 (- (count (.getName f)) (count ".js")))
        contents (line-seq (io/reader f))]
    (->> contents 
         (keep (fn [line]
                 (when-not (re-matches #"^import.*" line) line)))
         (map (fn [line]
                (-> line
                  (string/replace "/**" "/*")
                  (string/replace "@license" "license")
                  (string/replace "@implSpec" "implSpec")
                  (string/replace "@param" "param")
                  (string/replace "@abstract" "abstract")
                  (string/replace "MAX_WIDTH" (str file-name "MAX_WIDTH"))
                  (string/replace "PARSER" (str file-name "PARSER"))
                  ))))))

(defn build-single-file-es6-goog-module []
  (let [lines-raw
        (->>
          files-to-include/ordered
          (map (fn [f]
                 (io/file (str "./js-joda/packages/core/src/" f))))
          (keep (fn [f]
                  (file->munged-lines f)))
          (apply concat))]
    (spit "src/raw/jsjodamodule.js"
      (apply str
        ;"goog.declareModuleId('raw.jsjodamodule');\n"
        (interpose "\n" lines-raw)))))

(defn build-cljs [readable?]
  (cba/build
    {:optimizations :advanced
     :pretty-print readable? 
     :pseudo-names readable?
     :compiler-stats true
     :main 'libstest.core2
     :process-shim false
     :output-to "cadv.js"}))

(defn es6-module->cljs-compiler-friendly []
  (exec-ok "make" "jodaforcljs")
  (let [contents (line-seq (io/reader "src/raw/jsjodamoduleout.js"))]
    (spit "src/raw/jsjoda.js"
      (apply str
        "goog.provide('raw.jsjoda');\n"
        (->>
          contents
          (map #(string/replace % "$$module$src$raw$jsjodamodule" ""))
          (map #(string/replace % "var module$src$raw$jsjodamodule = {};" ""))
          (map #(string/replace % "module$src$raw$jsjodamodule" "raw.jsjoda"))
          (interpose "\n"))))))

(defn cljs-compiler-friendly->joda-tests-friendly []
  (let [contents (line-seq (io/reader "src/raw/jsjodamoduleout.js"))]
    (spit "src/raw/jsjoda4tests.js"
      (str
        (apply str
          (->>
            contents
            (map #(string/replace % "$$module$src$raw$jsjodamodule" ""))
            ;(map #(string/replace % "var module$src$raw$jsjodamodule = {};" ""))
            ;(map #(string/replace % "module$src$raw$jsjodamodule." "export "))
            (interpose "\n")))
        (slurp "dev/testexport.js")))))

(defn js-joda-single []
  (build-single-file-es6-goog-module)
  (es6-module->cljs-compiler-friendly)
  (cljs-compiler-friendly->joda-tests-friendly)
  (exec-ok "cp" "src/raw/jsjoda4tests.js" "./js-joda/packages/core/src/jsjodamodule.js")
  )

(defn clean []
  (exec-ok "rm" "-rf" "src/raw/")
  (exec-ok "rm" "-rf" "cadv.js")
  (exec-ok "mkdir" "src/raw")
  )

(defn -main [& _]
  (js-joda-single)
  (build-cljs true)
  (exec-ok "ls" "-lh" "cadv.js")
  
  
  )

(comment

  (capt
    '(-main))

  (-main)

  (capt
    '(do
       (clean)
       (js-joda-single)
       (create-munge-tests)))
  


  ;(last (js-joda-files))
  )