import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'

import logo from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
    <Container>
        <Content>
            <img src={logo} alt="logo"/>
            <form>
                <h1>Faça seu login</h1>

                <Input name="E-mail" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" icon={FiLock}  type="password" placeholder="Senha"/>

                <Button>Entrar</Button>
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