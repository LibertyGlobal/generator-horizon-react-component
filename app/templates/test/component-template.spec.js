// enable DOM
require('jsdomify').create('<html><body></body></html>');

var React = require('react/addons');
var expect = require('expect.js');

var Component = require('../lib/<%= packageName %>');

var TestUtils = React.addons.TestUtils;

describe('Component', function() {

  it('should display name', function() {

    var name = 'Hi, I\'m a component!';
    var element = TestUtils.renderIntoDocument(
        React.createElement(Component, {
          name: name
        })
    );

    expect(React.findDOMNode(element).textContent).to.be.equal(name);

  });

});

