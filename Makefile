cljs:
	clj -m cljs.main -co '{:optimizations :advanced :pretty-print false :pseudo-names false  }' -o cadv.js -c libstest.core 
adv:
	java -jar closure-compiler-v20200517.jar \
	 --warning_level=QUIET \
	  --module_resolution=NODE \
	  --dependency_mode=PRUNE \
	  -O ADVANCED \
      --formatting PRETTY_PRINT \
      --language_out ECMASCRIPT3 \
	  --js ./jsjoda/**.js \
	  --js ./jsjoda/temporal/**.js \
	  --js ./jsjoda/format/**.js \
	  --js ./jsjoda/zone/**.js \
	  --js ./jsjoda/chrono/**.js \
	  --js ./jsjoda/format/parser/**.js \
	  --js "entry-point.js" \
	  --entry_point="./entry-point.js" \
	  --js_output_file adv.js
singlejs:
	java -jar closure-compiler-v20200517.jar \
	  --module_resolution=NODE \
	  --dependency_mode=PRUNE \
	  -O ADVANCED \
      --formatting PRETTY_PRINT \
      --language_out ECMASCRIPT3 \
	  --js ./jsjodaesm.js \
	  --js "entry-point.js" \
	  --entry_point="./entry-point.js" \
	  --js_output_file adv.js	  		
