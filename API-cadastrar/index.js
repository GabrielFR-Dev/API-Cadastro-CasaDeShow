import express from 'express';
import cors from 'cors';



const app = express();

app.use(cors());
app.use(express.json());




app.listen(3001, async() => {
    const data = new Date();

    Console.log(`Servidor Iniciado em ${data}`)
})