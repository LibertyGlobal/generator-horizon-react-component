var React = require('react');

var HorizonComponent = React.createClass({

  render() {

    return (
        <div>
          {this.props.name}
        </div>
    );
  }

});

module.exports = HorizonComponent;
