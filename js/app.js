
let pedido ={
    tamanho: undefined,
    borda: undefined,
    sabor: [],
    bebida: undefined,
    entrega: undefined,
    valorTotal: undefined,
    dadosCliente: undefined,
    pagamento: undefined,
    id: undefined
};

const novoPedido = document.querySelector('#novo-pedido');
const resultado = document.querySelector('.resultado');
const btn = document.querySelector('#btn');

let pessoa = {nome: '', celular:'', rua: '', numero: '', complemento:'', bairro:'', pontoReferencia: ''};

var contador = 0;

function init(){  
     
    escolherTamanho();
    escolherBorda();
    escolherSabor();
    escolherSegundoSabor();
    escolherBebida();
    escolhaEntrega();
    confirmarPedido();    

    pedido = {
        tamanho: undefined,
        borda: undefined,
        sabor: [],
        bebida: undefined,
        entrega: undefined,
        valorTotal: undefined,
        dadosCliente: undefined,
        pagamento: undefined,
        id: undefined
    };
}

function escolherTamanho() {    

    let escolha = prompt('Escolha o tamanho da pizza: \n\n1 - Pequena 20cm  - R$25,00  \n2 - Média 25cm  - R$30,00   \n3 - Gigante 35cm  - R$40,00  \n4 - Família 40cm  - R$45,00');

    switch (escolha) {
        case '1': pedido.tamanho = {preco: 25.00, descricao: 'Pequena'}; break;
        case '2': pedido.tamanho = {preco: 30.00, descricao: 'Média'}; break;         
        case '3': pedido.tamanho = {preco: 40.00, descricao: 'Gigante'}; break;           
        case '4': pedido.tamanho = {preco: 45.00, descricao: 'Família'}; break;       
        default:
            alert("Desculpe, mas esta opção não é válida.");
            escolherTamanho();
    }
}

function escolherBorda() {    

    let escolha = prompt('Escolha a borda da pizza: \n\n1 - Gorgonzola  - R$10,00  \n2 - Provolone  - R$8,00   \n3 - Catupiry  - R$5,00  \n4 - Cheddar - R$5,00 \n5 - Sem borda  - R$0,00');

    switch (escolha) {
        case '1': pedido.borda = {preco: 10.00, descricao: 'Gorgonzola'}; break;
        case '2': pedido.borda = {preco: 9.00, descricao: 'Provolone'}; break;
        case '3': pedido.borda = {preco: 5.00, descricao: 'Catupiry'}; break;
        case '4': pedido.borda = {preco: 5.00, descricao: 'Cheddar'}; break;
        case '5': pedido.borda = {preco: 0, descricao: 'Sem borda'}; break;
        default:
            alert("Desculpe, mas esta opção não é válida.");
            escolherBorda();
    }
}

function escolherSabor() {
   
    let escolha1 = prompt('Escolha o sabor da pizza: \n\n1 - Calabresa (Mussarela, Calabresa e cebola) \n2 - 4 Queijos (Mussarela, Cheddar, Parmesão e Prato) \n3 - Frango com Catupiry (Mussarela, Frango e Catupiry)  \n4 - Portuguesa (Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola) \n5 - Camarão (Mussarela, Camarão, Salsinha e Cebolinha) \n6 - Carne seca (Mussarela, Carne seca e Cream cheese) \n7 - Lombo Canadense (Mussarela, Lombo Canadense, Tomate, Orégano, Cebola) \n8 - X-Fritas (Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata');

    switch (escolha1) {
        case '1': pedido.sabor.push('Calabresa'); break;
        case '2': pedido.sabor.push('4 Queijos'); break;
        case '3': pedido.sabor.push('Frango com Catupiry'); break;
        case '4': pedido.sabor.push('Portuguesa'); break;
        case '5': pedido.sabor.push('Camarão'); break;
        case '6': pedido.sabor.push('Carne Seca'); break;
        case '7': pedido.sabor.push('Lombo Canadense'); break;
        case '8': pedido.sabor.push('X-Fritas'); break;
        default: 
            alert("Desculpe, mas esta opção não é válida.");
            escolherSabor();            
    }   
}

function escolherSegundoSabor(){
   
    let escolha2 = prompt('Deseja escolher mais um sabor? \n\n 1 - SIM\n 2 - NÃO').toLowerCase()
    if (escolha2 == '1' && contador < 2) {
        contador++;  
        escolherSabor();                   
    }

    if(pedido.sabor[0] == pedido.sabor[1]){
        alert('Você escolheu o mesmo sabor...vamos tentar novamente?')
        pedido.sabor.pop();
        escolherSegundoSabor();
    }    
}

function escolherBebida (){
    let escolha = prompt('Escolha a bebida que você deseja: \n\n1 - Coca-Cola  - R$12,00  \n2 - Fanta  - R$10,00   \n3 - Guaraná Antarctica  - R$10,00  \n4 - H20  - R$8,00  \n5 - Del Valle  - R$7,00  \n6 - Sem bebida');
    switch (escolha) {
        case '1':pedido.bebida = {preco: 12, descricao: 'Coca-Cola'}; break;
        case '2':pedido.bebida = {preco: 10, descricao: 'Fanta'}; break;
        case '3':pedido.bebida = {preco: 10, descricao: 'Guaraná Antartica'}; break;
        case '4':pedido.bebida = {preco: 8, descricao: 'H2O'}; break;
        case '5':pedido.bebida = {preco: 7, descricao: 'Del Valle'}; break;
        case '6':pedido.bebida = {preco: 0, descricao: 'Sem bebida'}; break;        
        default:
            alert("Desculpe, mas esta opção não é válida.");
            escolherBebida();
    }
}

