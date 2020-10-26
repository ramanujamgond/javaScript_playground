// JavaScript methods to boost skills
// Iterator in javascripts

const toolBox = ['Hammer', 'Screwdriver', 'Ruler'];

for(const item of toolBox) {
    console.log(item);
}

// Map() method

const productPriceList = [200, 350, 1500, 5000];

productPriceList.map(function(item) {
    return item * 0.75;
});

console.log("Product Price List", productPriceList);