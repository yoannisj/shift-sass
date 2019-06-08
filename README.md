# Shift-sass

Shift-sass is a tool to work with breakpoints and media-queries in Sass. It tries to be simple and concise, but powerful enough to make working with breakpoints accross your projects easy.

Shift-sass works perfectly with its companion tool Shift-js, which shares a similar API to work with breakpoints in the javascript part of your project. Together, these two tools make it easy to build and configure responsive front-end components.

**CAUTION**: this library is still in beta, and the API may change before it reaches its first stable release. Use with caution, and make sure you check the documentation when updating.

## Installation

### NPM

Open the Terminal and install the node package:

    npm install shift-sass --save-dev

### Bower

**DEPRECATED**: bower is now deprecated. It is highly recommended you instead use `npm` to install this dependency, or any other modern dependency manager relying on node modules such as [yarn](https://yarnpkg.com/en/).

Open the Terminal, `cd` to your project folder and enter the following command:

    bower install shift-sass --save-dev

## Usage

Aleksi relies on a custom sass importer, to import stylehseet files only once.

### Eyeglass

This can be done using [eyeglass](https://www.npmjs.com/package/eyeglass)'s importer: 

    var sass = require('node-sass');
    var eyeglass = require('eyeglass');

    sass.render(eyeglass({
        /* .. */
        eyeglas: {
            modules: [
                {
                    path: './node_modules/shift-sass'
                },
                // or, if you installed shift-sass with bower
                {
                    name: "shift",
                    main: function(eyeglass, sass) {
                        return {
                            sassDir: './bower_components/shift-sass/stylesheets/shift',
                        }
                    }
                }
            ],
            engines: {
                sass: sass
            }
        },
    }), function(err, res) { /* ... */ });

### Custom importer

Alternatively, you can use something like [node-sass-import-once](https://www.npmjs.com/package/node-sass-import-once), and add aleksi's stylesheets path to sass's `loadPaths` option:

    var sass = require('node-sass');
    var importOnce = require('node-sass-import-once');

    sass.render({
        /* .. */
        importer: importOnce,
        loadPaths: [
            './node_modules/shift-sass/stylesheets',
            // or, if you installed shift-sass with bower
            './bower_components/shift-sass/stylesheets'
        ]
    }, function(err, res) { /* ... */ });

Now you can import shift's stylesheets in your sass files using the `shift` prefix:

    @import "shift/query";

    $breakpoints: ( 'md': 750 );

    h1
    {
        font-size: 14px;

        @include shift-query('>md') {
            font-size: 18px;
        }
    }

## API

### Adding media-query features

    @include shift-set( $feature, $label, $value[, $tweakpoint ]);
    @include shift-set-width( $label, $value[, $tweakpoint ]);
    @include shift-set-height( $label, $value[, $tweakpoint ]);
    @include shift-set-resolution( $label, $value[, $tweakpoint ]); // SOON!

### Output @media queries

    @include shift-query($expression[, $tweakpoint ]);
    @include shift($expression[, $tweakpoint ]); /* convenient alias */
    /* SOON! */ @include shift-width($widths[, $tweakpoint ]);
    /* SOON! */ @include shift-height($heights[, $tweakpoint ]);
    /* SOON! */ @include shift-resolution($resolution[, $tweakpoint ]);


#### Supported syntaxes for expressions

**keywords**
+ `only`

**media-types**
+ `screen`
+ `print`
+ ... (see list of media types in https://www.w3.org/TR/css3-mediaqueries/#background);

**min-width**
+ `s`
+ `s_`
+ `w>s`
+ `w > s`
+ `width>s`
+ `width > s`
+ `min-width:s`
+ `min-width: s`

**max-width**
+ `_l`
+ `w<l`
+ `w < l`
+ `width<l`
+ `width < l`
+ `max-width:l`
+ `max-width: l`

**min-height**
+ `-l_`
+ `h>l`
+ `h > l`
+ `height>l`
+ `height > l`
+ `min-height:l`
+ `min-height: l`

**max-height**
+ `-_xl`
+ `h<xl`
+ `h < xl`
+ `height<xl`
+ `height < xl`
+ `max-height:xl`
+ `max-height: xl`

**resolution**
+ `2x` COMING SOON!
+ `1.5x` COMING SOON!
+ `31x` COMING SOON!

##### Examples

    // min-width queries
    @include shift('>md') { ... }
    @include shift('w>md') { ... }
    @include shift('from md') { ... } // COMING SOON!

    // max-width queries
    @include shift('<lg') { ... }
    @include shift('screen <lg') { ... }
    @include shift('to lg') { ... } // COMING SOON!

    // min-/max-width queries
    @include shift('from sm to lg') { ... } // COMING SOON!
    @include shift('>sm and <lg') { ... }
    @include shift('>sm <lg') { ... }
    @include shift('screen >sm <lg') { ... }

    // min-height queries
    @include shift('h>sm') { ... }

    // max-height queries
    @include shift('h<lg') { ... }

    // mixed queries
    @include shift('>sm h<lg') { .. }
    @include shift('w>md h<md') { .. }
    @include shift('>sm <md h>md') { .. }
    @include shift('w>sm w<md h>md') { .. }
    @include shift('print w>sm w<md h>sm') { .. }

### Getting media-query feature values

    $value: shift-get($feature, $label[, $tweakpoint, $unit ]);
    $value: shift-get-width($label[, $tweakpoint, $unit ]);
    $value: shift-get-height($label[, $tweakpoint, $unit ]);
    $value: shift-get-resolution($label[, $tweakpoint, $unit ]); // SOON!

