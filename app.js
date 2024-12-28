function tossCoin() {
    let tossResult = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById("result").textContent = "The result of the coin toss is  :   " + tossResult;
}
