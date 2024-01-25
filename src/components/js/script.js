const languageToggle = document.querySelector('#language-toggle');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language =>{
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json()
    
    for(const textToChange of textsToChange){
        // console.log(textsToChange);
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        const details = textToChange.dataset.details;
        console.log(section, value);

        if (details && typeof details === 'string') {
            textToChange.innerHTML = texts[section][value][details];
        } else {
            textToChange.innerHTML = texts[section][value];
        }
    }
};

languageToggle.addEventListener('click', (e)=>{
    var language = "es";
    console.log(languageToggle.checked);

    if (languageToggle.checked === true) {
        language = "en";
    }else{
        language = "es";
    }

    changeLanguage(language);
});