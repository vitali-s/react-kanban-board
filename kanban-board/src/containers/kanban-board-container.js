import React, { Component } from 'react';
import update from 'react-addons-update';
import KanbanBoard from './kanban-board';
import { getCards, deleteTask, toggleTask, addTask } from './../services/api/cards-api';

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

    add(cardId, taskName) {
        let prevState = this.state;

        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);

        let newTask = { id: Date.now(), name: taskName, done: false };

        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: { $push: [newTask] }
            }
        });

        this.setState({ cards: nextState });

        addTask(cardId, newTask)
            .then(() => {
                this.setState({ cards: nextState });
            })
            .catch((error) => {
                this.setState(prevState);
            });
    }

    delete(cardId, taskId, taskIndex) {
        let prevState = this.state;

        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);

        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: { $splice: [[taskIndex, 1]] }
            }
        });

        this.setState({
            cards: nextState
        });

        deleteTask(cardId, taskId)
            .catch((error) => {
                this.setState(prevState);
            });
    }

    toggle(cardId, taskId, taskIndex) {
        let prevState = this.state;

        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);

        let newDoneValue;

        console.log(taskIndex);
        console.log(this.state.cards[cardIndex].tasks);

        let nextState = update(this.state.cards, {
                [cardIndex]: {
                    tasks: {
                        [taskIndex]: {
                            done: {
                                $apply: (done) => {
                                    newDoneValue = !done
                                    return newDoneValue;
                                }
                            }
                        }
                    }
                }
            }
        );

        this.setState({
            cards: nextState
        });

        toggleTask(cardId, taskId, newDoneValue)
            .catch((error) => {
                this.setState(prevState);
            });
    }

    render() {
        return <KanbanBoard cards={this.state.cards}
            taskCallbacks={{
                toggle: this.toggle.bind(this),
                delete: this.delete.bind(this),
                add: this.add.bind(this)
            }} />
    }
}

export default KanbanBoardContainer;