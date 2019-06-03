
let coins = 0,
  miner = 0,
  bot = 0,
  graphicsCard = 0,
  workstation = 0,
  serverfarm = 0,
  quantumComputer = 0,
  quantumComputerFarm = 0,
  bitcoinPlanet = 0;

let minerCost = 15,
  botCost = 100,
  graphicsCardCost = 1100,
  workstationCost = 12000,
  serverfarmCost = 130000,
  quantumComputerCost = 1200000,
  quantumComputerFarmCost = 20000000,
  bitcoinPlanetCost = 330000000;

let miners = 0,
  bots = 0,
  graphicsCards = 0,
  workstations = 0,
  serverfarms = 0,
  quantumComputers = 0,
  quantumComputerFarms = 0,
  bitcoinPlanets = 0;

  let coinValue = 1;

  let liteBought = false,
    dashBought = false,
    ethBought = false,
    bitBought = false;

  let currentCoin = "Ripple";
  let clicks = 0;

  let cps1 = 0.0,
    cps2 = 0.0,
    cps3 = 0.0,
    cps4 = 0.0,
    cps5 = 0.0,
    cps6 = 0.0,
    cps7 = 0.0,
    cps8 = 0.0;

let cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;

tippy.setDefaults({
  placement: "bottom",
});

tippy.defaults;

document.getElementById('coinImg').ondragstart = function() { return false; };
document.getElementsByClassName('ripple')[0].ondragstart = function() { return false; };
document.getElementsByClassName('lite')[0].ondragstart = function() { return false; };
document.getElementsByClassName('dash')[0].ondragstart = function() { return false; };
document.getElementsByClassName('eth')[0].ondragstart = function() { return false; };
document.getElementsByClassName('bit')[0].ondragstart = function() { return false; };

