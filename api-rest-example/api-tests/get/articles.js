fetch("https://scoreboard-2025.onrender.com/articles")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des articles")
        }
        return response.json()
    })
    .then((data) => {
        console.log("Liste des articles :", data)
    })
    .catch((error) => console.error("Erreur :", error))
