const articleId = 1 // Remplacez par l'ID de l'article que vous voulez lire
fetch(`http://localhost:3000/articles/${articleId}`)
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
