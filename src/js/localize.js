// import i18next from "i18next"

i18next.init({
    lng: "cs",
    debug: true,
    resources: {
        cs:{
            translation: {
                intro: "Ahoj, jmenuji se Radovan",
                about: `Jsem začínající front-end developer z Kroměříže.
                        Od doby ukončení studia jsem vystřídal různá zaměstnání, která mě ale nikdy moc nebavila.
                        Asi před rokem jsem se začal ve svém volném čase zajímat o web development což se mě drží dodnes`
            }
        },
        en:{
            translation: {
                intro: "Hello, my name is Radovan"
            }
        }
    }
}, () => {
    updateContent()
})

function updateContent (){
    document.getElementById("intro").innerHTML = i18next.t("intro")
    document.getElementById("about").innerHTML = i18next.t("about")
}

const changeLang = (lang) => {
    i18next.changeLanguage(lang)
}

i18next.on("languageChanged", () => {
    updateContent()
})