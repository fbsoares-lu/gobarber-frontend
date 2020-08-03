import styled from 'styled-components';

import { shade } from 'polished'

export const Container = styled.button`
    margin-top: 24px;
    width: 100%;
    height: 56px;
    border: 0;
    border-radius: 10px;
    background: #FF9000;
    padding: 0 18px;
    color: #312e38;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#FF9000')}
    }
`;