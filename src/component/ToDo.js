import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import '../css/component/ToDo.css';

import TaskGridHeader from './TaskGridHeader';
import Task from './Task';

export default class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [{
                id: 1,
                name: 'Task 1',
                deadline: '2019-06-01T12:00:00'
            }, {
                id: 2,
                name: 'Task 2',
                deadline: '2019-05-01T12:00:00'
            }, {
                id: 3,
                name: 'Task 3',
                deadline: '2019-04-01T12:00:00'
            }, {
                id: 4,
                name: 'Task 4',
                deadline: '2019-03-01T12:00:00'
            }]
        };
    }

    render() {
        return (
            <div id="ToDoComponent">
                <Container>
                    <h1 className="pt-5 pb-5 mb-3 rounded display-4">TODO</h1>
                    <div id="toDoTable" className="p-2 rounded">
                        <span>
                            <TaskGridHeader />
                            {this.state.tasks.map(task => (
                                <Task key={task.id}
                                    task={task}
                                />
                            ))}
                        </span>
                    </div>
                </Container>
            </div>
        );
    }
}