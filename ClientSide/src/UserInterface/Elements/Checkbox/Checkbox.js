import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ onChange, options }) {
    return (
        <Fragment>
            {
                options.map((option, index) => <input key={index} type="checkbox" id={option.id} value={option.value} name={option.name} onChange={() => onChange(option.value)} disabled={option.disabled} />)
            }
        </Fragment>
    )
}

Checkbox.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.array,
    alt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
}