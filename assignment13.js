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

// Filter() method

const price = [25, 30, 15, 55, 40, 10];

const filterPrice = price.filter(function(price){
    return price >= 30;
});

console.log("Price", filterPrice);

// Reduce() method

const weeklyExpenses = [200, 350, 1500, 5000, 450, 680, 350];

const resultData = weeklyExpenses.reduce(function(first, last){
    return first + last;
});

console.log("Result Data", resultData);