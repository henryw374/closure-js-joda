# Look at compiling js-joda with the [Google Closure Compiler](https://developers.google.com/closure/compiler/)

the steps below demo compiling so most of js-joda is eliminiated in the build output.

# setup 

create local link to dev version of js-joda which is currently a clone of:

1. in the dir above this dir:

`git clone git@github.com:henryw374/js-joda.git`

2. `cd js-joda && git checkout -b henry-master origin/henry-master` 

3. back in this dir: `ln -s ../js-joda/packages/core/src js-joda`

4. compile js:

`make adv` - this compiles the file `entry-point.js`

file `adv.js` contains minified output

https://www.google.com/search?q=google+closure+compiler+cyclic+dependency&oq=google+closure+compiler+cyclic+dependency&aqs=chrome..69i57j69i64.10343j0j1&sourceid=chrome&ie=UTF-8

 
 
 see https://github.com/google/closure-compiler/wiki/Managing-Dependencies
 
 see https://github.com/google/closure-compiler/wiki/JS-Modules
 
 to understand the output better, add compiler opts:
 
 --debug \
--formatting PRETTY_PRINT \

#-O SIMPLE_OPTIMIZATIONS \
 	  


 


