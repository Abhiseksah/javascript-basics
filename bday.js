function convert(){
var year=prompt('Enter your Birth Year');
if (year>=2020){
    window.alert('It should not be greater than 2020 or 2020');

    var h1 =document.createElement('h1');
    var textAnswer = document.createTextNode('Try Again');
}
else{
    var ageInDays=(2020-year)*365
    var h1 =document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageInDays+' days old.');
}

h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer)
document.getElementById('flex-box-result').appendChild(h1);
console.log(textAnswer);
}
function reset(){
    document.getElementById('ageInDays').remove()

}

function generate(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-img');
    image.src ="https://media.tenor.com/images/17e91cf2991314dd78eecec4668476a0/tenor.gif";
    div.appendChild(image);
}

//challenge -3

function rpsgame(yourChoice){
    var humanChoice=yourChoice.id
    var botChoice=rand()
    console.log(humanChoice,botChoice)
    var number=decidewinner(humanChoice,botChoice)
    console.log(message(number))
    var messages=message(number)
    frontEnd(humanChoice,botChoice,messages)
}


function rand(){

   var t=['rock','paper','scissor'][Math.floor(Math.random()*3)]
    return t

}

function decidewinner(humanChoice,botChoice){

    var gameDatabase={
        'rock':{'paper':0,'rock':0.5,'scissor':1},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'rock':0,'paper':1,'scissor':0.5}
    }

    var winner=gameDatabase[humanChoice][botChoice]
    return winner

}

function message(winner){
    switch(winner){
        case 1:return {'msg':'You won','color':'green'};
            break;
        case 0.5:return {'msg':'Draw','color':'grey'};
            break;
        case 0:return {'msg':'You lose','color':'red'}
            break;
    }
}

function frontEnd(humanChoice,botChoice,message){

    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+ imageDatabase[humanChoice] +"'>";
    document.getElementById('human').appendChild(humanDiv);

    messageDiv.innerHTML="<h2 style=color:"+message.color+";>"+message.msg+"</h2>"
    document.getElementById('human').appendChild(messageDiv)

    botDiv.innerHTML = "<img src='"+ imageDatabase[botChoice] +"'>";
    document.getElementById('human').appendChild(botDiv);



}
//Challenge 4

var all_button = document.getElementsByTagName('button');
console.log(all_button);

var copyAllButtoon =[];
for(let i=0;i<all_button.length;i++)
{
    copyAllButtoon.push(all_button[i].classList[1]);
}

console.log(copyAllButtoon);


function buttonColorChange(element){
    //console.log(element.value);
    if (element.value==='red'){
        redButton();
    }
    else if(element.value==='green'){
        greenButton();
    }
    else if (element.value==='blue'){
        blueButton();
    }
    else if(element.value==='random'){
        randomButton();
    }
    else if (element.value==='reset'){
        resetButton();
    }
}

function redButton()
{
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}

function greenButton()
{
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}

function blueButton()
{
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-primary');
    }
}

function resetButton()
{
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButtoon[i]);
    }
}

function randomButton(){
    var choice=['btn-primary','btn-success','btn-warning','btn-danger','btn-secondary','btn-dark','btn-light','btn-info'];
    //console.log(Math.floor(Math.random()*7))
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choice[Math.floor(Math.random()*8)]);
    }
    
}