import express from 'express';
import cors from 'cors';
import {cadastraUsuario} from './servico/cadastrar_usuario.js';
import { validaUsuario } from './validacao/validaDados.js';



const app = express();

app.use(cors());
app.use(express.json());

app.post('/usuarios', async (req, res) => {
    
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    const usuarioValido = validaUsuario(nome, email, telefone);

    if (usuarioValido.status){
        await cadastraUsuario(nome, email, telefone)
        res.status(201).send({mensagem: 'Usuário cadastrado com sucesso'});
    }else {
        res.status(400).send({mensagem: usuarioValido.mensagem});
    }



})


app.listen(3001, async() => {
    const data = new Date();

    console.log(`Servidor Iniciado em ${data}`)
})