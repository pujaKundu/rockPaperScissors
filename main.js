function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    //console.log('human ' + humanChoice);
    botChoice = assignNumber(randomNum());
    //console.log('bot ' + botChoice);
    var results = decideWinner(humanChoice, botChoice); //human lost - 0 ,human win - 1
    //console.log(results);
    var message = finalMessage(results);
    //console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);

}

function randomNum() {
    return Math.floor(Math.random() * 3);
}

function assignNumber(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, botChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };

    var yourSCore = rpsDatabase[yourChoice][botChoice];
    var botSCore = rpsDatabase[botChoice][yourChoice];

    return [yourSCore, botSCore];
}

function finalMessage([yourScore, botSCore]) {
    if (yourScore === 0)
        return { 'message': 'You lost', 'color': 'red' };
    else if (yourScore === 0.5)
        return { 'message': 'You tied', 'color': 'yellow' };
    else
        return { 'message': 'You won', 'color': 'green' };

}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.querySelector('#rock').src,
        'paper': document.querySelector('#paper').src,
        'scissors': document.querySelector('#scissors').src
    };

    document.querySelector('#rock').remove();
    document.querySelector('#paper').remove();
    document.querySelector('#scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height = 150 width =150 > ";
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px ; padding :30px ; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height = 150 width =150> ";

    document.querySelector('#flex-box-rps').appendChild(humanDiv);
    document.querySelector('#flex-box-rps').appendChild(messageDiv);
    document.querySelector('#flex-box-rps').appendChild(botDiv);
}