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

(defn replace-deps-with-goog-get [imports line]
  (reduce 
    (fn [r [import package]]
      (string/replace r import (str "(goog.module.get('" package "')." import ")")))
    line
    imports))

(defn copy-file [f]
  (println f)
  (let [path (.getPath f)
        path-parts (butlast (string/split path #"/"))
        package-name (->package-name path)
        contents (line-seq (io/reader f))
        new-file (io/file (str "src/" path))
        all-consts (atom {})]
    (io/make-parents new-file)
    (spit (.getPath new-file)
      (apply str
        "goog.declareModuleId('" package-name "');\n"
        (map 
          (fn [line]
            (if-let [m (re-find #"import \{(.*)\} from '([.\/]+)/(.*)';" line)]
                (let [[_ consts rel imp] m
                      consts-coll (->> (string/split consts #",")
                                      (map string/trim))
                      package-prefix (case rel
                                       "." (str (string/join "/" path-parts) "/")
                                       ".." (str (string/join "/" (butlast path-parts)) "/")
                                       "../.." (str (string/join (butlast (butlast path-parts))) "/"))
                      import-package-name (->package-name (str package-prefix imp))]
                   (swap! all-consts #(apply conj % (map
                                                       (fn [c] [c import-package-name])
                                                       consts-coll)))
                  (str "goog.forwardDeclare('" import-package-name "');\n"
                    ;"const { " consts " } = goog.module.get('" (->package-name (str package-prefix imp))  "') ;\n"
                    ))
                (str (replace-deps-with-goog-get @all-consts line) "\n")))
          contents)))
    ;(println "name ")
    ))

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
                      (string/replace "PARSER" (str file-name "PARSER"))
                      (string/replace "MAX_WIDTH" (str file-name "MAX_WIDTH"))
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

(defn build-cljs []
  (cba/build
    {
     :optimizations :advanced
     ;:pseudo-names true
     ;:pretty-print true 
     :pretty-print false 
     :pseudo-names false 
     :compiler-stats true
     :main 'libstest.core2
     :process-shim false
     :output-to "cadv.js"}))

(defn -main [& _]
  (run-mod)
  (build-cljs)
  (clojure.java.shell/sh "ls" "-lh" "cadv.js")
  )

(comment
  (-main)

  

  ;(last (js-joda-files))

  
  )