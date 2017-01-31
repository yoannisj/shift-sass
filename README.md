# Shift-sass

Shift-sass is a tool to work with breakpoints and media-queries in Sass. It tries to be simple and concise, but powerful enough to make working with breakpoints accross your projects easy.

Shift-sass works perfectly with its companion tool Shift-js, which shares a similar API to work with breakpoints in the javascript part of your project. Together, these two tools make it easy to build and configure responsive front-end components.

## Installation

### Bower

Open the Terminal, `cd` to your project folder and enter the following command:

    bower install shift-sass --save-dev

Add the path to shift-sass's bower component to sass's `loadPaths` option

    sass.render({
        loadPaths: [
            'path/to/bower_components/shift-sass/stylesheets'
            ...
        ],
        ...
    });

Import shift-sass files in your project's stylesheets

    @import "shift";

## Usage

### Adding media-query features

    @include shift-set( $feature, $label, $value[, $tweakpoint ]);
    @include shift-set-width( $label, $value[, $tweakpoint ]);
    @include shift-set-height( $label, $value[, $tweakpoint ]);
    @include shift-set-resolution( $label, $value[, $tweakpoint ]); // SOON!

### Output media-query

    @include shift-breakpoint($expression[, $tweakpoint ]);
    @include shift($expression[, $tweakpoint ]); /* convenient alias */
    /* SOON! */ @include shift-width($widths[, $tweakpoint ]);
    /* SOON! */ @include shift-height($heights[, $tweakpoint ]);
    /* SOON! */ @include shift-resolution($resolution[, $tweakpoint ]);

##### Examples

    // min-width queries
    @include shift('>md') { ... }
    @include shift('w>md') { ... }
    @include shift('from md') { ... } // SOON!

    // max-width queries
    @include shift('<lg') { ... }
    @include shift('screen <lg') { ... }
    @include shift('to lg') { ... } // SOON!

    // min-/max-width queries
    @include shift('from sm to lg') { ... }
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

