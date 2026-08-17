const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma final de campeonato, um gol é anulado pelo VAR após identificar um impedimento de poucos centímetros. Qual atitude o árbitro deve tomar?        .?",
        alternativas: [
            {
                texto: "Confirmar a decisão do VAR e anular o gol, pois a tecnologia identificou o impedimento com precisão!",
                afirmacao: "O VAR foi criado para reduzir erros e garantir que as regras sejam aplicadas corretamente, mesmo quando a diferença é muito pequena. "
            },
            {
                texto: "Manter a decisão de campo, pois lances muito ajustados não deveriam ser anulados pela tecnologia.!",
                afirmacao: "Em alguns casos, a margem é tão pequena que muitos torcedores acreditam que o benefício da dúvida deveria favorecer o ataque."
            }
        ]
    },
    {
        enunciado: "Durante um clássico, o árbitro interrompe o jogo por quatro minutos para revisar um possível pênalti. O que você considera mais adequado?",
        alternativas: [
            {
                texto: "Esperar o tempo necessário para que a decisão seja tomada com segurança e justiça.",
                afirmacao: "Uma decisão correta pode ser mais importante do que a rapidez, principalmente em jogos decisivos."
            },
            {
                texto: "Evitar revisões muito longas para manter o ritmo da partida e a emoção do jogo.",
                afirmacao: "Paradas excessivas podem diminuir o espetáculo e prejudicar a experiência dos jogadores e dos torcedores."
            }
        ]
    },
    {
        enunciado: "A FIFA anuncia que pretende utilizar Inteligência Artificial junto com o VAR para analisar automaticamente impedimentos e outros lances. Qual deve ser a atitude das competições?",
        alternativas: [
            {
                texto: "Adotar essa tecnologia para tornar as decisões mais rápidas e precisas.",
                afirmacao: "A Inteligência Artificial pode reduzir ainda mais os erros humanos e aumentar a confiança nas decisões da arbitragem."
            },
            {
                texto: "Continuar utilizando principalmente a análise dos árbitros, deixando a tecnologia apenas como apoio.",
                afirmacao: "Algumas decisões dependem da interpretação humana e não podem ser avaliadas apenas por sistemas automatizados."
            }
        ]
    },
    {
        enunciado: "Um campeonato de menor divisão decide não utilizar o VAR por causa do alto custo da tecnologia. Qual é a melhor decisão?",
        alternativas: [
            {
                texto: "Investir para que todas as competições tenham acesso ao VAR e ofereçam mais justiça esportiva.",
                afirmacao: "A igualdade entre as competições é importante para que todos os atletas disputem em condições semelhantes."
            },
            {
                texto: "Manter o campeonato sem VAR, priorizando outros investimentos mais importantes para os clubes.",
                afirmacao: "Nem todas as competições possuem recursos suficientes, e investir em infraestrutura ou categorias de base pode trazer mais benefícios."
            }
        ]
    },
    {
        enunciado: "Depois de alguns anos utilizando o VAR, muitas pessoas dizem que o futebol ficou mais justo, enquanto outras afirmam que perdeu parte da emoção. Qual opinião faz mais sentido para você? ",
        alternativas: [
            {
                texto: "O VAR deve continuar sendo utilizado, pois a justiça nas decisões é mais importante que a emoção causada pelos erros.",
                afirmacao: "A tecnologia ajuda a evitar injustiças que podem decidir campeonatos e prejudicar equipes."
            },
            {
                texto: "O VAR deveria ser usado apenas em situações muito específicas, para preservar a emoção e a dinâmica do futebol.",
                afirmacao: "O futebol sempre fez parte da paixão dos torcedores, e muitas pessoas acreditam que o excesso de revisões altera a essência do esporte. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();