const newArticle = {
    title: "Nouvel article",
    content: "Contenu du nouvel article",
}

fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
})
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la création de l'article")
        }
        return response.json()
    })
    .then((data) => {
        console.log("Article créé :", data)
    })
    .catch((error) => console.error("Erreur :", error))
