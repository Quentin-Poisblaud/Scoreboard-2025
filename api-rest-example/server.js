const express = require("express")
const app = express()
const PORT = 3000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*") // Or specific origin
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    )
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})

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

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

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
    if (table) res.json(table)
    else res.status(404).send("Table non trouvée")
})

app.put("/tables/:id/:isPlayer1/ippon/:isAdd", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        if (req.params.isPlayer1 == "true") {
            if (req.params.isAdd == "true") {
                if (table.player1.scoreInfo.ippon != 9) {
                    table.player1.scoreInfo.ippon += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player1.scoreInfo.ippon != 0) {
                    table.player1.scoreInfo.ippon -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        } else {
            if (req.params.isAdd == "true") {
                if (table.player2.scoreInfo.ippon != 9) {
                    table.player2.scoreInfo.ippon += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player2.scoreInfo.ippon != 0) {
                    table.player2.scoreInfo.ippon -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        }
    } else res.status(404).send("Table non trouvé")
})

app.put("/tables/:id/:isPlayer1/wazaari/:isAdd", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        if (req.params.isPlayer1 == "true") {
            if (req.params.isAdd == "true") {
                if (table.player1.scoreInfo.wazaari != 9) {
                    table.player1.scoreInfo.wazaari += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player1.scoreInfo.wazaari != 0) {
                    table.player1.scoreInfo.wazaari -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        } else {
            if (req.params.isAdd == "true") {
                if (table.player2.scoreInfo.wazaari != 9) {
                    table.player2.scoreInfo.wazaari += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player2.scoreInfo.wazaari != 0) {
                    table.player2.scoreInfo.wazaari -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        }
    } else res.status(404).send("Table non trouvé")
})

app.put("/tables/:id/:isPlayer1/kinza/:isAdd", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        if (req.params.isPlayer1 == "true") {
            if (req.params.isAdd == "true") {
                if (table.player1.scoreInfo.kinza != 99) {
                    table.player1.scoreInfo.kinza += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player1.scoreInfo.kinza != 0) {
                    table.player1.scoreInfo.kinza -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        } else {
            if (req.params.isAdd == "true") {
                if (table.player2.scoreInfo.kinza != 99) {
                    table.player2.scoreInfo.kinza += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player2.scoreInfo.kinza != 0) {
                    table.player2.scoreInfo.kinza -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        }
    } else res.status(404).send("Table non trouvé")
})
app.put("/tables/:id/:isPlayer1/shido/:isAdd", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        if (req.params.isPlayer1 == "true") {
            if (req.params.isAdd == "true") {
                if (table.player1.penalInfo.shido != 3) {
                    table.player1.penalInfo.shido += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player1.penalInfo.shido != 0) {
                    table.player1.penalInfo.shido -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        } else {
            if (req.params.isAdd == "true") {
                if (table.player2.penalInfo.shido != 3) {
                    table.player2.penalInfo.shido += 1
                    res.json(table)
                } else res.status(412).send("Valeur maximale déjà atteinte")
            } else {
                if (table.player2.penalInfo.shido != 0) {
                    table.player2.penalInfo.shido -= 1
                    res.json(table)
                } else res.status(412).send("Valeur minimale déjà atteinte")
            }
        }
    } else res.status(404).send("Table non trouvé")
})
app.put("/tables/:id/:isPlayer1/hansokumake/:value", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        if (req.params.isPlayer1 == "true") {
            switch (req.params.value) {
                case "null":
                    table.player1.penalInfo.hansokumake = null
                    res.json(table)
                    break
                case "H":
                case "X":
                case "M":
                case "F":
                    table.player1.penalInfo.hansokumake = req.params.value
                    res.json(table)
                    break
                default:
                    res.status(422).send("Valeur non autorisée")
            }
        } else {
            switch (req.params.value) {
                case "null":
                    table.player2.penalInfo.hansokumake = null
                    res.json(table)
                    break
                case "H":
                case "X":
                case "M":
                case "F":
                    table.player2.penalInfo.hansokumake = req.params.value
                    res.json(table)
                    break
                default:
                    res.status(422).send("Valeur non autorisée")
            }
        }
    } else res.status(404).send("Table non trouvé")
})

/* body sous la forme :
 * {name: "blablou",
 *  surname: "bloubla",
 *  club: "LOUL"}
 */
app.put("/tables/:id/:isPlayer1/playerInfos", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        if (req.params.isPlayer1 == "true") {
            table.player1.playerInfo.name = req.body.name
            table.player1.playerInfo.surname = req.body.surname
            table.player1.playerInfo.club = req.body.club
            res.json(table)
        } else {
            table.player2.playerInfo.name = req.body.name
            table.player2.playerInfo.surname = req.body.surname
            table.player2.playerInfo.club = req.body.club
            res.json(table)
        }
    } else res.status(404).send("Table non trouvé")
})
app.put("/tables/:id/timer/:time", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        let parsedInt = parseInt(req.params.time)
        if (0 <= parsedInt && parsedInt < 3600) {
            table.timer = parsedInt
        } else res.status(422).send("Valeur non autorisée")
    } else res.status(404).send("Table non trouvé")
})
app.put("/tables/:id/osaekomiTimer/:time", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        let parsedInt = parseInt(req.params.time)
        if (0 <= parsedInt && parsedInt <= 20) {
            table.osaekomiTimer = parsedInt
        } else res.status(422).send("Valeur non autorisée")
    } else res.status(404).send("Table non trouvé")
})
app.put("/tables/:id/hajime/", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        table.hajime = !table.hajime
    } else res.status(404).send("Table non trouvé")
})
app.put("/tables/:id/goldenscore/", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        table.goldenscore = !table.goldenscore
    } else res.status(404).send("Table non trouvé")
})
app.put("/tables/:id/osaekomiIsRed/", (req, res) => {
    const table = tables.find((a) => a.id === parseInt(req.params.id))
    if (table) {
        table.osaekomiIsRed = !table.osaekomiIsRed
    } else res.status(404).send("Table non trouvé")
})

//TODO: faire les PUT pour infos et nexts

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`)
})
