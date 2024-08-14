

const products = {
    
    Camisa: '€ 10',
    Pantalon: '€ 20',
    Zapatos: '€ 40',
    Chaqueta: '€ 50',
    Abrigo: '€ 80',
};

let nameUser = prompt('Cual es tu nombre?');

const yourName = () => {
    let choose = alert(`Hola, ${nameUser.charAt(0).toUpperCase() + nameUser.slice(1)} `);
    return choose;

};

const ourProducts = () => {
    const claves = Object.keys(products)
    let showingProducts = '';
    for (let i = 0; i < claves.length; i++) {
        const product = claves[i];
        showingProducts += product;
        if (i < claves.length -1) {
            showingProducts += ' , ';
        }
        
    }
    alert(`Estos son los productos que manejamos: ${showingProducts}`);
};


const chooseProduct = () => {
    let productchoosen = prompt('Cual producto te interesa?');
    productchoosen = productchoosen.charAt(0).toUpperCase() + productchoosen.slice(1) ;
    if (productchoosen === 'Camisa' ) {
        return alert(`Este es el valor de la Camisa: ${products.Camisa} `);
    } else if (productchoosen === 'Pantalon') {
        return alert(`Este es el valor del Pantalon: ${products.Pantalon} `);
    } else if (productchoosen === 'Zapatos') {
        return alert(`Este es el valor de los Zapatos: ${products.Zapatos} `);
    } else if (productchoosen === 'Chaqueta') {
        return alert(`Este es el valor de la Chaqueta: ${products.Chaqueta} `);
    } else if (productchoosen === 'Abrigo') {
        return alert(`Este es el valor del Abrigo: ${products.Abrigo} `);
    } else {
        return alert('No tenemos ese producto.');
    }

};


function main() {
    yourName();
    ourProducts();
    chooseProduct();
};

main();