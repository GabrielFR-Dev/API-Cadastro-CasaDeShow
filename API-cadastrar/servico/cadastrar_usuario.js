import pool from './servico/conexao.js';


export async function cadastraUsuario(nome, email, telefone) {

    const conexao = await pool.getConnection();

    const resposta = conexao.query("INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)", [nome, email, telefone]);

    console.log(resposta);
    conexao.release();
}