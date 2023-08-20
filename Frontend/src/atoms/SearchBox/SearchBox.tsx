import React from 'react';
import {SearchBoxProps} from './SearchBoxProps';

const SearchBox: React.FC<SearchBoxProps> = ({
                                                 type,
                                                 id,
                                                 name,
                                                 value,
                                                 placeholder,
                                                 maxlength,
                                                 size,
                                                 disabled,
                                                 readonly,
                                                 class: className = '',
                                                 style,
                                                 hint,
                                             }) => {
    return (
        <div className={`search-box-container ${className}`} style={style}>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                maxLength={maxlength}
                size={size}
                disabled={disabled}
                readOnly={readonly}
                className="search-box-input"
            />
            {hint && <div className="hint">{hint}</div>}
        </div>
    );
};

export default SearchBox;