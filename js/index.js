
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

let cursors = 0,
  grandmas = 0,
  farms = 0,
  mines = 0,
  factories = 0,
  banks = 0,
  temples = 0,
  towers = 0;

  let coinValue = 1;

  let liteBought = false,
    dashBought = false,
    ethBought = false,
    bitBought = false;

  let curretCoin = "Ripple";

tippy.setDefaults({
  placement: "bottom",
});

tippy.defaults;

  const rippleTipButton = document.querySelector('.ripple');
  const rippleTip = tippy(rippleTipButton);
  rippleTip.setContent('Ripple');

  const liteTipButton = document.querySelector('.lite');
  const liteTip = tippy(liteTipButton);
  liteTip.setContent('Locked<br>Cost: 500');

  const dashTipButton = document.querySelector('.dash');
  const dashTip = tippy(dashTipButton);
  dashTip.setContent('Locked<br>Cost: 10000');

  const ethTipButton = document.querySelector('.eth');
  const ethTip = tippy(ethTipButton);
  ethTip.setContent('Locked<br>Cost: 500000');

  const bitTipButton = document.querySelector('.bit');
  const bitTip = tippy(bitTipButton);
  bitTip.setContent('Locked<br>Cost: 10000000');

function loadSave(){
  if(localStorage.getItem("coins") !== null){
    coins = parseInt(localStorage.getItem("coins"));
    document.getElementById("coins").innerHTML = coins + " coins";
  }
  if(localStorage.getItem("clicker") !== null){
    cursor = parseInt(localStorage.getItem("clicker"));
    document.getElementById("pc").innerHTML = "You have " + cursor + " Clickers | Cost: " + cursorCost + " coins";
  }
  if(localStorage.getItem("curretCoin") !== null){
    if(localStorage.getItem("curretCoin") == "Ripple"){
      rippleChange();
    } else if (localStorage.getItem("curretCoin") == "Lite") {
      liteChange();
    } else if (localStorage.getItem("curretCoin") == "Dash") {
      dashChange();
    } else if (localStorage.getItem("curretCoin") == "Eth") {
      ethChange();
    } else if (localStorage.getItem("curretCoin") == "Bit") {
      bitChange();
    }
  }
  if(localStorage.getItem("liteBought") !== null){
    liteBought = localStorage.getItem("liteBought");
    liteTip.setContent("Litecoin");
  }
  if(localStorage.getItem("dashBought") !== null){
    dashBought = localStorage.getItem("dashBought");
    dashTip.setContent("Dash");
  }
  if(localStorage.getItem("ethBought") !== null){
    ethBought = localStorage.getItem("ethBought");
    ethTip.setContent("Ethereum");
  }
  if(localStorage.getItem("bitBought") !== null){
    bitBought = localStorage.getItem("bitBought");
    bitTip.setContent("Bitcoin");
  }
}

document.querySelector(".mainCoin").addEventListener("click", function() {
  coins = coins + coinValue;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins";
});

function rippleChange(){
  let mainCoin = document.getElementById("coinImg");
  mainCoin.src="images/coins/Ripple.png";
  let shadow = document.getElementById("coinShadow");
  shadow.style.boxShadow =  "0px 0px 100vmin lightblue";
  coinValue = 1;
  curretCoin = "Ripple";
  localStorage.setItem("curretCoin", curretCoin);
  particles.shape.image.src = "images/coins/Ripple.png";
}

function liteChange(){
  if(coins >= 500 && liteBought == false){
    coins -= 500;
    document.getElementById("coins").innerHTML = coins + " coins";
    liteBought = true;
    localStorage.setItem("liteBought", liteBought);
  }
  if(liteBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Litecoin.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin grey";
    coinValue = 5;
    let liteImg = document.getElementsByClassName("lite");
    liteImg.src="images/coins/Litecoin.png";
    curretCoin = "Lite";
    liteTip.setContent('Litecoin');
    localStorage.setItem("curretCoin", curretCoin);
  }
}

function dashChange(){
  if(coins >= 10000 && dashBought == false){
    coins -= 10000;
    document.getElementById("coins").innerHTML = coins + " coins";
    dashBought = true;
    localStorage.setItem("dashBought", dashBought);
  }
  if(dashBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Dash.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin blue";
    coinValue = 100;
    curretCoin = "Dash";
    dashTip.setContent('Dash');
    localStorage.setItem("curretCoin", curretCoin);
  }
}

function ethChange(){
  if(coins >= 500000 && ethBought == false){
    coins -= 500000;
    document.getElementById("coins").innerHTML = coins + " coins";
    ethBought = true;
    localStorage.setItem("ethBought", ethBought);
  }
  if(ethBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Ethereum.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin purple";
    coinValue = 5000;
    curretCoin = "Eth";
    ethTip.setContent('Ethereum');
    localStorage.setItem("curretCoin", curretCoin);
  }
}

function bitChange(){
  if(coins >= 10000000 && bitBought == false){
    coins -= 10000000;
    document.getElementById("coins").innerHTML = coins + " coins";
    bitBought = true;
    localStorage.setItem("bitBought", bitBought);
  }
  if(bitBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Bitcoin.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin yellow";
    coinValue = 100000;
    curretCoin = "Bit";
    bitTip.setContent('Bitcoin');
    localStorage.setItem("curretCoin", curretCoin);
  }
}

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
    localStorage.setItem("cursor", cursor);
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
