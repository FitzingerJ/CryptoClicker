
let coins = 0,
  clicks = 0,
  cursor = 0,
  grandma = 0,
  farm = 0,
  mine = 0,
  factory = 0,
  bank = 0,
  temple = 0,
  tower = 0;

let clickCost = 50,
  cursorCost = 15,
  grandmaCost = 100,
  farmCost = 1100,
  mineCost = 12000,
  factoryCost = 130000,
  bankCost = 1200000,
  templeCost = 20000000,
  towerCost = 330000000;

let click = 1,
  cursors = 0,
  grandmas = 0,
  farms = 0,
  mines = 0,
  factories = 0,
  banks = 0,
  temples = 0,
  towers = 0;

function setCoins(){
  coins = localStorage.getItem("coins");
  document.getElementById("coins").innerHTML = coins + " coins";
}

document.querySelector(".mainCoin").addEventListener("click", function() {
  coins = coins + click;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins";
});

document.querySelector(".powerClick").addEventListener("click", function() {
  if (coins - clickCost >= 0) {
    coins = coins - 50;
    click = click * 2;
    clicks = clicks + 1;
    clickCost = clickCost * 5;
    cursors = cursors * 2;
    document.getElementById("pp").innerHTML = "You have " + clicks + " Power Clicks | Cost: " + clickCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Power Click. Now you have " + clicks + ".";
  } else {
    coins = coins;
    clicks = clicks;
    clickCost = clickCost;
  }
});

let clickerRun = function() {
  coins = coins + cursors;
  coins = Math.ceil(coins * 10) / 10;
  document.getElementById("coins").innerHTML = coins + " coins";
};

document.querySelector(".clicker").addEventListener("click", function() {
  if (coins - cursorCost >= 0) {
    console.log("clicker is equal to " + cursorCost);
    coins = coins - cursorCost;
    cursorCost = Math.round(cursorCost * 1.5);
    cursors = cursors + 0.1;
    setInterval(clickerRun, 1000);
    cursor = cursor + 1;
    document.getElementById("pc").innerHTML = "You have " + cursor + " Clickers | Cost: " + cursorCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Clicker. Now you have " + cursor + ".";
  }
});

let grandmaRun = function() {
    coins = coins + grandmas;
    document.getElementById("coins").innerHTML = coins + " coins"
  }

document.querySelector(".grandma").addEventListener("click", function() {
  if (coins - grandmaCost >= 0) {
    coins = coins - grandmaCost;
    grandmaCost = Math.round(grandmaCost * 1.5);
    grandmas = grandmas + 1;
    setInterval(grandmaRun, 1000);
    grandma = grandma + 1;
    document.getElementById("pg").innerHTML = "You have " + grandma + " Grandmas | Cost: " + grandmaCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Grandma. Now you have " + grandma + ".";
  }
});

let farmRun = function() {
    coins = coins + farms;
    document.getElementById("coins").innerHTML = coins + " coins"
  }

document.querySelector(".farm").addEventListener("click", function() {
  if (coins - farmCost >= 0) {
    coins = coins - farmCost;
    farmCost = Math.round(farmCost * 1.5);
    farms = farms + 3;
    setInterval(farmRun, 1000);
    farm = farm + 1;
    document.getElementById("pf").innerHTML = "You have " + farm + " Farms | Cost: " + farmCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Farm. Now you have " + farm + ".";
  }
});

let mineRun = function() {
  coins = coins + mines;
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".mine").addEventListener("click", function() {
  if (coins - mineCost >= 0) {
    coins = coins - mineCost;
    mineCost = Math.round(mineCost * 1.5);
    mines = mines + 10;
    setInterval(mineRun, 1000);
    mine = mine + 1;
    document.getElementById("pm").innerHTML = "You have " + mine + " Mines | Cost: " + mineCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Mine. Now you have " + mine + ".";
  }
});

let factoryRun = function() {
  coins = coins + factories;
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".factory").addEventListener("click", function() {
  if (coins - factoryCost >= 0) {
    coins = coins - factoryCost;
    factoryCost = Math.round(factoryCost * 1.5);
    factories = factories + 50;
    setInterval(factoryRun, 1000);
    factory = factory + 1;
    document.getElementById("fp").innerHTML = "You have " + factory + " Factories | Cost: " + factoryCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Factory. Now you have " + factory + ".";
  }
});

let bankRun = function() {
  coins = coins + banks;
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".bank").addEventListener("click", function() {
  if (coins - bankCost >= 0) {
    coins = coins - bankCost;
    bankCost = Math.round(bankCost * 1.5);
    banks = banks + 100;
    setInterval(bankRun, 1000);
    bank = bank + 1;
    document.getElementById("pb").innerHTML = "You have " + bank + " Banks | Cost: " + bankCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Bank. Now you have " + bank + ".";
  }
});

let templeRun = function() {
  coins = coins + temples;
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".bank").addEventListener("click", function() {
  if (coins - templeCost >= 0) {
    coins = coins - templeCost;
    templeCost = Math.round(templeCost * 1.5);
    temples = temples + 500;
    setInterval(templeRun, 1000);
    temple = temple + 1;
    document.getElementById("pt").innerHTML = "You have " + temple + " Temples | Cost: " + templeCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Temple. Now you have " + temple + ".";
  }
});

let towerRun = function() {
  coins = coins + towers;
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".tower").addEventListener("click", function() {
  if (coins - towerCost >= 0) {
    coins = coins - towerCost;
    towerCost = Math.round(towerCost * 1.5);
    towers = towers + 1000;
    setInterval(towerRun, 1000);
    tower = tower + 1;
    document.getElementById("pw").innerHTML = "You have " + tower + " Towers | Cost: " + towerCost + " coins";
    document.getElementById("messages").innerHTML = "You bought 1 Wizard Tower. Now you have " + tower + ".";
  }
});
