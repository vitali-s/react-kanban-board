import React, { Component } from 'react';
import CheckList from './checklist'

class Card extends Component {
    constructor() {
        // use spread operator to pass all arguments
        super(...arguments);

        // set default state (could be defined by props also)
        this.state = {
            showDetails: false
        };
    }

    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    render() {
        let cardDetails;

        if (this.state.showDetails) {
            cardDetails = (
                <div className="card-details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        }
        return (
            <div className="card" onClick={this.toggleDetails.bind(this)}>
                <div className="card-title">{this.props.title}</div>
                {cardDetails}
            </div>
        );
    }
};

export default Card;