cljs:
	clj -m cljs.main -co '{:optimizations :advanced :pretty-print true :pseudo-names true }' -o cadv.js -c libstest.core 
adv:
	java -jar closure-compiler-v20200517.jar \
	 --warning_level=QUIET \
	  --module_resolution=NODE \
	  --dependency_mode=PRUNE \
	  -O ADVANCED \
	  --js ./js-joda/**.js \
	  --js ./js-joda/temporal/**.js \
	  --js ./js-joda/format/**.js \
	  --js ./js-joda/zone/**.js \
	  --js ./js-joda/chrono/**.js \
	  --js ./js-joda/format/parser/**.js \
	  --js "entry-point.js" \
	  --entry_point="./entry-point.js" \
	  --js_output_file adv.js		