let minerRun = function() {
  cps1 = miners;
  cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
  document.getElementById("cps").innerHTML = cps + " cps";
  localStorage.setItem("cps1", cps1);
};
let botRun = function() {
    cps2 = bots;
    cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
    document.getElementById("cps").innerHTML = cps + " cps";
    localStorage.setItem("cps2", cps2);
};
let graphicsCardRun = function() {
    cps3 = graphicsCards;
    cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
    document.getElementById("cps").innerHTML = cps + " cps";
    localStorage.setItem("cps3", cps3);
};
let workstationRun = function() {
  cps4 = workstations;
  cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
  document.getElementById("cps").innerHTML = cps + " cps";
  localStorage.setItem("cps4", cps4);
};
let serverfarmRun = function() {
  cps5 = serverfarms;
  cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
  document.getElementById("cps").innerHTML = cps + " cps";
  localStorage.setItem("cps5", cps5);
};
let quantumCRun = function() {
  cps6 = quantumComputers;
  cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
  document.getElementById("cps").innerHTML = cps + " cps";
  localStorage.setItem("cps6", cps6);
};
let quantumCFRun = function() {
  cps7 = quantumComputerFarms;
  cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
  document.getElementById("cps").innerHTML = cps + " cps";
  localStorage.setItem("cps7", cps7);
};
let btcPlanetRun = function() {
  cps8 = bitcoinPlanets;
  cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
  document.getElementById("cps").innerHTML = cps + " cps";
  localStorage.setItem("cps8", cps8);
};

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
    document.getElementById("pc").innerHTML = "You have " + miner + " Miners | Cost: " + minerCost + " coins";
      minerRun();
      localStorage.setItem("miner", miner);
      localStorage.setItem("miners", miners);
      localStorage.setItem("minerCost", minerCost);
      document.getElementById("pc").innerHTML = "You have " + miner + " Miners | Cost: " + minerCost + " coins";
  }

    if(localStorage.getItem("bot") !== null){
      bot = parseInt(localStorage.getItem("bot"));
    }
    if(localStorage.getItem("bots") !== null){
      bots = parseFloat(localStorage.getItem("bots"));
    }
    if(localStorage.getItem("botCost") !== null){
      botCost = parseInt(localStorage.getItem("botCost"));
      document.getElementById("pg").innerHTML = "You have " + bot + " Bots | Cost: " + botCost + " coins";
        botRun();
        localStorage.setItem("miner", bot);
        localStorage.setItem("miners", bots);
        localStorage.setItem("minerCost", botCost);
        document.getElementById("pg").innerHTML = "You have " + bot + " Bots | Cost: " + botCost + " coins";
    }

      if(localStorage.getItem("graphicsCard") !== null){
        graphicsCard = parseInt(localStorage.getItem("graphicsCard"));
        document.getElementById("pf").innerHTML = "You have " + graphicsCard + " Graphics Cards | Cost: " + graphicsCardCost + " coins";
      }
      if(localStorage.getItem("graphicsCards") !== null){
        graphicsCards = parseFloat(localStorage.getItem("graphicsCards"));
      }
      if(localStorage.getItem("graphicsCardCost") !== null){
        graphicsCardCost = parseInt(localStorage.getItem("graphicsCardCost"));
        document.getElementById("pf").innerHTML = "You have " + graphicsCard + " Graphics Cards | Cost: " + graphicsCardCost + " coins";
        graphicsCardRun();
        localStorage.setItem("graphicsCard", graphicsCard);
        localStorage.setItem("graphicsCards", graphicsCards);
        localStorage.setItem("graphicsCardCost", graphicsCardCost);
        document.getElementById("pf").innerHTML = "You have " + graphicsCard + " Graphics Cards | Cost: " + graphicsCardCost + " coins";
      }



      if(localStorage.getItem("workstation") !== null){
        workstation = parseInt(localStorage.getItem("workstation"));
        document.getElementById("pm").innerHTML = "You have " + workstation + " Workstations | Cost: " + workstationCost + " coins";
      }
      if(localStorage.getItem("workstations") !== null){
        workstations = parseFloat(localStorage.getItem("workstations"));
      }
      if(localStorage.getItem("workstationCost") !== null){
        workstationCost = parseInt(localStorage.getItem("workstationCost"));
        document.getElementById("pm").innerHTML = "You have " + workstation + " Workstations | Cost: " + workstationCost + " coins";
        workstationRun();
        localStorage.setItem("workstation", workstation);
        localStorage.setItem("workstations", workstations);
        localStorage.setItem("workstationCost", workstationCost);
        document.getElementById("pm").innerHTML = "You have " + workstation + " Workstations | Cost: " + workstationCost + " coins";
      }

      if(localStorage.getItem("serverfarm") !== null){
        serverfarm = parseInt(localStorage.getItem("serverfarm"));
        document.getElementById("fp").innerHTML = "You have " + serverfarm + " Serverfarms | Cost: " + serverfarmCost + " coins";
      }
      if(localStorage.getItem("serverfarms") !== null){
        serverfarms = parseFloat(localStorage.getItem("serverfarms"));
      }
      if(localStorage.getItem("serverfarmCost") !== null){
        serverfarmCost = parseInt(localStorage.getItem("serverfarmCost"));
        document.getElementById("fp").innerHTML = "You have " + serverfarm + " Serverfarms | Cost: " + serverfarmCost + " coins";
        serverfarmRun();
        localStorage.setItem("serverfarm", serverfarm);
        localStorage.setItem("serverfarms", serverfarms);
        localStorage.setItem("serverfarmCost", serverfarmCost);
        document.getElementById("fp").innerHTML = "You have " + serverfarm + " Serverfarms | Cost: " + serverfarmCost + " coins";
      }

      if(localStorage.getItem("quantumComputer") !== null){
        quantumComputer = parseInt(localStorage.getItem("quantumComputer"));
        document.getElementById("pb").innerHTML = "You have " + quantumComputer + " Quantum Computers | Cost: " + quantumComputerCost + " coins";
      }
      if(localStorage.getItem("quantumComputers") !== null){
        quantumComputers = parseFloat(localStorage.getItem("quantumComputers"));
      }
      if(localStorage.getItem("quantumComputerCost") !== null){
        quantumComputerCost = parseInt(localStorage.getItem("quantumComputerCost"));
        document.getElementById("pb").innerHTML = "You have " + quantumComputer + " Quantum Computers | Cost: " + quantumComputerCost + " coins";
        quantumCRun();
        localStorage.setItem("quantumComputer", quantumComputer);
        localStorage.setItem("quantumComputers", quantumComputers);
        localStorage.setItem("quantumComputerCost", quantumComputerCost);
        document.getElementById("pb").innerHTML = "You have " + quantumComputer + " Quantum Computers | Cost: " + quantumComputerCost + " coins";
      }

      if(localStorage.getItem("quantumComputerFarm") !== null){
        quantumComputerFarm = parseInt(localStorage.getItem("quantumComputerFarm"));
        document.getElementById("pt").innerHTML = "You have " + quantumComputerFarm + " Quantum Computer Farms | Cost: " + quantumComputerFarmCost + " coins";
      }
      if(localStorage.getItem("quantumComputerFarms") !== null){
        quantumComputerFarms = parseFloat(localStorage.getItem("quantumComputerFarms"));
      }
      if(localStorage.getItem("quantumComputerFarmCost") !== null){
        quantumComputerFarmCost = parseInt(localStorage.getItem("quantumComputerFarmCost"));
        document.getElementById("pt").innerHTML = "You have " + quantumComputerFarm + " Quantum Computer Farms | Cost: " + quantumComputerFarmCost + " coins";
        quantumCFRun();
        localStorage.setItem("quantumComputerFarm", quantumComputerFarm);
        localStorage.setItem("quantumComputerFarms", quantumComputerFarms);
        localStorage.setItem("quantumComputerFarmCost", quantumComputerFarmCost);
        document.getElementById("pt").innerHTML = "You have " + quantumComputerFarm + " Quantum Computer Farms | Cost: " + quantumComputerFarmCost + " coins";
      }

      if(localStorage.getItem("bitcoinPlanet") !== null){
        bitcoinPlanet = parseInt(localStorage.getItem("bitcoinPlanet"));
        document.getElementById("pw").innerHTML = "You have " + bitcoinPlanet + " Bitcoin Planets | Cost: " + bitcoinPlanetCost + " coins";
      }
      if(localStorage.getItem("bitcoinPlanets") !== null){
        bitcoinPlanets = parseFloat(localStorage.getItem("bitcoinPlanets"));
      }
      if(localStorage.getItem("bitcoinPlanetCost") !== null){
        bitcoinPlanetCost = parseInt(localStorage.getItem("bitcoinPlanetCost"));
        document.getElementById("pw").innerHTML = "You have " + bitcoinPlanet + " Bitcoin Planets | Cost: " + bitcoinPlanetCost + " coins";
        btcPlanetRun();
        localStorage.setItem("bitcoinPlanet", bitcoinPlanet);
        localStorage.setItem("bitcoinPlanets", bitcoinPlanets);
        localStorage.setItem("bitcoinPlanetCost", bitcoinPlanetCost);
        document.getElementById("pw").innerHTML = "You have " + bitcoinPlanet + " Bitcoin Planets | Cost: " + bitcoinPlanetCost + " coins";
      }
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
  if(localStorage.getItem("cps1") !== null){
    cps1 = parseFloat(localStorage.getItem("cps1"));
  }
  if(localStorage.getItem("cps2") !== null){
    cps2 = parseFloat(localStorage.getItem("cps2"));
  }
  if(localStorage.getItem("cps3") !== null){
    cps3 = parseFloat(localStorage.getItem("cps3"));
  }
  if(localStorage.getItem("cps4") !== null){
    cps4 = parseFloat(localStorage.getItem("cps4"));
  }
  if(localStorage.getItem("cps5") !== null){
    cps5 = parseFloat(localStorage.getItem("cps5"));
  }
  if(localStorage.getItem("cps6") !== null){
    cps6 = parseFloat(localStorage.getItem("cps6"));
  }
  if(localStorage.getItem("cps7") !== null){
    cps7 = parseFloat(localStorage.getItem("cps7"));
  }
  if(localStorage.getItem("cps8") !== null){
    cps8 = parseFloat(localStorage.getItem("cps8"));
  }
}

