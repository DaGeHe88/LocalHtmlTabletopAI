var famine = 0;
var rain = 0;
var wheat = 0;
var lumber = 0;


function catanlight() {
    var result2 = "";
    document.getElementById("effectmodal2").innerHTML = result2;
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Whool production is maximum 1 card per tile per player.</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Whool production has increased by 1 card per tile per player.</div>';
        wheat = 0
    } else if (lumber == 1) {
        result = '<div class="alert alert-success text-center">An excess of wood has given more fuel to the fires of the Brick bakers. Brick production has increased by 1 card per tile per player.</div>';
        lumber = 0
    } else {
        var roll = Math.floor((Math.random() * 15) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain is maximum 1 card per tile per player.</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Forest fires! There is no Lumber production......</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Due to low wages many of the lumberjacks of Catan have banded together and refuse to work! Lumber production is maximum 1 card per tile per player.</div>';
            break;
        case 5:
            result = '<div class="alert alert-danger text-center">Flooding in the claypits! There will be no Bricks produced.....</div>';
            rain = 1;
            break;
        case 6:
            result = '<div class="alert alert-danger text-center">Many complaints of the hazards in the clay pits are slowing production. Brick production is maximum 1 card per tile per player.</div>';
            break;
        case 7:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            break;
        case 8:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production is maximum 1 card per tile per player.</div>';
            break;
        case 9:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production is increased with 1 card per tile per player.</div>';
            break;
        case 10:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            break;
        case 11:
            result = '<div class="alert alert-success text-center">An unexplained anger towards trees have motivated the lumberjacks to cut down as many as they can! Lumber production is doubled!</div>';
            lumber = 1;
            break;
        case 12:
            result = '<div class="alert alert-success text-center">Local discounts on wood cutting axes have resulted in a slight increase in Lumber production. Lumber production is increased with 1 card per tile per player.</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">The University of Sheep Studies has discovered revolutionary sheep trimming techniques! Whool production is doubled!</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 card per tile per player.</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Increased whipping in the clay pits has paid off! Brick production is doubled!</div>';
            break;
    }
    
    

    document.getElementById("effectmodal").innerHTML = result;
}

function catanheavy() {
    var result2 = "";
    document.getElementById("effectmodal2").innerHTML = result2;
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Whool production is maximum 1 card per tile per player.</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Whool production has increased by 1 card per tile per player.</div>';
        wheat = 0
    } else if (lumber == 1) {
        result = '<div class="alert alert-success text-center">An excess of wood has given more fuel to the fires of the Brick bakers. Brick production has increased by 1 card per tile per player.</div>';
        lumber = 0
    } else {
        var roll = Math.floor((Math.random() * 20) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain is maximum 1 card per tile per player.</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Forest fires! There is no Lumber production......</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Due to low wages many of the lumberjacks of Catan have banded together and refuse to work! Lumber production is maximum 1 card per tile per player.</div>';
            break;
        case 5:
            result = '<div class="alert alert-danger text-center">Flooding in the claypits! There will be no Bricks produced.....</div>';
            rain = 1;
            break;
        case 6:
            result = '<div class="alert alert-danger text-center">Many complaints of the hazards in the clay pits are slowing production. Brick production is maximum 1 card per tile per player.</div>';
            break;
        case 7:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            break;
        case 8:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production is maximum 1 card per tile per player.</div>';
            break;
        case 9:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production is increased with 1 card per tile per player.</div>';
            break;
        case 10:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            break;
        case 11:
            result = '<div class="alert alert-success text-center">An unexplained anger towards trees have motivated the lumberjacks to cut down as many as they can! Lumber production is doubled!</div>';
            lumber = 1;
            break;
        case 12:
            result = '<div class="alert alert-success text-center">Local discounts on wood cutting axes have resulted in a slight increase in Lumber production. Lumber production is increased with 1 card per tile per player.</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">The University of Sheep Studies has discovered revolutionary sheep trimming techniques! Whool production is doubled!</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 card per tile per player.</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Increased whipping in the clay pits has paid off! Brick production is doubled!</div>';
            break;
        case 16:
            result = '<div class="alert alert-danger text-center">Raiders attack! Cities are safe but the lack of defence in the smaller towns results in them being vulnerable to attack. Every player loses 1 village.</div>';
            break;
        case 17:
            result = '<div class="alert alert-succes text-center">The peoples of Catan are hard workers and this is reflected in the development of your villages. Every player can upgrade 1 village to a city for free!</div>';
            break;
        case 18:
            result = '<div class="alert alert-danger text-center">Pirate activities have closed all ports.</div>';
            break;
        case 19:
            result = '<div class="alert alert-succes text-center">Good trading relations have resulted in double the resources received from trading.</div>';
            break;
        case 20:
            result = '<div class="alert alert-danger text-center">Heavy floods cause damage in infrastructure. Maximum 1 resource per player per tile and every player loses their last build road.....</div>';
            rain = 1;
            break;
    }
    
    

    document.getElementById("effectmodal").innerHTML = result;
}

