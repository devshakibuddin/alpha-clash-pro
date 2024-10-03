
function handleKeyButtonPress(event){
    const playerPressed =event.key ;


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('you are win');
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('loser');
    }

}

document.addEventListener('keyup',handleKeyButtonPress)


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}




function play(){
    hideSectionById('home-screen');
    showSectionById('play-ground');
    continueGame();
}
