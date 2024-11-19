const articleId = 1 // Remplacez par l'ID de l'article que vous voulez lire
fetch(`https://scoreboard-2025.onrender.com/tables/${tableId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Table non trouvée")
        }
        return response.json()
    })
    .then((data) => {
        console.log("Table récupérée :", data)
    })
    .catch((error) => console.error("Erreur :", error))
