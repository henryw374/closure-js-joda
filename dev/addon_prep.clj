(ns addon-prep
  (:require [clojure.java.io :as io]
            [clojure.string :as string]))

(defn pkg-name [n]
  (let [[_ _ parent :as parts]
        (-> (subs n 0 (- (count n) (count ".js")))
            (string/split #"/"))]
    (->
      (str "addons." parent "."
        (if (= "index" (last parts))
          (last (butlast parts))
          (last parts)))
      (string/replace "-" "_"))))

;(pkg-name "js-joda/packages/locale/dist/prebuilt/hi/index.js")

(defn umd->goog [f]
  (let [file-name (.getPath f)
        pkg-name (pkg-name file-name)
        out-file (str "src/" (-> pkg-name
                                 (string/replace "." "/"))
                   ".js")
        contents (line-seq (io/reader f))
        seen-this? (atom false)
        to-keep (keep
                  (fn [line]
                    (if @seen-this? line
                                    (if-let [[_ this-on] (re-matches #".*?\(this,(.*)" line)]
                                      (do (reset! seen-this? true)
                                          (str pkg-name ".f = ( " this-on))
                                      nil)))
                  contents)]
    (io/make-parents out-file)
    (spit out-file
      (apply str
        "goog.provide('" pkg-name "');\n\n"
        (interpose "\n" to-keep)))

    ))

(defn js? [f]
  (string/ends-with? (.getName f) ".js"))

(def files
  (filter js?
    (concat
      (file-seq (io/file "js-joda/packages/timezone/dist/"))
      (file-seq (io/file "js-joda/packages/locale/dist/"))
      (file-seq (io/file "js-joda/packages/extra/dist/"))
      )))

(comment
  (umd->goog (io/file "js-joda/packages/timezone/dist/js-joda-timezone-10-year-range.js")
    )

  (doseq [f files]
    (umd->goog f))
  
  (map pkg-name 
    (map (memfn getPath) files))

  )
