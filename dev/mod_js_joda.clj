(ns mod-js-joda
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [files-to-include]
            [cljs.build.api :as cba]))

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
                 (io/file (str "./jsjoda/" f))))
          (keep (fn [f]
                  (file->munged-lines f)))
          (apply concat))]
    (spit "src/raw/jsjodamodule.js"
      (apply str
        "goog.declareModuleId('raw.jsjodamodule');\n"
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
  (clojure.java.shell/sh "make" "jodaforcljs")
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

(defn -main [& _]
  (clojure.java.shell/sh "rm" "-rf" "src/raw/")
  (clojure.java.shell/sh "rm"  "cadv.js")
  (clojure.java.shell/sh "mkdir" "src/raw")
  (build-single-file-es6-goog-module)
  (es6-module->cljs-compiler-friendly)
  (build-cljs false)
  (clojure.java.shell/sh "ls" "-lh" "cadv.js")
  )

(comment

  (capt
    '(-main))

  (-main)


  ;(last (js-joda-files))
  )