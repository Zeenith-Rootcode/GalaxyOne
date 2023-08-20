import React from 'react';
import {ParagraphProps} from './ParagraphProps';

const Paragraph: React.FC<ParagraphProps> = ({
                                                 id,
                                                 className = '',
                                                 style,
                                                 lang,
                                                 dir = 'ltr',
                                                 text,
                                             }) => {
    return (
        <p
            id={id}
            className={`paragraph ${className}`}
            style={style}
            lang={lang}
            dir={dir}
        >
            {text}
        </p>
    );
};

export default Paragraph;
