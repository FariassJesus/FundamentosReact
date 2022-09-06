import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box } from '@mui/material';

function CadastroUsuario(){
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={ 6 } className='imagem2'></Grid>
            <Grid item xs={ 6 } alignItems='center'>
                <Box paddingX={ 20 }>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth></TextField>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField id='tipo' label='tipo' variant='outlined' name='tipo' margin='normal' fullWidth></TextField>

                        <Box marginTop = { 2 } textAlign='center'>
                            <Link to='/login' className='text-decorator-none' >
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;