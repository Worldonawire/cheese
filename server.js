//
// "test": "echo \"Error: no test specified\" && exit 1"
function cheesify (firstName, lastName) {
    let cheeseBoard = ["Wensleydale", "Cheddar", "Stilton", "Caerphlly", "Red Leicester", "Cornish Blue"]
    let randomCheese = cheeseBoard[Math.floor(Math.random() * cheeseBoard.length)];
    let cheesyName = `🧀🧀🧀 Your cheesy name is ${firstName} ${randomCheese} 🧀🧀🧀`;
    return cheesyName;
}

console.log(cheesify("Mark", "Herring"));

module.exports = { cheesify };