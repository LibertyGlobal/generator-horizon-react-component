'use strict';

var React = require('react');
var Component = require('../lib/<%= packageName %>');

React.render(
    React.createElement(Component, {
      name: 'Hi, I\'m a component!'
    }),
    document.getElementById('app')
);