function cardlight() {
    var result2 = "";
    document.getElementById("effectmodal2").innerHTML = result2;
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Whool production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Whool production has increased by 1 unit per player (The player chooses which field if he has more than one).</div>';
        wheat = 0
    } else if (lumber == 1) {
        result = '<div class="alert alert-success text-center">An excess of wood has given more fuel to the fires of the Brick bakers. Brick production has increased by 1 unit per player (The player chooses which field if he has more than one).</div>';
        lumber = 0
    } else {
        var roll = Math.floor((Math.random() * 15) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Forest fires! There is no Lumber production......</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Due to low wages many of the lumberjacks of Catan have banded together and refuse to work! Lumber production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 5:
            result = '<div class="alert alert-danger text-center">Flooding in the claypits! There will be no Bricks produced.....</div>';
            rain = 1;
            break;
        case 6:
            result = '<div class="alert alert-danger text-center">Many complaints of the hazards in the clay pits are slowing production. Brick production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 7:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            break;
        case 8:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 9:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production is increased with 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 10:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            break;
        case 11:
            result = '<div class="alert alert-success text-center">An unexplained anger towards trees have motivated the lumberjacks to cut down as many as they can! Lumber production is doubled!</div>';
            lumber = 1;
            break;
        case 12:
            result = '<div class="alert alert-success text-center">Local discounts on wood cutting axes have resulted in a slight increase in Lumber production. Lumber production is increased with 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">The University of Sheep Studies has discovered revolutionary sheep trimming techniques! Whool production is doubled!</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Increased whipping in the clay pits has paid off! Brick production is doubled!</div>';
            break;
    }
    
    

    document.getElementById("effectmodal").innerHTML = result;
}

function cardheavy() {
    var result2 = "";
    document.getElementById("effectmodal2").innerHTML = result2;
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Whool production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Whool production has increased by 1 unit per player (The player chooses which field if he has more than one).</div>';
        wheat = 0
    } else if (lumber == 1) {
        result = '<div class="alert alert-success text-center">An excess of wood has given more fuel to the fires of the Brick bakers. Brick production has increased by 1 unit per player (The player chooses which field if he has more than one).</div>';
        lumber = 0
    } else {
        var roll = Math.floor((Math.random() * 21) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Forest fires! There is no Lumber production......</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Due to low wages many of the lumberjacks of Catan have banded together and refuse to work! Lumber production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 5:
            result = '<div class="alert alert-danger text-center">Flooding in the claypits! There will be no Bricks produced.....</div>';
            rain = 1;
            break;
        case 6:
            result = '<div class="alert alert-danger text-center">Many complaints of the hazards in the clay pits are slowing production. Brick production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 7:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            break;
        case 8:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production is maximum 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 9:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production is increased with 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 10:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            break;
        case 11:
            result = '<div class="alert alert-success text-center">An unexplained anger towards trees have motivated the lumberjacks to cut down as many as they can! Lumber production is doubled!</div>';
            lumber = 1;
            break;
        case 12:
            result = '<div class="alert alert-success text-center">Local discounts on wood cutting axes have resulted in a slight increase in Lumber production. Lumber production is increased with 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">The University of Sheep Studies has discovered revolutionary sheep trimming techniques! Whool production is doubled!</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 unit per player (The player chooses which field if he has more than one).</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Increased whipping in the clay pits has paid off! Brick production is doubled!</div>';
            break;
        case 16:
            result = '<div class="alert alert-danger text-center">Uprisings in the cities of Catan have caused significant damage! Each player downgrades 1 city back to a village. All but 2 expansions (at the players choosing) are discarded.</div>';
            break;
        case 17:
            result = '<div class="alert alert-danger text-center">A draught causing warehouse fires result in each player removing one resource of their choosing.</div>';
            break;
        case 18:
            result = '<div class="alert alert-danger text-center">Heavy rains have washed away any roads not connected to a village or city!</div>';
            rain = 1;
            break;
        case 19:
            result = '<div class="alert alert-success text-center">The productiveness of the people result in each player upgrading one village into a city for free!</div>';
            break;
        case 20:
            result = '<div class="alert alert-success text-center">Good trade relations mean that resources used for trading don\'t have to be the same type.</div>';
            break;
        case 21:
            result = '<div class="alert alert-success text-center">The hardworking people of Catan wish to honor their leader. Every player gets 1 free road or building.</div>';
            break;
    }
    
    

    document.getElementById("effectmodal").innerHTML = result;
}


