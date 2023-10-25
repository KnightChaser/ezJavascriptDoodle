// When you have to make multiple object literals

//       |------ capitalize the first character for the construction functions
function Item(title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`${title}'s price is $ ${price}.`);
    }
    // return this;
}

const item1 = new Item("computer", 4500);
const item2 = new Item("wallet", 240);
const item3 = new Item("boomboombambam", 1234)

console.log(item1, item2, item3);

item3.showPrice();