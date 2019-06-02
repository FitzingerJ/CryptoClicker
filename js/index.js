
let coins = 0,
  miner = 0,
  bot = 0,
  graphicsCard = 0,
  workstation = 0,
  serverfarm = 0,
  QuantumComputer = 0,
  QuantumComputerFarm = 0,
  BitcoinPlanet = 0;

let minerCost = 15,
  botCost = 100,
  graphicsCardCost = 1100,
  workstationCost = 12000,
  serverfarmCost = 130000,
  QuantumComputerCost = 1200000,
  QuantumComputerFarmCost = 20000000,
  BitcoinPlanetCost = 330000000;

let miners = 0,
  bots = 0,
  graphicsCards = 0,
  workstations = 0,
  serverfarms = 0,
  QuantumComputers = 0,
  QuantumComputerFarms = 0,
  BitcoinPlanets = 0;

  let coinValue = 1;

  let liteBought = false,
    dashBought = false,
    ethBought = false,
    bitBought = false;

  let currentCoin = "Ripple";

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
  dashTip.setContent('Locked<br>Cost: 10.000');

  const ethTipButton = document.querySelector('.eth');
  const ethTip = tippy(ethTipButton);
  ethTip.setContent('Locked<br>Cost: 500.000');

  const bitTipButton = document.querySelector('.bit');
  const bitTip = tippy(bitTipButton);
  bitTip.setContent('Locked<br>Cost: 10.000.000');

