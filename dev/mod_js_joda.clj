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

(defn copy-file [f]
  (println f)
  (let [path (.getPath f)
        path-parts (butlast (string/split path #"/"))
        package-name (->package-name path)
        contents (line-seq (io/reader f))
        new-file (io/file (str "src/" path))]
    (io/make-parents new-file)
    (spit (.getPath new-file)
      (apply str
        "goog.declareModuleId('" package-name "');\n"
        (map 
          (fn [line]
            (if-let [m (re-find #"import \{(.*)\} from '([.\/]+)/(.*)';" line)]
              (let [[_ consts rel imp] m
                    package-prefix (case rel 
                                     "." (str (string/join "/" path-parts) "/") 
                                     ".." (str (string/join "/" (butlast path-parts)) "/")
                                     "../.." (str (string/join (butlast (butlast path-parts))) "/"))]
                (str "const { " consts " } = goog.require('" (->package-name (str package-prefix imp)) "');\n"))
              (str line "\n")))
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