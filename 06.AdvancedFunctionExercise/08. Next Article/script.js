function getArticleGenerator(articles) {
    const output = document.getElementById('content');

    return () => {
        if (articles.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            output.appendChild(article)
        }
    }
}