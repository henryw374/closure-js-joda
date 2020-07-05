(ns libstest.core
  (:require [libstest.jsjoda]))

(defn f [x]
  (.requireNonNull (.-assert libstest.jsjoda) x "foo"))
(js/console.log (f nil))
(js/console.log (f 1))

