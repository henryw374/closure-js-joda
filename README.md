# Make js-joda amenable to DCE by the closure compiler

create local link to dev version of js-joda which is currently a clone of:

level above this dir:

`git clone git@github.com:henryw374/js-joda.git`

`git checkout -b henry-master origin/henry-master` 

back in this dir:
`ln -s ../js-joda/packages/core/src js-joda`

`make adv`


 [Google Closure Compiler](https://developers.google.com/closure/compiler/)


