import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import '../css/component/ToDo.css';

import { API_URL } from './constant/ApiConstants';

import TaskGridHeader from './TaskGridHeader';
import Task from './Task';
import Loading from './util/component/Loading';
import Error from './util/component/Error';

export default class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            isLoaded: false,
            error: null
        };

        this.getLoadedView = this.getLoadedView.bind(this);
    }

    componentDidMount() {
        fetch(API_URL + '/tasks')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    tasks: result
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    render() {
        const {
            isLoaded,
            error
        } = this.state;

        var view = null;

        if (isLoaded) {
            if (error) {
                view = <Error />
            } else {
                view = this.getLoadedView();
            }
        } else {
            view = <Loading />;
        }

        return (
            <div id="ToDoComponent">
                <Container>
                    <h1 className="pt-5 pb-5 mb-3 rounded display-4">TODO</h1>
                    <div id="toDoTable" className="p-2 rounded">
                        {view}
                    </div>
                </Container>
            </div>
        );
    }

    getLoadedView() {
        return (
            <span>
                <TaskGridHeader />
                {this.state.tasks.map(task => (
                    <Task key={task.id}
                        task={task}
                    />
                ))}
            </span>
        );
    }
}