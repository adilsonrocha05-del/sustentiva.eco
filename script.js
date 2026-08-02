document.addEventListener('DOMContentLoaded', function () {
    // Menu Mobile Toggle
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Atualiza ano no Footer
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `<p>© Sustentiva Eco Homes - ${year}</p>`;
    }

    // Texto dinâmico no Hero
    const textos = [
        "Seu refúgio na natureza",
        "Seu investimento rentável",
        "Construindo o futuro em madeira",
        "Transformando sonhos em realidade"
    ];
    let index = 0;
    const elementoTexto = document.getElementById("texto-dinamico");

    if (elementoTexto) {
        setInterval(() => {
            index = (index + 1) % textos.length;
            elementoTexto.style.opacity = 0;
            setTimeout(() => {
                elementoTexto.textContent = textos[index];
                elementoTexto.style.opacity = 1;
            }, 300);
        }, 3000);
    }
});

// Header Background no Scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// Contraste automático da logo flutuante
function atualizarLogo() {
    const logo = document.querySelector('.logo-flutuante img');
    if (!logo) return;

    const rect = logo.getBoundingClientRect();
    const elemento = document.elementFromPoint(rect.left - 5, rect.top - 5);

    if (!elemento) return;

    const bg = window.getComputedStyle(elemento).backgroundColor;
    if (!bg || bg === 'rgba(0, 0, 0, 0)') return;

    const rgb = bg.match(/\d+/g);
    if (!rgb) return;

    const brilho = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    
    // Se o fundo for claro (brilho alto), não inverte (fica preta). 
    // Se for escuro, inverte (fica branca).
    logo.style.filter = brilho > 140 ? 'invert(0)' : 'invert(1)';
}

// Dados dos Projetos (Catálogo Personalizado)
const projetosData = {
    chale1: {
        titulo: "Elementhal kit EcoCabanas",
        local: "📍 São Roque – SP",
        descricao: "Um projeto amplo com design sofisticado, telhado imponente e excelente aproveitamento de espaço. Perfeito para hospedagem de alto padrão ou refúgio familiar.",
        specs: ["📐 <strong>Área base:</strong> 43m²", "🛏️ <strong>Ambientes:</strong> suite , Sala, Cozinha e Deck", "🌲 <strong>Estrutura:</strong> Madeira de reflorestamento tratada"],
        fotos: ["rose.jpg", "img/rose 11.jpeg", "img/rose1.jpeg", "img/rose2.jpeg", "img/rose3.jpeg"],
        msgWa: "Olá! Gostei do projeto Elementhal (43m²) e quero entender como adaptar para o meu terreno."
    },
    chale2: {
        titulo: "Escritório Sustentável",
        local: "📍 Ibiúna – SP",
        descricao: "Um espaço de trabalho imerso na natureza. Foco em isolamento térmico, acústica e iluminação natural para produtividade máxima.",
        specs: ["📐 <strong>Área base:</strong> 30m²", "🖥️ <strong>Ambientes:</strong> Sala de trabalho ampla e lavabo", "☀️ <strong>Diferencial:</strong> Amplas esquadrias de vidro"],
        fotos: ["escritorio.jpeg", "img/igor1.jpeg", "img/igor2.jpeg", "img/igor3.jpeg"],
        msgWa: "Olá! Gostei do projeto do Escritório (30m²) e gostaria de um orçamento base."
    },
    chale3: {
        titulo: "Tiny House",
        local: "📍 São Roque – SP",
        descricao: "Compacta, funcional e charmosa. Uma solução inteligente que otimiza cada centímetro quadrado sem perder o conforto.",
        specs: ["📐 <strong>Área base:</strong> 25m²", "🎯 <strong>Foco:</strong> Alta rentabilidade / Terrenos compactos", "⚡ <strong>Instalação:</strong> Processo ágil e otimizado"],
        fotos: ["tiny.jpeg", "img/tiny1.jpeg", "img/tiny2.jpeg", "img/tiny3.jpeg"],
        msgWa: "Olá! Gostei do projeto da Tiny House (25m²) e gostaria de mais detalhes."
    },
    chale4: {
        titulo: "Chalé A-Frame",
        local: "📍 Ibiúna – SP",
        descricao: "O clássico formato em 'A' que é sucesso absoluto em locações de Airbnb. Teto inclinado marcante e fachada envidraçada que integra o interior com a paisagem.",
        specs: ["📐 <strong>Área base:</strong> 44m²", "🛏️ <strong>Ambientes:</strong> Térreo integrado e mezanino", "📸 <strong>Apelo:</strong> Design altamente 'instagramável'"],
        fotos: ["ramos1.jpeg", "img/ramos2.jpeg", "img/ramos3.jpeg", "img/ramos4.jpeg"],
        msgWa: "Olá! Gostei da referência do Chalé A-Frame (44m²) e quero um projeto nessa linha."
    },
    chale5: {
        titulo: "Eco Flutua",
        local: "📍 Interior de SP",
        descricao: "Uma experiência de imersão total. Projeto minimalista projetado para proporcionar uma conexão única com o entorno, ideal para propostas de glamping.",
        specs: ["📐 <strong>Área base:</strong> 14m²", "🏕️ <strong>Estilo:</strong> Glamping e experiência imersiva", "🌱 <strong>Impacto:</strong> Mínima intervenção no solo"],
        fotos: ["ecoflutua.jpeg"],
        msgWa: "Olá! Gostei do modelo Eco Flutua (14m²) e queria fazer algo parecido."
    },
    chale6: {
        titulo: "Cabana Samurai",
        local: "📍 São Roque – SP",
        descricao: "Inspiração oriental com linhas retas e telhado característico. Um projeto com identidade arquitetônica forte e ambiente extremamente acolhedor.",
        specs: ["📐 <strong>Área base:</strong> 37m²", "🏯 <strong>Design:</strong> Inspiração arquitetônica oriental", "🛀 <strong>Destaque:</strong> Espaço planejado para banheira/ofurô"],
        fotos: ["samurai.jpeg"],
        msgWa: "Olá! Gostei muito da Cabana Samurai (37m²) e gostaria de mais informações."
    }
};

