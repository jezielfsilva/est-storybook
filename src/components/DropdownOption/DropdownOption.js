import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    position: relative;
    display: flex;
    width: calc(100% - 2rem);
    align-items: center;
    padding: .6rem 1rem;
    border-radius: ${props => (props.isOpem ? '0.25em 0 0 0' : '0.25em 0 0 0.25em')};
    color: #328952;
    background: ${props => props.isOpem && '#598EA720'};
    cursor: pointer;

    &:hover {
        background: #598EA720;
    }
`;

const Icon = styled.div`
    position: absolute;
    left: ${props => !props.arrow && '1rem'};
    right: ${props => props.arrow && '2rem'};
    bottom: .5rem;
    font-size: 1rem;
    transform: ${props => props.arrow && 'rotate(90deg)'};
`;

const Title = styled.p`
    width: 100%;
    margin: 0;
    font-size: .9rem;
    font-family: arial;
    margin-left: 1.25rem;
    font-weight: ${props => (props.isOpem ? '600' : '200')};

    &:hover {
        font-weight: 600;
    }
`;

const DropdownOption = (props) => {
    return (
        <Item onClick={props.handleDropdown} isOpem={props.isOpem}>
            <Icon>x</Icon>
            <Title isOpem={props.isOpem}>{props.title}</Title>
            <Icon>></Icon>
        </Item>
    );
}

export default DropdownOption;