const articleId = 1 // Remplacez par l'ID de l'article que vous voulez lire
fetch(`https://scoreboard-2025.onrender.com/articles/${articleId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Article non trouvé")
        }
        return response.json()
    })
    .then((data) => {
        console.log("Article récupéré :", data)
    })
    .catch((error) => console.error("Erreur :", error))