let fotosModalAtual = [];
let indiceFotoModal = 0;

function abrirModalProjeto(idProjeto) {
    const projeto = projetosData[idProjeto];
    if (!projeto) return;

    // Preenche os dados de texto
    document.getElementById("modal-titulo").textContent = projeto.titulo;
    document.getElementById("modal-local").textContent = projeto.local;
    document.getElementById("modal-descricao").textContent = projeto.descricao;
    
    // Injeta as especificações (lista)
    const ulSpecs = document.getElementById("modal-especificacoes");
    ulSpecs.innerHTML = "";
    projeto.specs.forEach(spec => {
        ulSpecs.innerHTML += `<li>${spec}</li>`;
    });

    // Configura o botão do WhatsApp com a mensagem específica
    const numWhats = "5511991468497";
    const btnWhats = document.getElementById("modal-btn-whatsapp");
    btnWhats.href = `https://wa.me/${numWhats}?text=${encodeURIComponent(projeto.msgWa)}`;

    // Configura a galeria de fotos
    fotosModalAtual = projeto.fotos;
    indiceFotoModal = 0;
    document.getElementById("modal-img-destaque").src = fotosModalAtual[indiceFotoModal];

    // Oculta setas se houver apenas 1 foto
    const setas = document.querySelector(".modal-setas");
    setas.style.display = fotosModalAtual.length > 1 ? "flex" : "none";

    // Mostra o modal
    document.getElementById("modal-projeto").classList.add("ativo");
}

function fecharModalProjeto() {
    document.getElementById("modal-projeto").classList.remove("ativo");
}

function mudarFotoModal(direcao) {
    if (fotosModalAtual.length <= 1) return;
    
    indiceFotoModal += direcao;
    
    // Looping nas fotos
    if (indiceFotoModal < 0) {
        indiceFotoModal = fotosModalAtual.length - 1;
    } else if (indiceFotoModal >= fotosModalAtual.length) {
        indiceFotoModal = 0;
    }
    
    document.getElementById("modal-img-destaque").src = fotosModalAtual[indiceFotoModal];
}

// Fechar ao clicar fora do conteúdo
document.getElementById('modal-projeto').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharModalProjeto();
    }
});

// Fechar com a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") fecharModalProjeto();
});// Lógica do FAQ (Efeito Sanfona / Accordion)
const faqPerguntas = document.querySelectorAll(".faq-pergunta");

faqPerguntas.forEach(pergunta => {
    pergunta.addEventListener("click", function() {
        // Alterna a classe 'ativo' no botão clicado
        this.classList.toggle("ativo");

        // Seleciona o elemento de resposta logo abaixo da pergunta
        const resposta = this.nextElementSibling;

        // Se estiver aberto, fecha. Se estiver fechado, abre.
        if (resposta.style.maxHeight) {
            resposta.style.maxHeight = null;
        } else {
            // (Opcional) Fecha as outras perguntas ao abrir uma nova
            faqPerguntas.forEach(outraPergunta => {
                if (outraPergunta !== this) {
                    outraPergunta.classList.remove("ativo");
                    outraPergunta.nextElementSibling.style.maxHeight = null;
                }
            });

            // Abre a resposta clicada baseada no tamanho do conteúdo
            resposta.style.maxHeight = resposta.scrollHeight + "px";
        }
    });
});