const pedido = [];

escolherTamanho();
escolherBorda();

function escolherTamanho (){

    const tamanho = { tamanhoPizza: '', preco: 0 }

    let escolha = prompt('Escolha o tamanho da pizza:\n1 - Pequena 20cm  - R$25,00  \n2 - Média 25cm  - R$30,00   \n3 - Gigante 35cm  - R$40,00  \n4 - Família 40cm  - R$45,00');

    switch(escolha){
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


function escolherBorda(){
    const borda = { bordaPizza: '', preco: 0 }

    let escolha = prompt('Escolha a borda da pizza:\n1 - Gorgonzola  - R$10,00  \n2 - Provolone  - R$8,00   \n3 - Catupiry  - R$5,00  \n4 - Cheddar - R$5,00 \n5 - Sem borda  - R$0,00');

    switch(escolha){
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

console.log(pedido); 