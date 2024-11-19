let player1 = {
    playerInfo: {
        name: "null",
        surname: "null",
        club: "null",
    },
    scoreInfo: { ippon: "x", wazaari: "x", kinza: "xx" },
    penalInfo: {
        shido: "xx",
        hansokumake: null,
    },
}
let player2 = {
    playerInfo: {
        name: "null",
        surname: "null",
        club: "null",
    },
    scoreInfo: { ippon: "x", wazaari: "x", kinza: "xx" },
    penalInfo: {
        shido: "x",
        hansokumake: null,
    },
}
let timer = 0
let nexts = {
    p1: { fullname: "null null", club: "null" },
    p2: { fullname: "null null", club: "null" },
}
let infos = `<div>null</div>
             <div>null</div>
             <div>null</div>`

let osaekomiTimer = 0
let osaekomiIsRed = false

let hajime = true
let goldenscore = false

async function fetchAndUpdate(tableId) {
    try {
        const response = await fetch(
            `https://scoreboard-2025.onrender.com/tables/${tableId}`
        )

        if (!response.ok) {
            throw new Error("Table non trouvée")
        }
        const result = await response.json()
        player1 = result.player1
        player2 = result.player2
        timer = result.timer
        nexts = result.nexts
        infos = result.infos
        osaekomiTimer = result.osaekomiTimer
        osaekomiIsRed = result.osaekomiIsRed
        hajime = result.hajime
        goldenscore = result.goldenscore

        console.log("Table récupérée :", result)
    } catch (error) {
        console.error("Erreur :", error)
    }
}
