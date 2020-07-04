(ns libstest.core
  (:require [libstest.jsjoda]))

(.now (.-Instant libstest.jsjoda))

