import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from './card'

class List extends Component {
    render() {
        let cards = this.props.cards.map((card) => (
            <Card
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                tasks={card.tasks}
                color={card.color} />
        ));

        return (
            <div className='list'>
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
};

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
}

export default List;