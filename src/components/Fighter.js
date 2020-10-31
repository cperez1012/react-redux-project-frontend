import React from 'react';

const Fighter = (props) => {

    const {
        id,
        name,
        alias,
        nationality,
        division,
        stance,
        height,
        reach,
        status,
        champion,
        win,
        loss,
        draw,
        ko
    } = props;

    return (
        <>
    <h1>{name}</h1>
    <p>{alias}</p>
    <p>{nationality}</p>
    <p>{division}</p>
    <p>{stance}</p>
    <p>{height}</p>
    <p>{reach}</p>
    <p>{status}</p>
    <p>{champion}</p>
    <p>{win}</p>
    <p>{loss}</p>
    <p>{draw}</p>
    <p>{ko}</p>
    </>
    )
};

export default Fighter;