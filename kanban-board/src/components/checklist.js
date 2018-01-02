import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component {
    checkInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, e.target.value);
            e.target.value = '';
        }
    }

    render() {
        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li className='checklist-task' key={task.id}>
                <input type='checkbox' defaultChecked={task.done} onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)
} />
                {task.name}
                <button className='checklist-task-remove' onClick={
this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)} />
            </li>
        ));

        return (
            <div className='checklist'>
                <ul>{tasks}</ul>
                <input type='text' className='checklist-add-task' placeholder='Type then hit Enter to add a task' onKeyPress={this.checkInputKeyPress.bind(this)} />
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
}

export default CheckList;