import React from 'react';
import Button from './Button';

export default {
    title: 'Buttons',
    component: Button
};

export const ButtonLogin = () => <Button background="#125650" width="23.75em" height="3.5em">Entrar</Button>
export const ButtonCreateAccount = () => <Button background="#556EA2" width="23.75em" height="3.5em">Concordar e criar conta</Button>
export const ButtonServiceTerms = () => <Button background="#556EA2" width="7.5em" height="2.25em">OK</Button>
export const SecondCreateAccount = () => <Button color="#804090">Criar Conta</Button>
export const RecoverPassword = () => <Button color="#804090">Recuperar Senha</Button>
export const BacktoLogin = () => <Button color="#804090">Voltar ao Login</Button>