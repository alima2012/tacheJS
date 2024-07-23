function createArticle(post){
    const article = document.createElement('article')
    article.innerHTML = 
        <h2>${post.title}</h2>,
        <p>${post.body}</p>

        return article
}
async function main(){
    const wrapper = document.querySelector('#lastPosts')
    const loader = document.createElement('p')
    loader.innerText = 'Chargement...'
    wrapper.append(loader)
    try{
        const r = await fetch(' https://jsonplaceholder.typicode.com/', {
            headers: {
                Accept: 'application/json'
            }
        })
        if(!r.ok){
            throw new Error('Erreur serveur')
        }
        const posts = await r.json()
        loader.remove()
        for (let post of postst){
            wrapper.append(createArticle(post))
        }
    }catch(e){
        loader.innerText = 'Impossible de charger les articles'
        loader.style.color = 'red'
    }
}
main()
       


// const li = document.querySelector('ul li:first-child')
// const newLi = document.createElement('li')
// newLi.innerHTML = 'Bonjour les gens'
// document.querySelector('ul').appendChild(newLi)
// ul.setAttribute('hidden', 'hidden')
// console.log(ul.classList.remove('red'))