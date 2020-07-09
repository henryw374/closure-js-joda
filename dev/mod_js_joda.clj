(ns mod-js-joda
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [cljs.build.api :as cba]))

(defn js-joda-files []
  (file-seq (io/file "jsjoda")))

(defn ->package-name [path]
  (let [path (if (string/ends-with? path ".js")
               (subs path 0 (- (count path) (count ".js")))
               path)]
    (string/join "." (string/split path #"/"))))

(defn megaize [f]
  (let [file-name (subs (.getName f) 0 (- (count (.getName f)) 3))
        contents (line-seq (io/reader f))]
    (->> contents 
         (keep (fn [line]
                 (when-not (re-matches #"^import.*" line) line)))
         (map (fn [line]
                (if (re-matches #"export function _init().*" line)
                  (str "export function " file-name "Init() {")
                  (-> line  
                      ;; 2 can go if getters works
                      (string/replace "PARSER" (str file-name "PARSER"))
                      (string/replace "MAX_WIDTH" (str file-name "MAX_WIDTH"))
                      (string/replace "@license" (str file-name "license"))
                      
                      ))
                ))
         ))
  )

(defn run-mod []
  (do
    (let [mega
          (->>
            (keep (fn [f]
                    (when-not (or (.isDirectory f)
                                (string/starts-with? (.getName f) "js-joda")
                                (string/starts-with? (.getName f) "_init"))
                      ;(copy-file f)
                      (megaize f)
                      ))
              (->> (->>
                     (line-seq (io/reader "jsjoda/js-joda.js"))
                     (keep #(second (re-matches #".*'\.\/([^']*)'.*" %)))
                     (map (fn [f] (io/file (str "./jsjoda/" f ".js")))))
                   ;(take 3)
                   ))
            (apply concat))]
      (spit "src/libstest/jsjodasingle.js"
        (apply str
          "goog.declareModuleId('libstest.jsjodasingle');\n"
          (interpose "\n" mega))
        )
      )
    ;(clojure.java.shell/sh "make cljs")
    ))

(defn build-cljs [readable?]
  (cba/build
    {
     :optimizations :advanced
     ;:pseudo-names true
     ;:pretty-print true 
     :pretty-print readable? 
     :pseudo-names readable?
     :compiler-stats true
     :main 'libstest.core2
     :process-shim false
     :output-to "cadv.js"}))

(defn -main [& _]
  (run-mod)
  (build-cljs false)
  (clojure.java.shell/sh "ls" "-lh" "cadv.js")
  )

(comment

  (capt
    '(-main))



  ;(last (js-joda-files))
  )