import React from 'react';

const Demo = (props) => {
    console.log(props.books);
    const { img, title } = props.books
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Demo;