import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoardContainer from './containers/kanban-board-container';
import registerServiceWorker from './services/registerServiceWorker';
import './styles/application.css';

ReactDOM.render(<KanbanBoardContainer />, document.getElementById('root'));

registerServiceWorker();
