import React from 'react';
import styled from 'styled-components';

const Cell = styled.li`
    padding: .6rem .5rem;
    font: 200 .9rem arial;
    font-weight: ${props => props.bold && '600'};
    color: ${props => (props.bold ? '#9C4C2C' : '#46484795')};
    list-style: none;

    &:nth-child(1) {
        width: 5%;
    }
    &:nth-child(2) {
        width: 10%;
        color: ${props => props.color && '#039D50'};
    }
    &:nth-child(3) {
        width: 20%;
    }
    &:nth-child(4) {
        width: 10%;
    }
    &:nth-child(5) {
        width: 30%;
    }
    &:nth-child(6) {
        width: 15%;
    }
    &:nth-child(7) {
        width: 10%;
    }
`;

const Item = (props) => {
    return (
        <Cell bold={props.bold}>{props.children}</Cell>
    );
}

export default Item;