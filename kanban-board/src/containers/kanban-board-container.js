import React, { Component } from 'react';
import KanbanBoard from './kanban-board';
import getCards from './../services/api/cards-api';

class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        getCards().then((cards) => {
            this.setState({
                cards: cards
            });
        });
    }

    render() {
        return <KanbanBoard cards={this.state.cards} />
    }
}

export default KanbanBoardContainer;