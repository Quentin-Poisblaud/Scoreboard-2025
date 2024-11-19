const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

//========== Datas ==========//
let articles = [
    { id: 1, title: "Premier article", content: "Contenu du premier article" },
    {
        id: 2,
        title: "Deuxième article",
        content: "Contenu du deuxième article",
    },
]

// Route de test (GET)
app.get("/", (req, res) => {
    res.send(
        `<h1>Bienvenue sur l'API REST !</h1> 
        ${articles.length} articles présents.`
    )
})

// Lire tous les articles (GET)
app.get("/articles", (req, res) => {
    res.json(articles)
})

// Lire un article par ID (GET)
app.get("/articles/:id", (req, res) => {
    const article = articles.find((a) => a.id === parseInt(req.params.id))
    if (article) {
        res.json(article)
    } else {
        res.status(404).send("Article non trouvé")
    }
})

// Créer un nouvel article (POST)
app.post("/articles", (req, res) => {
    // Créer un ensemble contenant uniquement les ids des objets
    const ensembleIds = new Set(articles.map((obj) => obj.id))
    let entier = 1 // Commence à 1, le plus petit entier positif

    // Parcours des entiers positifs
    while (ensembleIds.has(entier)) {
        entier += 1 // Incrémente jusqu'à trouver un entier absent
    }
    const newArticle = {
        id: entier,
        title: req.body.title,
        content: req.body.content,
    }
    articles.push(newArticle)
    res.status(201).json(newArticle)
})

// Mettre à jour un article (PUT)
app.put("/articles/:id", (req, res) => {
    const article = articles.find((a) => a.id === parseInt(req.params.id))
    if (article) {
        article.title = req.body.title
        article.content = req.body.content
        res.json(article)
    } else {
        res.status(404).send("Article non trouvé")
    }
})

// Supprimer un article (DELETE)
app.delete("/articles/:id", (req, res) => {
    const articleIndex = articles.findIndex(
        (a) => a.id === parseInt(req.params.id)
    )
    if (articleIndex !== -1) {
        articles.splice(articleIndex, 1)
        res.status(204).send()
    } else {
        res.status(404).send("Article non trouvé")
    }
})

let tables = [
    {
        id: 1,
        player1: {
            playerInfo: {
                name: "POISBLAUD",
                surname: "Quentin",
                club: "2LJC",
            },
            scoreInfo: { ippon: 0, wazaari: 0, kinza: 0 },
            penalInfo: {
                shido: 0,
                hansokumake: null,
            },
        },
        player2: {
            playerInfo: {
                name: "POISBLAUD",
                surname: "Quentin",
                club: "2LJC",
            },
            scoreInfo: { ippon: 0, wazaari: 0, kinza: 0 },
            penalInfo: {
                shido: 0,
                hansokumake: null,
            },
        },
        timer: 300,
        nexts: {
            p1: { fullname: "POISBLAUD Quentin", club: "2LJC" },
            p2: { fullname: "POISBLAUD Quentin", club: "2LJC" },
        },
        infos: `<div>Tournoi interne du 2LJC</div>
                     <div>01 Janvier 2000</div>
                     <div>Poussins</div>`,
        osaekomiTimer: 0,
        osaekomiIsRed: false,

        hajime: true,
        goldenscore: false,
    },
]

// Obtenir les infos de la table id (GET)
app.get("/tables/:id", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        res.json(table)
    } else {
        res.status(404).send("Table non trouvée")
    }
})

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`)
})
