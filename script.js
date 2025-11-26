// Dados dos Serviços
const tratamentos = [
    {
        titulo: "Harmonização Facial",
        descricao: "Procedimentos minimamente invasivos para equilibrar as proporções do rosto e realçar seus traços naturais.",
        imagem: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Limpeza de Pele Profunda",
        descricao: "Remoção de impurezas e renovação celular. Utilizamos vapor de ozônio e produtos dermocosméticos premium.",
        imagem: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Drenagem Linfática",
        descricao: "Massagem corporal que elimina a retenção de líquidos, reduz medidas e proporciona relaxamento imediato.",
        imagem: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Laser Lavieen",
        descricao: "Tecnologia avançada para efeito 'BB Cream'. Trata manchas, poros dilatados e melhora a textura da pele.",
        imagem: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Função para renderizar os cards de serviço
function carregarServicos() {
    const container = document.getElementById('servicos-container');
    container.innerHTML = '';

    tratamentos.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card-servico');

        card.innerHTML = `
            <div class="img-servico" style="background-image: url('${item.imagem}')"></div>
            <div class="info-servico">
                <h3>${item.titulo}</h3>
                <p>${item.descricao}</p>
                <button onclick="agendar('${item.titulo}')">Saiba Mais</button>
            </div>
        `;

        container.appendChild(card);
    });
}

function agendar(servico) {
    alert(`Olá! Gostaria de agendar uma avaliação para: ${servico}?`);
}

window.onload = carregarServicos;