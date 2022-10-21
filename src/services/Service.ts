import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

//url irá concatenar a baseURL (linha 4) com a url de login da API (/usuarios/login)
//dados receberá o json com as informações inseridas nos campos
//setDado objeto irá receber os dados do usuario e o token da API
export const login = async(url: any, dados: any, setDado: any) => {
    //adicionando ao método post da api url e dados
    const resposta = await api.post(url, dados)
    //guarda os dados da variavel acima
    setDado(resposta.data.token)
}

export const busca = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}