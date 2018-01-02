import React, { Component } from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import titlePropType from './propTypes/title-prop-type'
import CheckList from './checklist';

class Card extends Component {
    constructor() {
        // use spread operator to pass all arguments
        super(...arguments);

        // set default state (could be defined by props also)
        this.state = {
            showDetails: false
        };
    }

    toggleDetails(e) {
        this.setState({
            showDetails: !this.state.showDetails
        });

        e.preventDefault();
    }

    render() {
        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        return (
            <div className="card">
                <div style={sideColor} />
                <div className={'card-title' + (this.state.showDetails ? ' card-title-is-open' : '')} onClick={this.toggleDetails.bind(this)}>
                    {this.props.title}
                </div>
                <Transition in={this.state.showDetails} timeout={50}>
                    {(status) => (
                        <div className={`card-details toggle-${status}`}>
                            <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                            <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks} />
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
};

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
}

export default Card;