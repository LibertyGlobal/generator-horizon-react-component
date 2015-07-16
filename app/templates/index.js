'use strict';

/*
 * This is the all-in-one entry point to use with webpack + style-loader + css-loader + sass-loader.
 * If you want to use this module with browserify, instead of:
 *
 * var Component = require('<%= packageName %>');
 *
 * do:
 *
 * var Component = require('<%= packageName %>/lib/<%= packageName %>');
 *
 * In this case you would only require JavaScript file and you need to include stylesheets yourself.
 */

require('./<%= packageName %>.scss');

module.exports = require('./lib/<%= packageName %>');
