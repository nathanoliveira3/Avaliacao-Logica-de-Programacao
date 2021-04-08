
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

let pessoa = {nome: '', celular:'', rua: '', numero: '', complemento:'', bairro:'', pontoReferencia: ''}

var contador = 0;

escolherTamanho();
escolherBorda();
escolherSabor();
escolherSegundoSabor();
escolherBebida();
escolhaEntrega();
confirmarPedido();



function escolherTamanho() {    

    let escolha = prompt('Escolha o tamanho da pizza:\n1 - Pequena 20cm  - R$25,00  \n2 - Média 25cm  - R$30,00   \n3 - Gigante 35cm  - R$40,00  \n4 - Família 40cm  - R$45,00');

    switch (escolha) {
        case '1': pedido.tamanho = {preco: 25.00, descricao: 'Pequena'}; break;
        case '2': pedido.tamanho = {preco: 30.00, descricao: 'Media'}; break;         
        case '3': pedido.tamanho = {preco: 40.00, descricao: 'Gigante'}; break;           
        case '4': pedido.tamanho = {preco: 45.00, descricao: 'Família'}; break;       
        default:
            alert("Essa opção não é válida.");
            escolherTamanho();
    }
}


function escolherBorda() {    

    let escolha = prompt('Escolha a borda da pizza:\n1 - Gorgonzola  - R$10,00  \n2 - Provolone  - R$8,00   \n3 - Catupiry  - R$5,00  \n4 - Cheddar - R$5,00 \n5 - Sem borda  - R$0,00');

    switch (escolha) {
        case '1': pedido.borda = {preco: 10.00, descricao: 'Gorgonzola'}; break;
        case '2': pedido.borda = {preco: 9.00, descricao: 'Provolone'}; break;
        case '3': pedido.borda = {preco: 5.00, descricao: 'Catupiry'}; break;
        case '4': pedido.borda = {preco: 5.00, descricao: 'Cheddar'}; break;
        case '5': pedido.borda = {preco: 0, descricao: 'Sem Borda'}; break;
        default:
            alert("Essa opção não é válida.");
            escolherBorda();
    }
}

function escolherSabor() {
   
    let escolha1 = prompt('Escolha o sabor da pizza:\n1 - Calabresa (Mussarela, Calabresa e cebola) \n2 - 4 Queijos (Mussarela, Cheddar, Parmesão e Prato) \n3 - Frango com Catupiry (Mussarela, Frango e Catupiry)  \n4 - Portuguesa (Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola) \n5 - Camarão (Mussarela, Camarão, Salsinha e Cebolinha) \n6 - Carne seca (Mussarela, Carne seca e Cream cheese) \n7 - Lombo Canadense (Mussarela, Lombo Canadense, Tomate, Orégano, Cebola) \n8 - X-Fritas (Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata');

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
            alert("Essa opção não é válida.");
            escolherSabor();            
    }   
}

//REVISAR
function escolherSegundoSabor(){
   
    let escolha2 = prompt('Deseja escolher mais um sabor?\n 1 - SIM\n 2 - NÃO').toLowerCase()
    if (escolha2 == '1' && contador < 2) {
        contador++;  
        escolherSabor();                   
    }

    if(pedido.sabor[0] == pedido.sabor[1]){
        alert('Você escolheu o mesmo sabor.')
        pedido.sabor.pop();
        escolherSegundoSabor();
    }
    
}


function escolherBebida (){
    let escolha = prompt('Escolha a bebida que você deseja:\n1 - Coca-Cola  - R$12,00  \n2 - Fanta  - R$10,00   \n3 - Guaraná Antarctica  - R$10,00  \n4 - H20  - R$8,00  \n5 - Del Valle  - R$7,00  \n6 - Sem bebida');
    switch (escolha) {
        case '1':pedido.bebida = {preco: 12, descricao: 'Coca-Cola'}; break;
        case '2':pedido.bebida = {preco: 10, descricao: 'Fanta'}; break;
        case '3':pedido.bebida = {preco: 10, descricao: 'Guaraná Antartica'}; break;
        case '4':pedido.bebida = {preco: 8, descricao: 'H2O'}; break;
        case '5':pedido.bebida = {preco: 7, descricao: 'Del Valle'}; break;
        case '6':pedido.bebida = {preco: 0, descricao: 'Sem Bebida'}; break;        
        default:
            alert("Essa opção não é válida.");
            escolherBebida();
    }

}

function escolhaEntrega(){
    let escolha = prompt('Escolha o tipo de entrega:\n 1 - Retirada no balcão - R$ 0,00\n 2 - Delivery - R$ 5,00');
    switch (escolha) {
        case '1': pedido.entrega = {preco: 0.00, descricao: 'Balcao'}; break;
        case '2': pedido.entrega = {preco: 5.00, descricao: 'Delivery'}; break;
        default:
            alert("Essa opção não é válida.");
            escolhaEntrega();
            
    }
}

function confirmarPedido(){
    pedido.valorTotal = pedido.tamanho.preco + pedido.borda.preco + pedido.bebida.preco + pedido.entrega.preco;
    alert(`O valor do seu pedido foi ${aplicarMascaraParaRealComPrefixo(pedido.valorTotal)}`)
    let escolha = prompt('Deseja confirmar o pedido? \n1 - SIM \n2 - NÃO')
    switch (escolha) {
        case '1':
            dadosCliente();
            formaPagamento();
            criarNumeroPedido();
            alertaTempoEntrega();
            break;
        case '2':
            pedido ={
                tamanho: undefined,
                borda: undefined,
                sabor: [],
                bebida: undefined,
                entrega: undefined
            };
            document.write(`<h1>Você pode reiniciar o seu pedido a qualquer momento.</h1>`)
            break;
        
        default:
            alert("Essa opção não é válida.");
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
    let escolha = prompt('Escolha a forma de pagamento:\n 1- Cartão de Crédito \n 2- Cartão de Débito \n 3- PIX\n 4- PicPay\n 5- Dinheiro')
    switch(escolha){
        case '1': pedido.pagamento = 'Cartão de Crédito'; break;
        case '2': pedido.pagamento = 'Cartão de Débito'; break;
        case '3': pedido.pagamento = 'PIX'; break;
        case '4': pedido.pagamento = 'PicPay'; break;
        case '5': pedido.pagamento = 'Dinheiro';
            let troco = prompt('Você precisa de troco?\n 1- SIM\n 2- NÃO');
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


