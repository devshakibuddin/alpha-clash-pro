
function handleKeyButtonPress(event){
    const playerPressed =event.key ;

    if( playerPressed === 'Escape'){
        gameOver();
    }


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('you are win');
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;

        setTextElementValueById('current-score',newScore)


        // another option==
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const updateLife = currentLife - 1;
        currentLifeElement.innerText = updateLife ;
        if(updateLife === 0){
            gameOver();
        }
    }

}

document.addEventListener('keyup',handleKeyButtonPress)


function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}




function play(){
    hideSectionById('home-screen');
    hideSectionById('final-score');
    showSectionById('play-ground');

    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
    hideSectionById('play-ground');
    showSectionById('final-score')

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}