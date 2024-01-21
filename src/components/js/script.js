const languageToggle = document.querySelector('#language-toggle');

const changeLanguage = async language =>{
    const requestJson = await fetch(`../../languages/${language}.json`)
    const texts = await requestJson.json()
    console.log(texts);
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