import produtores from './produtores.json'


function rand(init, fim) {
    return Math.floor(Math.random() * (fim - init +1) + init)
}

export function carregaProdutores(){
    console.log("Carregando dados..."+produtores.lista.length)
     
    
    let lp = produtores.lista.map(p=>{
        let produtor = {}
        produtor.nome = p.nome
        produtor.imagem = {'uri':p.imagem}
        produtor.estrelas = Number(rand(1,5))
        produtor.distancia = Number(rand(1,500))
        return produtor
    })
    return lp.sort((a,b)=> a.distancia - b.distancia)
    
}

export const titulo = produtores.titulo