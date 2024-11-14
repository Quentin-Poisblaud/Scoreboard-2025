const articleId = 1 // Remplacez par l'ID de l'article que vous voulez supprimer
fetch(`https://scoreboard-2025.onrender.com/articles/${articleId}`, {
    method: "DELETE",
})
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la suppression de l'article")
        }
        console.log("Article supprimé")
    })
    .catch((error) => console.error("Erreur :", error))
