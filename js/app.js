const pedido = [];
const sabor = { saborPizza: [] }
var contador = 0;

escolherTamanho();
escolherBorda();
escolherSabor();

function escolherTamanho() {

    const tamanho = { tamanhoPizza: '', preco: 0 }



    let escolha = prompt('Escolha o tamanho da pizza:\n1 - Pequena 20cm  - R$25,00  \n2 - Média 25cm  - R$30,00   \n3 - Gigante 35cm  - R$40,00  \n4 - Família 40cm  - R$45,00');

    switch (escolha) {
        case '1':
            tamanho.preco = 25.00;
            tamanho.tamanhoPizza = 'Pequena';
            pedido.push(tamanho);
            break;

        case '2':
            tamanho.preco = 30.00;
            tamanho.tamanhoPizza = 'Media';
            pedido.push(tamanho);
            break;

        case '3':
            tamanho.preco = 40.00
            tamanho.tamanhoPizza = 'Gigante';
            pedido.push(tamanho);
            break;

        case '4':
            tamanho.preco = 45.00;
            tamanho.tamanhoPizza = 'Família';
            pedido.push(tamanho);
            break;

        default:
            alert("Essa opção não é válida.");
            escolherTamanho();
    }

}


function escolherBorda() {
    const borda = { bordaPizza: '', preco: 0 }

    let escolha = prompt('Escolha a borda da pizza:\n1 - Gorgonzola  - R$10,00  \n2 - Provolone  - R$8,00   \n3 - Catupiry  - R$5,00  \n4 - Cheddar - R$5,00 \n5 - Sem borda  - R$0,00');

    switch (escolha) {
        case '1':
            borda.preco = 10.00;
            borda.bordaPizza = 'Gorgonzola';
            pedido.push(borda);
            break;

        case '2':
            borda.preco = 8.00;
            borda.bordaPizza = 'Provolone';
            pedido.push(borda);
            break;

        case '3':
            borda.preco = 5.00
            borda.bordaPizza = 'Catupiry';
            pedido.push(borda);
            break;

        case '4':
            borda.preco = 5.00;
            borda.bordaPizza = 'Cheddar';
            pedido.push(borda);
            break;

        case '5':
            borda.preco = 0;
            borda.bordaPizza = 'Sem borda';
            pedido.push(borda);
            break;

        default:
            alert("Essa opção não é válida.");
            escolherBorda();
    }
}

function escolherSabor() {
   

    let escolha1 = prompt('Escolha o sabor da pizza:\n1 - Calabresa (Mussarela, Calabresa e cebola) \n2 - 4 Queijos (Mussarela, Cheddar, Parmesão e Prato) \n3 - Frango com Catupiry (Mussarela, Frango e Catupiry)  \n4 - Portuguesa (Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola) \n5 - Camarão (Mussarela, Camarão, Salsinha e Cebolinha) \n6 - Carne seca (Mussarela, Carne seca e Cream cheese) \n7 - Lombo Canadense (Mussarela, Lombo Canadense, Tomate, Orégano, Cebola) \n8 - X-Fritas (Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata');

    switch (escolha1) {
        case '1':
            sabor.saborPizza.push('Calabresa');

            break;

        case '2':
            sabor.saborPizza.push('4 Queijos');

            break;

        case '3':
            sabor.saborPizza.push('Frango com catupiry');

            break;

        case '4':
            sabor.saborPizza.push('Portuguesa');

            break;

        case '5':
            sabor.saborPizza.push('Camarão');

            break;
        case '6':
            sabor.saborPizza.push('Carne Seca');

            break;
        case '7':
            sabor.saborPizza.push('Lombo Canadense');

            break;
        case '8':
            sabor.saborPizza.push('X Fritas');

            break;

        default:
            alert("Essa opção não é válida.");
            escolherSabor();
    }
    
    
}

// ORGANIZAR ESSA PARTE DO CÓDIGO
pedido.push(sabor); 
let escolha2 = prompt('Deseja escolher mais um sabor? sim ou não').toLowerCase()
if (escolha2 == 'sim' && contador < 2) {
    contador++;
    escolherSabor();      
}

if(sabor.saborPizza[0] == sabor.saborPizza[1]){
    alert('Você escolheu o mesmo sabor.')
    sabor.saborPizza.pop();
    escolherSabor();
}



/*
(Calabresa)
Mussarela, Calabresa e cebola
(4 Queijos)
Mussarela, Cheddar, Parmesão e Prato
(Frango com Catupiry)
Mussarela, Frango e Catupiry
(Portuguesa)
Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola
(Camarão)
Mussarela, Camarão, Salsinha e Cebolinha
(Carne seca)
Mussarela, Carne seca e cream cheese
(Lombo Canadense)
Mussarela, Lombo Canadense, Tomate, Orégano, Cebola
(X-Fritas)
Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
 */