document.querySelector(".mainCoin").addEventListener("click", function() {
  coins = coins + coinValue;
  clicks++;
  localStorage.setItem("coins", coins);
  localStorage.setItem("totalClicks", clicks);
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

let run = function(){
  cps = cps1 + cps2 + cps3 + cps4 + cps5 + cps6 + cps7 + cps8;
  coins = coins + cps;
  coins = Math.ceil(coins * 10) / 10;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerHTML = coins + " coins";
}

setInterval(run, 1000);


document.querySelector(".miner").addEventListener("click", function() {
  if (coins - minerCost >= 0) {
    coins = coins - minerCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    minerCost = Math.round(minerCost * 1.5);
    miners = miners + 0.1;
    minerRun();
    miner = miner + 1;
    localStorage.setItem("miner", miner);
    localStorage.setItem("miners", miners);
    localStorage.setItem("minerCost", minerCost);
    document.getElementById("pc").innerHTML = "You have " + miner + " Miners | Cost: " + minerCost + " coins";
  }
});



document.querySelector(".bot").addEventListener("click", function() {
  if (coins - botCost >= 0) {
    coins = coins - botCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    botCost = Math.round(botCost * 1.5);
    bots = bots + 1;
    botRun();
    bot = bot + 1;
    localStorage.setItem("bot", bot);
    localStorage.setItem("bots", bots);
    localStorage.setItem("botCost", botCost);
    document.getElementById("pg").innerHTML = "You have " + bot + " Bots | Cost: " + botCost + " coins";
  }
});



document.querySelector(".graphicsCard").addEventListener("click", function() {
  if (coins - graphicsCardCost >= 0) {
    coins = coins - graphicsCardCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    graphicsCardCost = Math.round(graphicsCardCost * 1.5);
    graphicsCards = graphicsCards + 3;
    graphicsCardRun();
    graphicsCard = graphicsCard + 1;
    localStorage.setItem("graphicsCard", graphicsCard);
    localStorage.setItem("graphicsCards", graphicsCards);
    localStorage.setItem("graphicsCardCost", graphicsCardCost);
    document.getElementById("pf").innerHTML = "You have " + graphicsCard + " graphicsCards | Cost: " + graphicsCardCost + " coins";
  }
});



document.querySelector(".workstation").addEventListener("click", function() {
  if (coins - workstationCost >= 0) {
    coins = coins - workstationCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    workstationCost = Math.round(workstationCost * 1.5);
    workstations = workstations + 10;
    workstationRun();
    workstation = workstation + 1;
    localStorage.setItem("workstation", workstation);
    localStorage.setItem("workstations", workstations);
    localStorage.setItem("workstationCost", workstationCost);
    document.getElementById("pm").innerHTML = "You have " + workstation + " Workstations | Cost: " + workstationCost + " coins";
  }
});



document.querySelector(".serverfarm").addEventListener("click", function() {
  if (coins - serverfarmCost >= 0) {
    coins = coins - serverfarmCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    serverfarmCost = Math.round(serverfarmCost * 1.5);
    serverfarms = serverfarms + 50;
    serverfarmRun();
    serverfarm = serverfarm + 1;
    localStorage.setItem("serverfarm", serverfarm);
    localStorage.setItem("serverfarms", serverfarms);
    localStorage.setItem("serverfarmCost", serverfarmCost);
    document.getElementById("fp").innerHTML = "You have " + serverfarm + " Serverfarms | Cost: " + serverfarmCost + " coins";
  }
});



document.querySelector(".quantumComputer").addEventListener("click", function() {
  if (coins - quantumComputerCost >= 0) {
    coins = coins - quantumComputerCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    quantumComputerCost = Math.round(quantumComputerCost * 1.5);
    quantumComputers = quantumComputers + 100;
    quantumCRun();
    quantumComputer = quantumComputer + 1;
    localStorage.setItem("quantumComputer", quantumComputer);
    localStorage.setItem("quantumComputers", quantumComputers);
    localStorage.setItem("quantumComputerCost", quantumComputerCost);
    document.getElementById("pb").innerHTML = "You have " + quantumComputer + " Quantum Computers | Cost: " + quantumComputerCost + " coins";
  }
});



document.querySelector(".quantumComputerFarm").addEventListener("click", function() {
  if (coins - quantumComputerFarmCost >= 0) {
    coins = coins - quantumComputerFarmCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    quantumComputerFarmCost = Math.round(quantumComputerFarmCost * 1.5);
    quantumComputerFarms = quantumComputerFarms + 500;
    quantumCFRun();
    quantumComputerFarm = quantumComputerFarm + 1;
    localStorage.setItem("quantumComputerFarm", quantumComputerFarm);
    localStorage.setItem("quantumComputerFarms", quantumComputerFarms);
    localStorage.setItem("quantumComputerFarmCost", quantumComputerFarmCost);
    document.getElementById("pt").innerHTML = "You have " + quantumComputerFarm + " Quantum Computer Farms | Cost: " + quantumComputerFarmCost + " coins";
  }
});



document.querySelector(".bitcoinPlanet").addEventListener("click", function() {
  if (coins - bitcoinPlanetCost >= 0) {
    coins = coins - bitcoinPlanetCost;
    document.getElementById("coins").innerHTML = coins + " coins";
    bitcoinPlanetCost = Math.round(bitcoinPlanetCost * 1.5);
    bitcoinPlanets = bitcoinPlanets + 1000;
    btcPlanetRun();
    bitcoinPlanet = bitcoinPlanet + 1;
    localStorage.setItem("bitcoinPlanet", bitcoinPlanet);
    localStorage.setItem("bitcoinPlanets", bitcoinPlanets);
    localStorage.setItem("bitcoinPlanetCost", bitcoinPlanetCost);
    document.getElementById("pw").innerHTML = "You have " + bitcoinPlanet + " Bitcoin Planets | Cost: " + bitcoinPlanetCost + " coins";
  }
});