function explorerslight() {
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Whool production is maximum 1 card per tile per player.</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Whool production has increased by 1 card per tile per player.</div>';
        wheat = 0
    } else if (lumber == 1) {
        result = '<div class="alert alert-success text-center">An excess of wood has given more fuel to the fires of the Brick bakers. Brick production has increased by 1 card per tile per player.</div>';
        lumber = 0
    } else {
        var roll = Math.floor((Math.random() * 16) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Forest fires! There is no Lumber production......</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Due to low wages many of the lumberjacks of Catan have banded together and refuse to work! Lumber production is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            break;
        case 5:
            result = '<div class="alert alert-danger text-center">Flooding in the claypits! There will be no Bricks produced.....</div>';
            rain = 1;
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 6:
            result = '<div class="alert alert-danger text-center">Many complaints of the hazards in the clay pits are slowing production. Brick production is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 7:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 8:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 9:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production is increased with 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 10:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 11:
            result = '<div class="alert alert-success text-center">An unexplained anger towards trees have motivated the lumberjacks to cut down as many as they can! Lumber production is doubled!</div>';
            lumber = 1;
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 12:
            result = '<div class="alert alert-success text-center">Local discounts on wood cutting axes have resulted in a slight increase in Lumber production. Lumber production is increased with 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">The University of Sheep Studies has discovered revolutionary sheep trimming techniques! Whool production is doubled!</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Western winds mean ships get one extra move in a (partly) eastern direction.</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Increased whipping in the clay pits has paid off! Brick production is doubled!</div>';
            result2 = '<div class="alert alert-info text-center">Western winds mean ships get one extra move in a (partly) eastern direction.</div>';
            break;
        case 16:
            result = '<div class="alert alert-danger text-center">Lack of wind means ships can\'t move this turn.</div>';
            break;


    }
    
    

    document.getElementById("effectmodal").innerHTML = result;
    document.getElementById("effectmodal2").innerHTML = result2;
}