function escolhaEntrega(){
    let escolha = prompt('Escolha o tipo de entrega: \n\n 1 - Retirada no balcão - R$ 0,00\n 2 - Delivery - R$ 5,00');
    switch (escolha) {
        case '1': pedido.entrega = {preco: 0.00, descricao: 'Balcao'}; break;
        case '2': pedido.entrega = {preco: 5.00, descricao: 'Delivery'}; break;
        default:
            alert("Desculpe, mas esta opção não é válida.");
            escolhaEntrega();
            
    }
}

function confirmarPedido(){
    pedido.valorTotal = pedido.tamanho.preco + pedido.borda.preco + pedido.bebida.preco + pedido.entrega.preco;
    alert(`O valor do seu pedido foi ${aplicarMascaraParaRealComPrefixo(pedido.valorTotal)}`)
    let escolha = prompt('Deseja confirmar o pedido? \n\n1 - SIM \n2 - NÃO')
    switch (escolha) {
        case '1':
            dadosCliente();
            formaPagamento();
            criarNumeroPedido();
            alertaTempoEntrega();
            escreverNaTela();
            break;
        case '2':
            criandoHtml(`Você poderá reiniciar o seu pedido a qualquer momento atualizando o navegador.`, 'paragrafo1');
            novoPedido.removeChild(btn);  
                      
            break;
        default:
            alert("Desculpe, mas esta opção não é válida.");
            confirmarPedido();
    }
}


function aplicarMascaraParaRealComPrefixo(valor) {
    if (isNaN(valor))
        return 0;
    return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function dadosCliente(){
    pessoa.nome = prompt('Digite seu nome');
    pessoa.celular = parseInt(prompt('Digite o número do seu celular'));
    pessoa.rua = prompt('Digite sua rua');
    pessoa.numero = parseInt(prompt('Digite o número'));
    pessoa.complemento = prompt('Digite o complemento');
    pessoa.bairro = prompt('Digite seu bairro');
    pessoa.pontoReferencia = prompt('Digite um ponto de referência');

    pedido.dadosCliente = pessoa;
}

function formaPagamento(){
    let escolha = prompt('Escolha a forma de pagamento: \n\n 1- Cartão de Crédito \n 2- Cartão de Débito \n 3- PIX\n 4- PicPay\n 5- Dinheiro')
    switch(escolha){
        case '1': pedido.pagamento = {descricao: 'Cartão de Crédito' , troco: 0}; break;
        case '2': pedido.pagamento = {descricao: 'Cartão de Débito' , troco: 0}; break;
        case '3': pedido.pagamento = {descricao: 'PIX' , troco: 0}; break;
        case '4': pedido.pagamento = {descricao: 'PicPay' , troco: 0}; break;
        case '5': pedido.pagamento = {descricao: 'Dinheiro' , troco: 0};
            let troco = prompt('Você vai precisar de troco?\n 1- SIM\n 2- NÃO');
            if(troco == '1'){                
                let valor = parseInt(prompt('Para qual valor você precisa de troco?'));     
                let valorTroco = valor - pedido.valorTotal;
                pedido.pagamento = {descricao: 'Dinheiro', troco: valorTroco};   
                break;           
            } else{
                break;
            }        
        default:
            alert("Essa opção não é válida.");
            formaPagamento();
    }
}

function criarNumeroPedido(){
    pedido.id = (Math.random() * 1000).toFixed(0);
}

function alertaTempoEntrega(){
    alert(`Sr(a). ${pessoa.nome}, agradecemos pela preferência! O número do seu pedido é: ${pedido.id}. O prazo de entrega é de 90 minutos.`)
}

function escreverNaTela(){    
     
    criandoHtml(`${pessoa.nome}`, 'paragrafo1');
    criandoHtml(`ID ${pedido.id}`, 'paragrafo1');
    criandoHtml(`Sabor: ${pedido.sabor.join(' e ')}`, 'paragrafo2');
    criandoHtml(`Tamanho: ${pedido.tamanho.descricao}`, 'paragrafo2');
    criandoHtml(`Borda: ${pedido.borda.descricao}`, 'paragrafo2');
    criandoHtml(`Bebida: ${pedido.bebida.descricao}`, 'paragrafo2');
    criandoHtml(`Valor: ${aplicarMascaraParaRealComPrefixo(pedido.valorTotal)}`, 'paragrafo2');
    criandoHtml(`Rua: ${pessoa.rua} | Telefone:${pessoa.celular} | Número:${pessoa.numero}`, 'paragrafo2');
    criandoHtml(`Complemento: ${pessoa.complemento} | Bairro: ${pessoa.bairro}  |  Ponto de referência: ${pessoa.pontoReferencia}`, 'paragrafo2');     
    criandoHtml(`Forma de Pagamento: ${pedido.pagamento.descricao}`, 'paragrafo2');
    criandoHtml(`Troco: ${aplicarMascaraParaRealComPrefixo(pedido.pagamento.troco)}`, 'paragrafo2');    
    criandoHtml(`Sr(a). ${pessoa.nome.toUpperCase()}, a WEB PIZZAS agradece pela preferência! O prazo de entrega é de 90 minutos.`, 'paragrafo1');
   
    resultado.style.border = 'solid white';
    novoPedido.removeChild(btn);     

}

function criandoHtml(mensagem, paragrafo){
    let paragrafo1 = document.createElement('p');
    let paragrafo2 = document.createElement('p');    
    if(paragrafo == 'paragrafo1'){
        resultado.appendChild(paragrafo1);
        paragrafo1.appendChild(document.createTextNode(mensagem));
        paragrafo1.setAttribute('class','paragrafo1');
    }else{
        resultado.appendChild(paragrafo2);
        paragrafo2.appendChild(document.createTextNode(mensagem));   
        paragrafo2.setAttribute('class','paragrafo2');
    }   
    
}



