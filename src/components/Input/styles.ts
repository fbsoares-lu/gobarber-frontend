import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    border-radius: 10px;
    background: #232129;
    padding: 18px;

    color: #666360;
    border: 2px solid #232129;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${props => props.isFocused && css`
        color: #ff9000;
        border: 2px solid #ff9000;
    `};

    ${props => props.isFilled && css`
        color: #ff9000;
    `};

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #F4ede8;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;