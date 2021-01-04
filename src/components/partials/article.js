import React from 'react';

function Paragraph(props) {
    const { children } = props;

    return <p className="text-gray-400 light-mode:text-gray-800 text-xl">{ children }</p>
}

function Subtitle(props) {
    const { children } = props;

    return <h2 className="text-white light-mode:text-gray-800 text-2xl italic mb-4">{ children }</h2>
}

function Divider() {
    return (
        <div className="text-white light-mode:text-gray-800 text-xl text-center my-4">
            <span className="px-1">&bull;</span>
            <span className="px-1">&bull;</span>
            <span className="px-1">&bull;</span>
        </div>
    );
}

export { Paragraph, Subtitle, Divider };
