

none:
	java -jar closure-compiler-v20200517.jar --js \@js-joda/core/dist/js-joda.esm.js --js_output_file none.js
adv:
	java -jar closure-compiler-v20200517.jar -O ADVANCED --js \@js-joda/core/dist/js-joda.esm.js --js_output_file adv.js
not-using:
	java -jar closure-compiler-v20200517.jar --dependency_mode PRUNE -O ADVANCED --js "dummy-export.js" --js \@js-joda/core/dist/js-joda2.esm.js --js "not-using-joda.js" --entry_point "not-using-joda.js" --js_output_file adv.js
rawing:
	java -jar closure-compiler-v20200517.jar \
	 --warning_level=QUIET \
	  --module_resolution=NODE \
	  --dependency_mode=PRUNE \
	  -O ADVANCED \
	  --js ../js-joda/packages/core/src/**.js \
	  --js ../js-joda/packages/core/src/temporal/**.js \
	  --js ../js-joda/packages/core/src/format/**.js \
	  --js ../js-joda/packages/core/src/zone/**.js \
	  --js ../js-joda/packages/core/src/chrono/**.js \
	  --js ../js-joda/packages/core/src/format/parser/**.js \
	  --js "not-using-joda.js" \
	  --entry_point="not-using-joda.js" \
	  --js_output_file adv.js		