function explorersheavy() {
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Whool production is maximum 1 card per tile per player.</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Whool production has increased by 1 card per tile per player.</div>';
        wheat = 0
    } else if (lumber == 1) {
        result = '<div class="alert alert-success text-center">An excess of wood has given more fuel to the fires of the Brick bakers. Brick production has increased by 1 card per tile per player.</div>';
        lumber = 0
    } else {
        var roll = Math.floor((Math.random() * 21) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Forest fires! There is no Lumber production......</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Due to low wages many of the lumberjacks of Catan have banded together and refuse to work! Lumber production is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Southern winds mean ships get one extra move in a (partly) northern direction.</div>';
            break;
        case 5:
            result = '<div class="alert alert-danger text-center">Flooding in the claypits! There will be no Bricks produced.....</div>';
            rain = 1;
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 6:
            result = '<div class="alert alert-danger text-center">Many complaints of the hazards in the clay pits are slowing production. Brick production is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 7:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 8:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production is maximum 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Northern winds mean ships get one extra move in a (partly) southern direction.</div>';
            break;
        case 9:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production is increased with 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 10:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 11:
            result = '<div class="alert alert-success text-center">An unexplained anger towards trees have motivated the lumberjacks to cut down as many as they can! Lumber production is doubled!</div>';
            lumber = 1;
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 12:
            result = '<div class="alert alert-success text-center">Local discounts on wood cutting axes have resulted in a slight increase in Lumber production. Lumber production is increased with 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">The University of Sheep Studies has discovered revolutionary sheep trimming techniques! Whool production is doubled!</div>';
            result2 = '<div class="alert alert-info text-center">Eastern winds mean ships get one extra move in a (partly) western direction.</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 card per tile per player.</div>';
            result2 = '<div class="alert alert-info text-center">Western winds mean ships get one extra move in a (partly) eastern direction.</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Increased whipping in the clay pits has paid off! Brick production is doubled!</div>';
            result2 = '<div class="alert alert-info text-center">Western winds mean ships get one extra move in a (partly) eastern direction.</div>';
            break;
        case 16:
            result = '<div class="alert alert-danger text-center">Lack of wind means ships can\'t move this turn.</div>';
            break;
        case 17:
            result = '<div class="alert alert-danger text-center">Raiders attack! Harbours are safe but the lack of defence in the smaller towns results in them being vulnerable to attack. Every player loses 1 village.</div>';
            result2 = '<div class="alert alert-info text-center">Hard to manage windgusts mean every ship has 1 move less in any direction.</div>';
            break;
        case 18:
            result = '<div class="alert alert-succes text-center">The people of Catan are hard workers and this is reflected in the development of your villages. Every player can upgrade 1 village to a harbor for free! (If the village is on the coast)</div>';
            result2 = '<div class="alert alert-info text-center">Favourable winds mean every ship gets one extra move in a direction of it\'s choosing</div>';
            break;
        case 19:
            result = '<div class="alert alert-danger text-center">Rough seas mean all ships lose any troops or colonists on board.</div>';
            break;
        case 20:
            result = '<div class="alert alert-succes text-center">Good trading relations have resulted in double the resources received from trading.</div>';
            result2 = '<div class="alert alert-info text-center">Western winds mean ships get one extra move in a (partly) eastern direction.</div>';
            break;
        case 21:
            result = '<div class="alert alert-danger text-center">Heavy floods cause damage in infrastructure. Maximum 1 resource per player per tile and every player loses their last build road.....</div>';
            rain = 1;
            break;
        case 22:
            result = '<div class="alert alert-succes text-center">Extreme weather means every player loses 1 ship......</div>';
            break;


    }
    
    

    document.getElementById("effectmodal").innerHTML = result;
    document.getElementById("effectmodal2").innerHTML = result2;
}

function romelight() {
    var result2 = "";
    document.getElementById("effectmodal2").innerHTML = result2;
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Livestock production has decreased by 1 card per player.</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Livestock production has increased by 1 card per player.</div>';
        wheat = 0
    } else {
        var roll = Math.floor((Math.random() * 16) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain has decreased by 1 card per player.</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production has decreased by 1 card per player.</div>';
            break;
        case 5:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production has increased with 1 card per player.</div>';
            break;
        case 6:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            break;
        case 7:
            result = '<div class="alert alert-success text-center">It seems to be mating season. Livestock production is doubled!</div>';
            break;
        case 8:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 card per player.</div>';
            break;
        case 9:
            result = '<div class="alert alert-danger text-center">Heavy rains demoralize the troops. Their attack value is -1 (in other words, an army of 3 troops is needed for a city with 2 towers)</div>';
            rain = 1;
            break;
        case 10:
            result = '<div class="alert alert-danger text-center">Pirate activities have closed all ports.</div>';
            break;
        case 11:
            result = '<div class="alert alert-danger text-center">Rebellion amongst the horse tribes have rendered them immobile for this turn (including any rewards for not using them).</div>';
            break;
        case 12:
            result = '<div class="alert alert-danger text-center">Rebellion amongst the infantry tribes have rendered them immobile for this turn (including any rewards for not using them).</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">Good spirits amongst the infantry tribes mean they get 1 extra free move.</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">Good spirits amongst the horse tribes mean they get 1 extra free move.</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Good provisions mean the rewards are doubled for tribes that are not used.</div>';
            break;
        case 16:
            result = '<div class="alert alert-success text-center">Good preparations amongst the men mean they will not suffer any losses in any attack.</div>';
            break;
    }
    
    

    document.getElementById("effectmodal").innerHTML = result;
}

