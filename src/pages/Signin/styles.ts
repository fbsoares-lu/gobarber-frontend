import styled from 'styled-components';
import { shade } from 'polished';

import SingInBackgroundImg from '../../assets/SingInBackground.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            width: 100%;
            border: 1px solid #232129;
            border-radius: 10px;
            background: #232129;
            padding: 18px;
            color: #F4ede8;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 8px;
            }
        }

        button {
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
        }

        a {
            color: #F4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')}
            }
        }
    }

    > a {
        color: #FF9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#FF9000')}
        }
    }

`;
export const Background = styled.div`
    flex: 1;
    background: url(${SingInBackgroundImg}) no-repeat center;
    background: cover;
`;