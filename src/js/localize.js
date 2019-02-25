// import i18next from "i18next"

i18next.init({
    lng: "cs",
    debug: true,
    resources: {
        cs:{
            translation: {
                "about-heading": "Ahoj, jmenuji se Radovan",
                "about-text": `Jsem začínající front-end developer z Kroměříže.
                        Od doby ukončení studia jsem vystřídal různá zaměstnání.
                        Asi před rokem jsem se začal ve svém volném čase zajímat o web development a od té doby se 
                        neustále zlepšuji, poznávám nové technologie a snažím se vypilovat své stávající znalosti.
                        Čím víc toho vím o web-developmentu tím je pro mě psaní kódu a řešení problémů větší zábava.`,
                "projects-heading": "Mé projekty",
                "projects-subheading": "Tady jsou některé z mých projektů",
                "contact-text": "Kontakt"       
            }
        },
        en:{
            translation: {
                "about-heading": "Hello, my name is Radovan",
                "about-text": `I am a begginer front-end developer from Czech Republic.
                              Since the time i finished my studies i have had few different jobs.
                              About a year ago i tried web-development and since then i am constantly improving myself and learning new technologies.
                              The more i know about coding the the more exciting and fun it is to solve various problems with it.`,
                "projects-heading": "My Projects",
                "projects-subheading": "Here are some of my projects",
                "contact-text": "Contact"                                     
            }
        }
    }
}, () => {
    updateContent()
})

function updateContent (){
    document.querySelector(".about-heading").innerHTML = i18next.t("about-heading")
    document.querySelector(".about-text").innerHTML = i18next.t("about-text")
    document.querySelector(".projects-heading").innerHTML = i18next.t("projects-heading")
    document.querySelector(".projects-subheading").innerHTML = i18next.t("projects-subheading")
    document.querySelector(".contact-text").innerHTML = i18next.t("contact-text")
}

const changeLang = (lang) => {
    i18next.changeLanguage(lang)
}

i18next.on("languageChanged", () => {
    updateContent()
})