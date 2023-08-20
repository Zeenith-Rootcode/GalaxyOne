import React from 'react';
import {ListItemProps, ListProps} from './ListProps';

const List: React.FC<ListProps> = ({ordered, items}) => {
    const ListTag = ordered ? 'ol' : 'ul';

    return (
        <ListTag>
            {items.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
        </ListTag>
    );
};

const ListItem: React.FC<ListItemProps> = ({text, value, class: className = '', style}) => {
    return (
        <li className={`list-item ${className}`} style={style} value={value}>
            {text}
        </li>
    );
};

export default List;
