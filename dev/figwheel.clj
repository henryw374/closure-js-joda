(ns figwheel
  (:require [figwheel.main.api :as figwheel]
            [cljs.build.api :as cljs]
            ))

(defn prod-build []
  (cljs/build
    {
     :optimizations :advanced
     :pseudo-names true
     :main 'libstest.core2
     :pretty-print true
     :infer-externs true
     :process-shim false
     :output-to "resources/public/cljs-out/main.js"}))

(comment
  (prod-build)

  )

(set! *warn-on-reflection* true)

(defn start-figwheel []
  (figwheel/start  {:mode :serve}
    "dev"))

(defn stop []
  (figwheel/stop-all))

(defn repl []
  (figwheel/cljs-repl "dev"))

(defn refresh []
  (stop)
  (start-figwheel))

(comment
  (stop)
  (start-figwheel)
  (repl)
  
  )