function romeheavy() {
    var result2 = "";
    document.getElementById("effectmodal2").innerHTML = result2;
    
    if (famine == 1) {
        result = '<div class="alert alert-danger text-center">The previous famine has caused for a reduction in livestock! Livestock production has decreased by 1 card per player.</div>';
        famine = 0
    } else if (rain == 1) {
        result = '<div class="alert alert-success text-center">Heavy rains that previously caused flooding now cause increased farm production. Wheat production is doubled!</div>';
        rain = 0
        wheat = 1
    } else if (wheat == 1) {
        result = '<div class="alert alert-success text-center">The increased Wheat production is benefiting the livestock! Livestock production has increased by 1 card per player.</div>';
        wheat = 0
    } else {
        var roll = Math.floor((Math.random() * 21) + 1);
    }
    
    
    var result;
    switch (roll) {
        case 1:
            result = '<div class="alert alert-danger text-center">Famine! There is no Grain production....</div>';
            famine = 1;
            break;
        case 2:
            result = '<div class="alert alert-danger text-center">Disgruntled farmers are refusing to pay their taxes. Grain has decreased by 1 card per player.</div>';
            break;
        case 3:
            result = '<div class="alert alert-danger text-center">Heavy snow fall in the mounatins have rendered the ore mines unaccessible! There is no ore production.....</div>';
            break;
        case 4:
            result = '<div class="alert alert-danger text-center">Tales of hauntings in the ore mines have left many miners too scared to go in! Ore production has decreased by 1 card per player.</div>';
            break;
        case 5:
            result = '<div class="alert alert-success text-center">Rumours of gold veins hidden under ground have motivated miners to delve deep! Ore production has increased with 1 card per player.</div>';
            break;
        case 6:
            result = '<div class="alert alert-success text-center">Increased wages have motivated the miners to work harder and has motivated others to find work in the mines! Ore production is doubled!</div>';
            break;
        case 7:
            result = '<div class="alert alert-success text-center">It seems to be mating season. Livestock production is doubled!</div>';
            break;
        case 8:
            result = '<div class="alert alert-success text-center">The rumour of bread working as an aphrodisiac has increased Wheat production. Wheat production has increased by 1 card per player.</div>';
            break;
        case 9:
            result = '<div class="alert alert-danger text-center">Heavy rains demoralize the troops. Their attack value is -1 (in other words, an army of 3 troops is needed for a city with 2 towers)</div>';
            rain = 1;
            break;
        case 10:
            result = '<div class="alert alert-danger text-center">Pirate activities have closed all ports.</div>';
            break;
        case 11:
            result = '<div class="alert alert-danger text-center">Rebellion amongst the horse tribes have rendered them immobile for this turn (including any rewards for not using them).</div>';
            break;
        case 12:
            result = '<div class="alert alert-danger text-center">Rebellion amongst the infantry tribes have rendered them immobile for this turn (including any rewards for not using them).</div>';
            break;
        case 13:
            result = '<div class="alert alert-success text-center">Good spirits amongst the infantry tribes mean they get 1 extra free move.</div>';
            break;
        case 14:
            result = '<div class="alert alert-success text-center">Good spirits amongst the horse tribes mean they get 1 extra free move.</div>';
            break;
        case 15:
            result = '<div class="alert alert-success text-center">Good provisions mean the rewards are doubled for tribes that are not used.</div>';
            break;
        case 16:
            result = '<div class="alert alert-success text-center">Good preparations amongst the men mean they will not suffer any losses in any attack.</div>';
            break;
        case 17:
            result = '<div class="alert alert-danger text-center">Quick spreading disease means every player loses 1 infantry tribe.</div>';
            break;
        case 18:
            result = '<div class="alert alert-danger text-center">Quick spreading disease means every player loses 1 horse tribe.</div>';
            break;
        case 19:
            result = '<div class="alert alert-success text-center">Plenty of new warriors that are signing up mean recruitment of infantry tribes are doubled for the same cost.</div>';
            break;
        case 20:
            result = '<div class="alert alert-success text-center">Plenty of new warriors that are signing up mean recruitment of infantry tribes are doubled for the same cost.</div>';
            break;
        case 21:
            result = '<div class="alert alert-danger text-center">Rebellion amongst the conquered locals means 1 owned city per player is lost.</div>';
            break;
    }
    
    
    

    document.getElementById("effectmodal").innerHTML = result;
}