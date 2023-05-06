import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, value, placeholder, onChange }) => {
    return (
        <input
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;