function loadSave(){
  if(localStorage.getItem("coins") !== null){
    coins = parseInt(localStorage.getItem("coins"));
    document.getElementById("coins").innerHTML = coins + " coins";
  }
  if(localStorage.getItem("miner") !== null){
    miner = parseInt(localStorage.getItem("miner"));
    document.getElementById("pc").innerHTML = "You have " + miner + " Miners | Cost: " + minerCost + " coins";
  }
  if(localStorage.getItem("miners") !== null){
    miners = parseFloat(localStorage.getItem("miners"));
  }
  if(localStorage.getItem("minerCost") !== null){
    minerCost = parseInt(localStorage.getItem("minerCost"));
  }
  document.getElementById("pc").innerHTML = "You have " + miner + " Miners | Cost: " + minerCost + " coins";
    setInterval(minerRun, 1000);
    localStorage.setItem("miner", miner);
    localStorage.setItem("miners", miners);
    localStorage.setItem("minerCost", minerCost);
    document.getElementById("pc").innerHTML = "You have " + miner + " Miners | Cost: " + minerCost + " coins";
  if(localStorage.getItem("liteBought") !== null){
    liteBought = localStorage.getItem("liteBought");
    liteTip.setContent("Litecoin");
    document.getElementsByClassName("lite")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("lite")[0].style.Webkitfilter = "grayscale(0%)";
  }
  if(localStorage.getItem("dashBought") !== null){
    dashBought = localStorage.getItem("dashBought");
    dashTip.setContent("Dash");
    document.getElementsByClassName("dash")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("dash")[0].style.Webkitfilter = "grayscale(0%)";
  }
  if(localStorage.getItem("ethBought") !== null){
    ethBought = localStorage.getItem("ethBought");
    ethTip.setContent("Ethereum");
    document.getElementsByClassName("eth")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("eth")[0].style.Webkitfilter = "grayscale(0%)";
  }
  if(localStorage.getItem("bitBought") !== null){
    bitBought = localStorage.getItem("bitBought");
    bitTip.setContent("Bitcoin");
    document.getElementsByClassName("bit")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("bit")[0].style.Webkitfilter = "grayscale(0%)";
  }
  if(localStorage.getItem("currentCoin") !== null){
    if(localStorage.getItem("currentCoin") == "Ripple"){
      rippleChange();
    } else if (localStorage.getItem("currentCoin") == "Lite") {
      liteChange();
    } else if (localStorage.getItem("currentCoin") == "Dash") {
      dashChange();
    } else if (localStorage.getItem("currentCoin") == "Eth") {
      ethChange();
    } else if (localStorage.getItem("currentCoin") == "Bit") {
      bitChange();
    }
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
  currentCoin = "Ripple";
  localStorage.setItem("currentCoin", currentCoin);
}

function liteChange(){
  if(coins >= 500 && liteBought == false){
    coins -= 500;
    document.getElementById("coins").innerHTML = coins + " coins";
    liteBought = true;
    document.getElementsByClassName("lite")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("lite")[0].style.Webkitfilter = "grayscale(0%)";
    localStorage.setItem("liteBought", liteBought);
    localStorage.setItem("coins", coins);
  }
  if(liteBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Litecoin.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin grey";
    coinValue = 5;
    let liteImg = document.getElementsByClassName("lite");
    liteImg.src="images/coins/Litecoin.png";
    currentCoin = "Lite";
    liteTip.setContent('Litecoin');
    localStorage.setItem("currentCoin", currentCoin);
  }
}

function dashChange(){
  if(coins >= 10000 && dashBought == false){
    coins -= 10000;
    document.getElementById("coins").innerHTML = coins + " coins";
    dashBought = true;
    document.getElementsByClassName("dash")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("dash")[0].style.Webkitfilter = "grayscale(0%)";
    localStorage.setItem("dashBought", dashBought);
    localStorage.setItem("coins", coins);
  }
  if(dashBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Dash.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin blue";
    coinValue = 100;
    currentCoin = "Dash";
    dashTip.setContent('Dash');
    localStorage.setItem("currentCoin", currentCoin);
  }
}

function ethChange(){
  if(coins >= 500000 && ethBought == false){
    coins -= 500000;
    document.getElementById("coins").innerHTML = coins + " coins";
    ethBought = true;
    document.getElementsByClassName("eth")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("eth")[0].style.Webkitfilter = "grayscale(0%)";
    localStorage.setItem("ethBought", ethBought);
    localStorage.setItem("coins", coins);
  }
  if(ethBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Ethereum.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin purple";
    coinValue = 5000;
    currentCoin = "Eth";
    ethTip.setContent('Ethereum');
    localStorage.setItem("currentCoin", currentCoin);
  }
}

function bitChange(){
  if(coins >= 10000000 && bitBought == false){
    coins -= 10000000;
    document.getElementById("coins").innerHTML = coins + " coins";
    bitBought = true;
    document.getElementsByClassName("bit")[0].style.filter = "grayscale(0%)";
    document.getElementsByClassName("bit")[0].style.Webkitfilter = "grayscale(0%)";
    localStorage.setItem("bitBought", bitBought);
    localStorage.setItem("coins", coins);
  }
  if(bitBought){
    let mainCoin = document.getElementById("coinImg");
    mainCoin.src="images/coins/Bitcoin.png";
    let shadow = document.getElementById("coinShadow");
    shadow.style.boxShadow =  "0px 0px 100vmin yellow";
    coinValue = 100000;
    currentCoin = "Bit";
    bitTip.setContent('Bitcoin');
    localStorage.setItem("currentCoin", currentCoin);
  }
}

let minerRun = function() {
  coins = coins + miners;
  coins = Math.ceil(coins * 10) / 10;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins";

};

document.querySelector(".miner").addEventListener("click", function() {
  if (coins - minerCost >= 0) {
    coins = coins - minerCost;
    minerCost = Math.round(minerCost * 1.5);
    miners = miners + 0.1;
    setInterval(minerRun, 1000);
    miner = miner + 1;
    localStorage.setItem("miner", miner);
    localStorage.setItem("miners", miners);
    localStorage.setItem("minerCost", minerCost);
    document.getElementById("pc").innerHTML = "You have " + miner + " Miners | Cost: " + minerCost + " coins";
  }
});

let botRun = function() {
    coins = coins + bots;
    localStorage.setItem("coins", coins);
    document.getElementById("coins").innerHTML = coins + " coins"
  }

document.querySelector(".bot").addEventListener("click", function() {
  if (coins - botCost >= 0) {
    coins = coins - botCost;
    botCost = Math.round(botCost * 1.5);
    bots = bots + 1;
    setInterval(botRun, 1000);
    bot = bot + 1;
    document.getElementById("pg").innerHTML = "You have " + bot + " Grandmas | Cost: " + botCost + " coins";
  }
});

let graphicsCardRun = function() {
    coins = coins + graphicsCards;
    localStorage.setItem("coins", coins);
    document.getElementById("coins").innerHTML = coins + " coins"
  }

document.querySelector(".graphicsCard").addEventListener("click", function() {
  if (coins - graphicsCardCost >= 0) {
    coins = coins - graphicsCardCost;
    graphicsCardCost = Math.round(graphicsCardCost * 1.5);
    graphicsCards = graphicsCards + 3;
    setInterval(graphicsCardRun, 1000);
    graphicsCard = graphicsCard + 1;
    document.getElementById("pf").innerHTML = "You have " + graphicsCard + " Farms | Cost: " + graphicsCardCost + " coins";
  }
});

let workstationRun = function() {
  coins = coins + workstations;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".workstation").addEventListener("click", function() {
  if (coins - workstationCost >= 0) {
    coins = coins - workstationCost;
    workstationCost = Math.round(workstationCost * 1.5);
    workstations = workstations + 10;
    setInterval(workstationRun, 1000);
    workstation = workstation + 1;
    document.getElementById("pm").innerHTML = "You have " + workstation + " Mines | Cost: " + workstationCost + " coins";
  }
});

let serverfarmRun = function() {
  coins = coins + serverfarms;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".serverfarm").addEventListener("click", function() {
  if (coins - serverfarmCost >= 0) {
    coins = coins - serverfarmCost;
    serverfarmCost = Math.round(serverfarmCost * 1.5);
    serverfarms = serverfarms + 50;
    setInterval(serverfarmRun, 1000);
    serverfarm = serverfarm + 1;
    document.getElementById("fp").innerHTML = "You have " + serverfarm + " Factories | Cost: " + serverfarmCost + " coins";
  }
});

let quantumCRun = function() {
  coins = coins + QuantumComputers;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".QuantumComputer").addEventListener("click", function() {
  if (coins - QuantumComputerCost >= 0) {
    coins = coins - QuantumComputerCost;
    QuantumComputerCost = Math.round(QuantumComputerCost * 1.5);
    QuantumComputers = QuantumComputers + 100;
    setInterval(quantumCRun, 1000);
    QuantumComputer = QuantumComputer + 1;
    document.getElementById("pb").innerHTML = "You have " + QuantumComputer + " Banks | Cost: " + QuantumComputerCost + " coins";
  }
});

let quantumCFRun = function() {
  coins = coins + QuantumComputerFarms;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".QuantumComputer").addEventListener("click", function() {
  if (coins - QuantumComputerFarmCost >= 0) {
    coins = coins - QuantumComputerFarmCost;
    QuantumComputerFarmCost = Math.round(QuantumComputerFarmCost * 1.5);
    QuantumComputerFarms = QuantumComputerFarms + 500;
    setInterval(quantumCFRun, 1000);
    QuantumComputerFarm = QuantumComputerFarm + 1;
    document.getElementById("pt").innerHTML = "You have " + QuantumComputerFarm + " Temples | Cost: " + QuantumComputerFarmCost + " coins";
  }
});

let btcPlanetRun = function() {
  coins = coins + BitcoinPlanets;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins"
}

document.querySelector(".BitcoinPlanet").addEventListener("click", function() {
  if (coins - BitcoinPlanetCost >= 0) {
    coins = coins - BitcoinPlanetCost;
    BitcoinPlanetCost = Math.round(BitcoinPlanetCost * 1.5);
    BitcoinPlanets = BitcoinPlanets + 1000;
    setInterval(btcPlanetRun, 1000);
    BitcoinPlanet = BitcoinPlanet + 1;
    document.getElementById("pw").innerHTML = "You have " + BitcoinPlanet + " Towers | Cost: " + BitcoinPlanetCost + " coins";
  }
});
