import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDeleteTodo }) => {
    const handleDeleteClick = () => {
        onDeleteTodo && onDeleteTodo(todo.id);
    };

    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onDeleteTodo: PropTypes.func,
};

export default TodoItem;