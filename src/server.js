const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", whatsapp: "986866884",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost: "200",
        weekday: [0],
        time_from: [720],
        time_to: [1220]

    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/68451890?s=460&u=87fe97a00fd7cd1c12e83cf7b540a666b1250cbf&v=4", whatsapp: "85991553322",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Biologia",
        cost: "200",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: "Talysson Gadêlha",
        avatar: "https://avatars2.githubusercontent.com/u/68451890?s=460&u=87fe97a00fd7cd1c12e83cf7b540a666b1250cbf&v=4", whatsapp: "85991553322",
        bio: "Biologia geral | Biólogo",
        subject: "Biologia",
        cost: "200",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //start do servidor

    .listen(5500)