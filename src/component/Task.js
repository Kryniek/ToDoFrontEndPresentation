import React, { Component } from 'react';

import moment from 'moment/moment';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './../css/component/task/Task.css';

export default class Task extends Component {
    constructor(props) {
        super(props);

        this.getRowColor = this.getRowColor.bind(this);
    }

    render() {
        var {
            task
        } = this.props;

        var taskDeadline = task.deadline;

        return (
            <div className={"TaskComponent pt-1 pb-1 ".concat(this.getRowColor(taskDeadline))}>
                <Row className="ml-0 mr-0 pt-2 pb-2 rounded">
                    <Col>
                        <p>{task.name}</p>
                    </Col>
                    <Col xs={3}>
                        <p>{taskDeadline}</p>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </div>
        );
    }

    getRowColor(taskDeadline) {
        const nowAndTaskDeadlineDifference = moment().diff(taskDeadline, "days");
        var rowColorClass = "";

        if (nowAndTaskDeadlineDifference > 0) {
            rowColorClass = "missedDeadlineTaskRow";
        } else if (nowAndTaskDeadlineDifference === 0) {
            rowColorClass = "reachedDeadlineTaskRow";
        }

        return rowColorClass;
    }
}