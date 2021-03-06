import React, {useCallback} from 'react';
import {FiArrowLeft, FiUser, FiMail, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => {

    const handleSubmit = useCallback(async (data:object) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório') 
                    .email('Digite um e-mail válido'),
                password: Yup.string()
                    .min(6, 'No mínimo 6 dígitos'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
        }
    },[]);

    return (
        <Container>
        <Background />
        <Content>
            <img src={logo} alt="logo"/>
            <Form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input name="name" icon={FiUser} placeholder="Nome"/>
                <Input name="E-mail" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" icon={FiLock}  type="password" placeholder="Senha"/>

                <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="">
                    <FiArrowLeft/>
                    Voltar para o login
                </a>
            </Content>
        </Container>
    )
}; 

export default Signup;