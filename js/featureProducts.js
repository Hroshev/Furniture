const cardsProduct = [
    {
        isAvaliable: true,
        imgUrl: 'img/featuredProducts/1.png',
        title: 'Wooden Table-Chair',
        text: 'You don’t have and a tablechair. Shop with 40% discount !',
        price: 1299,
        rating: '3',
        isSpecial: true
    },
    {
        isAvaliable: true,
        imgUrl: 'img/featuredProducts/2.png',
        title: 'Lorem',
        text: 'Test text',
        price: 809,
        rating: '5',
        isSpecial: true
    },
];

const makeElement = function(tagName, className, text){
    const element = document.createElement(tagName);
    element.classList.add(className);
    if(text) {
        element.textContent = text;
    }
    return element;
};

const createCard = function(product) {
    const listItem = makeElement('li', 'product');

    const picture = makeElement('img', 'testClass');
    picture.src = product.imgUrl;
    listItem.appendChild(picture);

    const title = makeElement('h3', 'testClass', product.title);
    listItem.appendChild(title);

    const text = makeElement('p', 'testClass', product.text);
    listItem.appendChild(text);

    const wrap = makeElement('div', 'inner');
    listItem.appendChild(wrap);

    const price = makeElement('p', 'testClass', product.price);
    wrap.appendChild(price);

    const button = makeElement('a', 'btn', 'Shop Now');
    button.href = '#';
    wrap.appendChild(button);

    const star = makeElement('img', 'imgClass');
    star.src = 'img/featuredProducts/star.png';
    listItem.appendChild(star);



    // const availabilityClass = 'product--available';
    // if (!product.isAvailable) {
    //     availabilityClass = 'product--unavailable';
    // }
    // listItem.classList.add(availabilityClass);

    // if (product.isSpecial) {
    //     listItem.classList.add('product--special');
    //     var specialPrice = makeElement('p', 'product__special-price', product.specialPrice);
    //     listItem.appendChild(specialPrice);
    // }

    return listItem;
}

//Перебор массива
const cardList = document.querySelector('.featured__products');

for (let i = 0; i < cardsProduct.length; i++) {
    const cardItem = createCard(cardsProduct[i]);
    cardList.appendChild(cardItem);
}