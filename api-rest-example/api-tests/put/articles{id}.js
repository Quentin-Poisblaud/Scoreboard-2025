const articleId = 1 // Remplacez par l'ID de l'article que vous voulez mettre à jour
const updatedArticle = {
    title: "Titre mis à jour",
    content: "Contenu mis à jour",
}

fetch(`http://localhost:3000/articles/${articleId}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedArticle),
})
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la mise à jour de l'article")
        }
        return response.json()
    })
    .then((data) => {
        console.log("Article mis à jour :", data)
    })
    .catch((error) => console.error("Erreur :", error))
