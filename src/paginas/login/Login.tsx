import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login () {

    let navigate = useNavigate();
// irá guardar/controlar o uso do token na API
    const [token, setToken] = useLocalStorage('token');

// UserLogin acessa a informação do do useState
//setUserLogin altera a informação do useState
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {//fazendo UserLogin começar com campos zerados
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )
    //função que altera o HTML
    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
// spread operator (...) espalha as informações de userLogin para dentro de setUserLogin
            ...userLogin,
// captura chave e valor dos campos e envia a model
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(token != ''){
            navigate('/home')
        }
    }, [token])

// configurando o submit do login
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
// previne o comportamento padrão do botão de atualizar a tela
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
// está pegando o token da API e jogando na localstorage para manter conectado
            alert('Usuário logado com sucesso');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center'xs={ 6 }>
                <Box paddingX={ 20 }>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={ userLogin.usuario } onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={ userLogin.senha } onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop = { 2 } textAlign='center'>
                          
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={ 2 }>
                        <Box marginRight={ 1 }>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        
                        </Link>
                    </Box>

                </Box>

            </Grid>
            <Grid xs={ 6 } className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login;