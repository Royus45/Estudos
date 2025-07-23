import app from "./src/api.js"

const PORT = 3000;//porta que vai estar rodando o servidor
const arrCartas = [
    {
        id:1,
        carta: "Solemn Simulacrum"
    },
    {
        id:2,
        carta: "Black Lotus"
    },
    {
        id:3,
        carta: "testemunha granítica"
    }]
const dataHora = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo' // Fuso horário do Brasil // sofri um pouco aqui :P
});
//tratamento de rotas
//'/' rota padrão
// req,res - request e response -> req -> pedido | res -> resposta
app.get('/', (req,res)=>{
      //dentro do app.get consigo criar as coisas.
      //res.send() é para itens simples.
    res.status(200).json({//status 200 diz que está tudo ok / uso .json para itens mais complexos
        itens: arrCartas,
        dia_e_horario: dataHora
    })
})

app.listen(PORT, ()=>{
    console.log(`O servidor está rodando na porta ${PORT}`);
    //listen = está 'ouvindo' as atualizações
    //PORT = porta que o servidor vai ser iniciado| função de callback 
})
