import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Task({ task, handleChange, handleDelete }) {
    return (
        <Form>
            <Form.Group controlId={`task_${task.id}`}>
                <Form.Check
                    type="checkbox"
                    label={task.taskName}
                    checked={task.checked}
                    onChange={() => handleChange(task.id)}
                />
                <Form.Text className="text-muted">{task.remarks}</Form.Text>
            </Form.Group>
            <Button variant="danger" onClick={() => handleDelete(task.id)}>
                Delete
            </Button>
        </Form>
    );
}

export default Task;

