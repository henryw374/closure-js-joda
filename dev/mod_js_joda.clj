(ns mod-js-joda
  (:require [clojure.java.io :as io]
            [clojure.string :as string]))

(defn js-joda-files []
  (file-seq (io/file "jsjoda")))

(defn copy-file [f]
  (let [path (.getPath f)
        package-parts (-> path
                          (subs 0 (- (count path) (count ".js")))
                          (string/split #"/"))
        package-name (string/join "." package-parts)
        contents (slurp path)
        new-file (io/file (str "src/" path))]
    (io/make-parents new-file)
    (spit (.getPath new-file)
      (str
        "goog.declareModuleId('" package-name "');\n"
        contents))
    ;(println "name ")
    ))

(comment

  (doseq [f (->> (js-joda-files)
                 ;(take 3)
                 )]
    (when-not (.isDirectory f)
      (copy-file f)))
  
  )