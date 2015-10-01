import React from 'react';

export default class HorizonComponent extends React.Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}

HorizonComponent.propTypes = {
    name: React.PropTypes.string
};
