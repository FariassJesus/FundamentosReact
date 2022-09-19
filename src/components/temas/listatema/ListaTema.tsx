import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from '@mui/material'
import './ListaTema.css';
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";

function ListaTema() {
    return (
    <Box m={2}>
    <Card variant="outlined">
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Tema
            </Typography>
            <Typography variant="h5" component="h2">
                {tema.descricao}
            </Typography>
        </CardContent>
        <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size="small" color="primary">
                            Atualizar
                        </Button>
                    </Box>
                </Link>
                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                        <Button variant="contained" size="small" color="secondary">
                            Deletar
                        </Button>
                    </Box>
                </Link>
            </Box>
        </CardActions>
    </Card>
    </Box>
    )
}

export default ListaTema;