// import i18next from "i18next"

i18next.init({
    lng: "cs",
    debug: true,
    resources: {
        cs:{
            translation: {
                "about-heading": "Ahoj, jmenuji se Radovan",
                "about-text": `Jsem začínající front-end developer z Kroměříže.
                        Od doby ukončení studia jsem vystřídal různá zaměstnání, která mě ale nikdy moc nebavila.
                        Asi před rokem jsem se začal ve svém volném čase zajímat o web development což se mě drží dodnes`
            }
        },
        en:{
            translation: {
                "about-heading": "Hello, my name is Radovan",
                "about-text": `I am a begginer fron-end developer from Czech Republic.
                              Since the time i finished my studies i have had few different jobs, none of which particulary interested me.
                              About a year ago i tried web-development and i have been stuck with it since then.`
            }
        }
    }
}, () => {
    updateContent()
})

function updateContent (){
    document.querySelector(".about-heading").innerHTML = i18next.t("about-heading")
    document.querySelector(".about-text").innerHTML = i18next.t("about-text")
}

const changeLang = (lang) => {
    i18next.changeLanguage(lang)
}

i18next.on("languageChanged", () => {
    updateContent()
})