(function(global) {
  'use strict';

  var React = global.React;
  var Component = global.<%= globalVariableName %>;

  React.render(
      React.createElement(Component, {
        name: 'Hi, I\'m a component!'
      }),
      document.getElementById('app')
  );

}(this));