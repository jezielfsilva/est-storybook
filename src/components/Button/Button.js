import React from 'react';
import styled from 'styled-components';

const ButtonSD = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 0.25em;
    border: 0;
    font-size: 1em;
    color: ${props => props.color};
    background: ${props => props.background};
    margin: ${props => props.margin};
`;

const Button = (props) => {
    return (
        <ButtonSD
            icon={props.icon}
            background={props.background || 'transparent'}
            onClick={props.onClick}
            width={props.width}
            height={props.height}
            color={props.color || '#FFFFFF'}
            margin={props.margin}>
                {props.children}
            </ButtonSD>
    );
}

export default Button;