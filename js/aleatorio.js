const nomes = ["Hector", "Joaquim", "Lucas", "Francisco", "Gabriel", "João Pedro", "Leonardo"];
export function aleatorio(Lista){
    const posicao = Math.floor(Math.random()* Lista.length);
    return Lista[posicao];
}

export const nome = aleatorio(nomes);