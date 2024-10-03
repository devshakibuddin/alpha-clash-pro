function hideSectionById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

function showSectionById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}