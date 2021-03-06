cljs:
	clj -m cljs.main -co '{:optimizations :advanced  :pretty-print true :pseudo-names true :compiler-stats true  }' -o cadv.js -c libstest.core2 
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
jodaforcljs:
	java -jar closure-compiler-v20200517.jar \
	  -O SIMPLE \
      --formatting PRETTY_PRINT \
      --generate_exports \
      --language_out ECMASCRIPT5 \
	  --js ./src/raw/jsjodamodule.js \
	  --entry_point ./src/raw/jsjodamodule.js \
	  --js_output_file ./src/raw/jsjodamoduleout.js	  	  		
