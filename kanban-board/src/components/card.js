import React, { Component } from 'react';
import CheckList from './checklist'

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-title">{this.props.title}</div>
                <div className="card-details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            </div>
        );
    }
};

export default Card;