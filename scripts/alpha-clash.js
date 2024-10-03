
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
