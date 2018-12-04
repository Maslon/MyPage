// import i18next from "i18next"

i18next.init({
    lng: "cs",
    debug: true,
    resources: {
        cs:{
            translation: {
                aboutintro: "Ahoj jmenuji se Radovan"
            }
        },
        en:{
            translation: {
                intro: "Hello my name is Radovan"
            }
        }
    }
}, () => {
    updateContent()
})

function updateContent (){
    document.getElementById("intro").innerHTML = i18next.t("intro")
}

const changeLang = (lang) => {
    i18next.changeLanguage(lang)
}

i18next.on("languageChanged", () => {
    updateContent()
})