import React, {Component} from 'react'

export const Arrow = (p) => {
    const {
        width, 
        height, 
        margin = 10, 
        length = 20,
        lineStyle = {},
        rotation = 0,
        style:pStyle = {}
    } = p;
    if(!height || !width) {
        throw Error("width and height attrbute must be defined")
    }
    const points = [
        [0, margin],
        [width - length, margin],
        [width - length, 0],
        [width, height / 2],
        [width - length, height],
        [width - length, height - margin],
        [0, height- margin],
    ].map(p => p.join(',')).join(' ');
    const style = {
        ...pStyle,
        transform: [(pStyle.transform || ''),`rotate(${rotation}deg)`].join(' ')    
    }
    return (
        <svg width={width} height={height} style={style}>
            <polyline points={points} style={lineStyle} />
        </svg>
    )
}