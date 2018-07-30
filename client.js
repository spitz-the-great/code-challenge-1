$( document ).ready(readyNow);

// global var garden
let clickCounter = 0;

function readyNow(){
    $('#generate-button').on('click', createDiv);
    $('#button-town').on('click', '.swapButton', toYellow);
    $('#button-town').on('click', '.delete', deleteDiv);
    //end click handlers
} // end readyNow

function createDiv(){
    clickCounter++;
    $('#button-town').append('<div class="newLine">'
    + '<p class="counter">'
    + clickCounter
    + '</p>'
    +'<button class="swapButton">Swap</button>'
    + '<button class="delete">Delete</button></div>');
    // end append mess
    
    $('.newLine').addClass('generate');
}

function toYellow(){
    $(this).parent().toggleClass('swap');
}

function deleteDiv(){
    $(this).parent().remove();
}