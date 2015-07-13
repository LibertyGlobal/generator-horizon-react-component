var React = require('react');

var HorizonComponent = React.createClass({

  displayName: 'HorizonComponent',

  propTypes: {
    name: React.PropTypes.string
  },

  render() {

    return (
        <div>
          {this.props.name}
        </div>
    );
  }

});

module.exports = HorizonComponent;
