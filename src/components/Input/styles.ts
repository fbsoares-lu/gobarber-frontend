import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border: 1px solid #232129;
    border-radius: 10px;
    background: #232129;
    padding: 18px;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

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