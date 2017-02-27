var shops = ["Idea Coffee", "Stumptown", "Gregory's Coffee", "Starbucks", "Birch", "A Little Taste"];

function pickCoffeeShop(){
	return shops[Math.floor(Math.random()*shops.length)];
}

pickCoffeeShop();

module.exports.pickCoffeeShop = pickCoffeeShop;   