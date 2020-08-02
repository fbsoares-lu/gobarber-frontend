import React from 'react';
import {FiLogIn} from 'react-icons/fi'

import logo from '../../assets/Logo.svg';

import { Container, Content, Background} from './styles';

const Signin: React.FC = () => (
    <Container>
        <Content>
            <img src={logo} alt="logo"/>
            <form>
                <h1>Faça seu login</h1>
                <input placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button>Entrar</button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="">
                <FiLogIn/>
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
); 

export default Signin;