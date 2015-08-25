# Shift

Shift is a powerful tool to work with breakpoints and media-queries in Sass and Javascript.

## Installation

### Bower

Open the Terminal, `cd` to your project folder and enter the following command:

    bower install shift --save

Import files in your project's stylesheets

    @import "path/to/bower_components/shift/shift";

## Usage

### Adding media-query features

    @include shift-set( $feature, $alias, $value[, $tweakpoint ]);
    @include shift-set-width( $alias, $value[, $tweakpoint ]);
    @include shift-set-height( $alias, $value[, $tweakpoint ]);
    @include shift-set-resolution( $alias, $value[, $tweakpoint ]); // SOON!

### Output media-query

    @include shift($expression[, $tweakpoint ]);
    @include shift-width($widths[, $tweakpoint ]);
    @include shift-height($heights[, $tweakpoint ]);
    @include shift-resolution($resolution[, $tweakpoint ]);

#### Examples

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

