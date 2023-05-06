// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <TodoItem todo={todo} />
                </li>
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default TodoList;