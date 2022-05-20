console.log("Este um CRUD muito básico para JavaScript.");

const miniTwitter = {
    usuarios: [
        {
            username: 'guilherme.arruda',
        }
    ],

    posts: [
        {
            id: 1,
            owner: 'guilherme.arruda',
            content: 'Meu Primeiro Tweet'
        }
    ],
};
//CREATE
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'guilherme.arruda', content: 'Segundo Tweet' });
console.log(miniTwitter.posts);

//READ
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts());

//UPDATE
function atualizaPost(id, novoConteudo) {
    const postAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postAtualizado)
    postAtualizado.content = novoConteudo
}
atualizaPost(1, 'Novo Conteúdo do Post')
console.log(pegaPosts())

//DELETE
function apagaPost(id){
    const listaPostAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaPostAtualizada;
}
apagaPost(1);
console.log(pegaPosts());
