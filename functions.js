var shops = ["Idea Coffee", "Stumptown", "Gregory's Coffee", "Starbucks", "Birch", "A Little Taste"];

function pickCoffeeShop(){
	response = "You're going to " + shops[Math.floor(Math.random()*shops.length)] + " today";
	return response;
}

pickCoffeeShop();

module.exports.pickCoffeeShop = pickCoffeeShop;   