var pessoas = ["João", "Geovana", "Gustavo", "Rodrigo"]

while (pessoas.length <= 100){
    var idade = 20;
    var dataAtual = new Date();
    var dataEvento = new Date("Jun 11 2025");


    consolole.log("Bem vindo ao cadastro de eventos")
    consolole.log("Hoje é dia: "+dataAtual)

    if(dataEvento < dataAtual){
        console.log("A data não pode ser validada")
        console.log("selecione uma data posterior")
    }else{
        console.log("A data do evento será "+dataEvento+" !")

        if(idade <= 17){
            console.log("Cadastro não permitido pela idade!")
        }else{
            console.log("Sua idade é "+idade+", você irá participar do evento!")
            console.log("Temos os seguintes participantes: "+pessoas)
            console.log("Evento cadastrado com sucesso")
            console.log("Será possivel cadastrar mais participantes")
            pessoas.push("Mauricio")
            console.log("Novo participante cadastrado")
            console.log("Agora estamos com os seguintes participantes: "+pessoas)
        }
    }
}

if (pessoas.length > 100){
    console.log("Limite de participantes excedido.")
}