(ns mod-js-joda
  (:require [clojure.java.io :as io]
            [clojure.string :as string]))

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

(comment

  (doseq [f (->> (js-joda-files)
                 ;(take 3)
                 )]
    (when-not (.isDirectory f)
      (copy-file f)))

  (last (js-joda-files))
  )