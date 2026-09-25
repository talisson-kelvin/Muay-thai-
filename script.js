// BANCO DE QUESTÕES (50 Perguntas com IDs únicos)
const questionsData = [
    // === NÍVEL FÁCIL ===
    { id: 1, difficulty: "easy", category: "História", question: "Em qual país foi criado o Muay Thai?", options: ["Japão", "China", "Tailândia", "Coreia do Sul"], correct: 2, explanation: "O Muay Thai é a arte marcial e o desporto nacional da Tailândia.", tip: "Também é vulgarmente conhecido como Boxe Tailandês." },
    { id: 2, difficulty: "easy", category: "Técnica", question: "O Muay Thai é conhecido como a Arte de quantas armas?", options: ["4 Armas", "6 Armas", "8 Armas", "10 Armas"], correct: 2, explanation: "Utiliza 2 punhos, 2 cotovelos, 2 joelhos e 2 canelas/pés.", tip: "Lembre-se dos 4 membros principais multiplicados por 2." },
    { id: 3, difficulty: "easy", category: "Termos", question: "Quem treina Muay Thai é chamado de?", options: ["Karateca", "Nak Muay", "Judoca", "Kru"], correct: 1, explanation: "'Nak' é uma pessoa dedicada a algo, e 'Muay' significa luta.", tip: "Nak Muay = Praticante de luta." },
    { id: 4, difficulty: "easy", category: "Termos", question: "Como se chama o cumprimento utilizado para as mulheres?", options: ["Sawasdee Krap", "Sawasdee Kha", "Wai Kru", "Nak Muay"], correct: 1, explanation: "Na Tailândia, as mulheres usam a terminação 'Kha' para saudar.", tip: "Lembre-se: 'Kha' para o feminino." },
    { id: 5, difficulty: "easy", category: "Termos", question: "Como se chama o cumprimento utilizado para os homens?", options: ["Sawasdee Kha", "Sawasdee Krap", "Wai Kru", "Mongkol"], correct: 1, explanation: "Homens utilizam a terminação 'Krap' como sinal de respeito.", tip: "Homem = Krap." },
    { id: 6, difficulty: "easy", category: "Técnica", question: "Quais são os golpes básicos de soco (punhos)?", options: ["Jab, Direto, Cruzado e Uppercut", "Chute e Cotovelada", "Gancho e Voadora", "Frontal e Circular"], correct: 0, explanation: "São as técnicas de boxe integradas no Muay Thai.", tip: "Iguais aos do Boxe tradicional." },
    { id: 7, difficulty: "easy", category: "Termos", question: "Como o professor de Muay Thai é chamado?", options: ["Sensei", "Sifu", "Mestre", "Kru"], correct: 3, explanation: "'Kru' é a palavra tailandesa para professor.", tip: "Sensei é japonês. No Thai é Kru." },
    { id: 8, difficulty: "easy", category: "História", question: "Quantos assaltos (rounds) tem uma luta tradicional profissional de Muay Thai?", options: ["3 rounds", "5 rounds", "10 rounds", "12 rounds"], correct: 1, explanation: "As lutas profissionais na Tailândia são disputadas em 5 rounds de 3 minutos.", tip: "Menos que o boxe, mas com 5 rounds intensos." },
    { id: 9, difficulty: "easy", category: "Técnica", question: "Onde o lutador de Muay Thai deve manter as mãos na guarda básica?", options: ["Abaixo da cintura", "Na altura do peito", "Na altura das sobrancelhas/testa", "Atrás das costas"], correct: 2, explanation: "A guarda alta protege a cabeça contra socos e cotoveladas.", tip: "Mãos altas sempre!" },
    { id: 10, difficulty: "easy", category: "Técnica", question: "Na postura (base) de luta, como fica o calcanhar da perna de trás?", options: ["Totalmente colado ao chão", "Ligeiramente levantado", "Apoiado no joelho", "Cruzado atrás da perna da frente"], correct: 1, explanation: "O calcanhar levantado dá mobilidade e rapidez para atacar ou defender.", tip: "Como uma mola pronta para saltar." },
    { id: 11, difficulty: "easy", category: "Termos", question: "Qual a saudação usada ao entrar e sair do tatame/ringue?", options: ["Osu", "Namaste", "Sawasdee", "Wai"], correct: 2, explanation: "Sawasdee é a saudação tradicional acompanhada do gesto Wai.", tip: "A mesma usada no dia a dia tailandês." },
    { id: 12, difficulty: "easy", category: "História", question: "O Muay Thai foca-se mais em golpes em pé ou luta no chão?", options: ["Luta no chão", "Luta agarrada apenas", "Luta em pé (Striking)", "Projeções e imobilizações"], correct: 2, explanation: "É uma arte marcial estritamente de trocação em pé (striking).", tip: "Não há imobilizações no chão." },
    { id: 13, difficulty: "easy", category: "Técnica", question: "Como deve ser a respiração ao desferir um golpe?", options: ["Prender o ar (apneia)", "Inspirar fundo", "Expirar soltando o ar (gritar/chiar)", "Respirar apenas pelo nariz"], correct: 2, explanation: "Expirar ao golpear contrai o abdômen e aumenta a força e proteção.", tip: "O famoso 'ish' ou 'shh' no impacto." },
    { id: 14, difficulty: "easy", category: "Técnica", question: "Qual é o principal uso do golpe 'Jab'?", options: ["Nocaute imediato", "Medir distância e preparar outros golpes", "Defender chutes", "Derrubar o oponente"], correct: 1, explanation: "O Jab é o golpe mais rápido da mão da frente, usado para distância e distração.", tip: "A mão da frente abre o caminho." },
    { id: 15, difficulty: "easy", category: "História", question: "Qual é a vestimenta inferior padrão usada em lutas de Muay Thai?", options: ["Calça de Kimono", "Bermuda de surf", "Calção Tailandês (Thai Trunks)", "Legging"], correct: 2, explanation: "Os calções curtos e largos permitem liberdade total para as pernas.", tip: "Costumam ser brilhantes e coloridos." },
    { id: 16, difficulty: "easy", category: "Termos", question: "O que significa a cor da faixa (Kruang) no braço no Ocidente?", options: ["A idade do aluno", "O nível/graduação do praticante", "O número de lutas que venceu", "O peso do atleta"], correct: 1, explanation: "No ocidente, o Kruang funciona como o sistema de faixas do Karaté/Judo.", tip: "Indica o seu Khan (nível)." },

    // === NÍVEL MÉDIO ===
    { id: 17, difficulty: "medium", category: "História", question: "Como se chama o ritual de homenagem aos treinadores antes da luta?", options: ["Wai Kru", "Sawasdee", "Kruang", "Mongkol"], correct: 0, explanation: "'Wai' (reverenciar) e 'Kru' (professor).", tip: "Reverência ao Mestre." },
    { id: 18, difficulty: "medium", category: "História", question: "O que é o Ram Muay?", options: ["A luta em si", "A dança realizada antes dos combates", "Uma técnica de chute", "O amuleto de cabeça"], correct: 1, explanation: "É a dança que se segue ao Wai Kru para demonstrar respeito.", tip: "'Ram' significa dança." },
    { id: 19, difficulty: "medium", category: "Termos", question: "Como se chama a corda de graduação usada no braço?", options: ["Kruang (Prajied)", "Mongkol", "Faixa", "Kimono"], correct: 0, explanation: "O Kruang indica a graduação do Nak Muay no ocidente.", tip: "Braço = Kruang/Prajied." },
    { id: 20, difficulty: "medium", category: "Termos", question: "Qual é o nome do amuleto sagrado usado na cabeça?", options: ["Kruang", "Mongkol", "Ram Muay", "Khan"], correct: 1, explanation: "Amuleto abençoado usado na cabeça, retirado pelo mestre.", tip: "Cabeça = Mongkol." },
    { id: 21, difficulty: "medium", category: "História", question: "O que significa a palavra 'Muay'?", options: ["Paz", "Arte", "Luta / Combate", "Defesa"], correct: 2, explanation: "Deriva do sânscrito 'Mavya' (juntar ou lutar).", tip: "Muay Thai = Luta Tailandesa." },
    { id: 22, difficulty: "medium", category: "Técnica", question: "Qual a perna que deve ficar atrás na base de luta?", options: ["A perna esquerda", "A perna direita", "A perna forte (dominante)", "Paralelas"], correct: 2, explanation: "A perna mais forte fica atrás para gerar potência.", tip: "Destro = Direita atrás." },
    { id: 23, difficulty: "medium", category: "História", question: "Em média, até qual graduação (Khan) o sistema ocidental vai?", options: ["10º Khan", "15º Khan", "5º Khan", "20º Khan"], correct: 1, explanation: "Vai até ao 15º Khan (Grão Mestre/Ouro).", tip: "Termina no Ouro (15)." },
    { id: 24, difficulty: "medium", category: "Técnica", question: "Qual a área de contato principal ao desferir um chute circular?", options: ["Peito do pé", "Canela (tíbia)", "Joelho", "Calcanhar"], correct: 1, explanation: "O impacto é feito com a canela para causar mais dano.", tip: "A canela é o 'taco de beisebol' da perna." },
    { id: 25, difficulty: "medium", category: "Técnica", question: "Como é feita a defesa básica de um chute circular na costela?", options: ["Cruzando os braços", "Agarrando a perna", "Levantando a perna para bloquear com a canela", "Virando as costas"], correct: 2, explanation: "Bloqueia-se osso com osso levantando a perna num ângulo de 45 graus (check).", tip: "Sempre canela contra canela." },
    { id: 26, difficulty: "medium", category: "Termos", question: "O que significa 'Nak Muay Ying'?", options: ["Mestre de Muay Thai", "Lutadora Feminina", "Árbitro de combate", "Técnica de joelho"], correct: 1, explanation: "Ying é o termo usado para mulheres praticantes/lutadoras.", tip: "Ying = Feminino." },
    { id: 27, difficulty: "medium", category: "Técnica", question: "Como se chama a esquiva para trás, tirando o tronco do alcance de um chute alto?", options: ["Clinch", "Pendular", "Lean Back (Esquiva de tronco)", "Check"], correct: 2, explanation: "É comum inclinar o tronco para trás (Lean back) para fazer o chute passar em falso.", tip: "Inclinar para trás." },
    { id: 28, difficulty: "medium", category: "Termos", question: "Como se chama o saco de pancadas tradicional?", options: ["Saco búlgaro", "Heavy Bag", "Makiwara", "Pera de velocidade"], correct: 1, explanation: "O Heavy Bag (saco pesado e longo) é o equipamento padrão para condicionar as canelas.", tip: "Equipamento pesado." },
    { id: 29, difficulty: "medium", category: "História", question: "Quais são os dois estádios mais lendários do Muay Thai em Bangkok?", options: ["Maracanã e Wembley", "Lumpinee e Rajadamnern", "MGM e Madison Square", "Tóquio Dome e Korakuen"], correct: 1, explanation: "Lumpinee e Rajadamnern são os 'templos' sagrados do esporte.", tip: "Nomes tailandeses icónicos." },
    { id: 30, difficulty: "medium", category: "Técnica", question: "É permitido golpear o adversário na parte de trás da cabeça/nuca?", options: ["Sim, sempre", "Apenas no clinch", "Não, é falta", "Apenas com cotovelos"], correct: 2, explanation: "Golpes na nuca são ilegais e perigosos no Muay Thai.", tip: "Regra básica de segurança." },
    { id: 31, difficulty: "medium", category: "Termos", question: "Como se chama o protetor de dentes?", options: ["Capacete", "Bandagem", "Bocal (Mouthguard)", "Coquilha"], correct: 2, explanation: "O protetor bucal é essencial para absorver impactos e não cortar a boca.", tip: "Fica na boca." },
    { id: 32, difficulty: "medium", category: "Técnica", question: "O que é 'caminhar/andar em compasso' no ringue?", options: ["Pular com os dois pés", "Arrastar a perna de trás sem cruzar as pernas", "Correr em círculos", "Andar para trás o tempo todo"], correct: 1, explanation: "A base nunca deve ser cruzada para não perder o equilíbrio.", tip: "Um pé empurra o outro." },
    { id: 33, difficulty: "medium", category: "Termos", question: "O que é o 'Camp'?", options: ["Golpe giratório", "Acampamento/Ginásio onde os lutadores treinam e vivem", "O calção da luta", "O round extra"], correct: 1, explanation: "Na Tailândia, o Camp (Kai Muay) é onde o lutador treina, dorme e se alimenta.", tip: "A casa do lutador." },

    // === NÍVEL DIFÍCIL ===
    { id: 34, difficulty: "hard", category: "Termos", question: "Como se diz 'Chute' em tailandês?", options: ["Sok", "Kao", "Tae", "Mat"], correct: 2, explanation: "'Tae' refere-se aos chutes.", tip: "Tae = Chute." },
    { id: 35, difficulty: "hard", category: "Termos", question: "Como se diz 'Joelho' em tailandês?", options: ["Sok", "Kao", "Tae", "Mat"], correct: 1, explanation: "'Kao' (ou Khao) refere-se ao joelho.", tip: "Kao = Joelho." },
    { id: 36, difficulty: "hard", category: "Termos", question: "Como se diz 'Cotovelo' em tailandês?", options: ["Sok", "Kao", "Tae", "Mat"], correct: 0, explanation: "'Sok' refere-se ao cotovelo.", tip: "Sok = Cotovelo." },
    { id: 37, difficulty: "hard", category: "Termos", question: "Como se diz 'Soco' em tailandês?", options: ["Sok", "Kao", "Tae", "Mat"], correct: 3, explanation: "'Mat' refere-se aos golpes de punho.", tip: "Mat = Soco." },
    { id: 38, difficulty: "hard", category: "Técnica", question: "O que é o 'Teep' no Muay Thai?", options: ["Chute circular", "Chute frontal (empurrão)", "Cotovelada giratória", "Joelhada voadora"], correct: 1, explanation: "É um empurrão com a planta do pé usado para controlar a distância.", tip: "Chute Frontal." },
    { id: 39, difficulty: "hard", category: "História", question: "De qual arte marcial ancestral o Muay Thai se originou?", options: ["Muay Boran", "Silat", "Lethwei", "Krabi Krabong"], correct: 0, explanation: "O Muay Boran é a arte ancestral militar, focada na guerra sem luvas.", tip: "Boran significa 'antigo'." },
    { id: 40, difficulty: "hard", category: "Técnica", question: "O que é o 'Clinch' (Plam)?", options: ["Esquiva", "Luta agarrada em pé", "Nocaute", "Bloqueio"], correct: 1, explanation: "É a técnica de controlar o pescoço e braços do oponente para aplicar joelhadas e cotoveladas.", tip: "Luta agarrada." },
    { id: 41, difficulty: "hard", category: "História", question: "Quem é o herói histórico do Muay Thai que derrotou 10 birmaneses?", options: ["Buakaw", "Nai Khanom Tom", "Saenchai", "Rama V"], correct: 1, explanation: "Nai Khanom Tom lutou pela sua liberdade no dia 17 de março (Dia do Muay Thai).", tip: "O 'Pai' do Muay Thai." },
    { id: 42, difficulty: "hard", category: "Termos", question: "O que são as 'Kard Chuek'?", options: ["Corda de graduação", "Cordas de cânhamo enroladas nas mãos e antebraços", "Tatuagens", "Luvas de 10oz"], correct: 1, explanation: "Antes das luvas ocidentais, os lutadores usavam cordas nas mãos.", tip: "Chuek = Corda." },
    { id: 43, difficulty: "hard", category: "Técnica", question: "O que significa 'Kao Loi'?", options: ["Soco giratório", "Chute baixo", "Joelhada voadora", "Bloqueio frontal"], correct: 2, explanation: "'Kao' é joelho e 'Loi' significa voar.", tip: "Loi = Voador." },
    { id: 44, difficulty: "hard", category: "Termos", question: "Como é chamado o 'Mestre dos Mestres' (título acima de Kru)?", options: ["Sensei", "Sifu", "Ajarn", "Grand Master"], correct: 2, explanation: "Ajarn é o título dado a mestres altamente experientes.", tip: "Ajarn (ou Arjan)." },
    { id: 45, difficulty: "hard", category: "Termos", question: "Como se chama o Árbitro de ringue em tailandês?", options: ["Nak Muay", "Ajarn", "Kammakan", "Mongkol"], correct: 2, explanation: "Kammakan é a autoridade máxima dentro do ringue.", tip: "Começa com 'K' e tem 3 sílabas." },
    { id: 46, difficulty: "hard", category: "Técnica", question: "O que é 'Sok Glab'?", options: ["Cotovelada descendente", "Cotovelada giratória", "Soco no estômago", "Chute na coxa"], correct: 1, explanation: "'Sok' (cotovelo) e 'Glab' (voltar/girar).", tip: "O golpe preferido para surpresas giratórias." },
    { id: 47, difficulty: "hard", category: "História", question: "Qual antigo rei da Tailândia é conhecido por ter popularizado e modernizado o Muay Thai na sua 'Era de Ouro' inicial?", options: ["Rei Naresuan", "Rei Chulalongkorn (Rama V)", "Nai Khanom Tom", "Bhumibol Adulyadej"], correct: 1, explanation: "O Rei Rama V modernizou a prática e transformou-a em desporto nacional organizado.", tip: "Rama V." },
    { id: 48, difficulty: "hard", category: "Técnica", question: "O que é 'Tae Kha'?", options: ["Chute circular alto na cabeça", "Chute circular baixo nas coxas (Low Kick)", "Joelhada dupla", "Bloqueio duplo"], correct: 1, explanation: "É o famoso Low Kick, visando a coxa ou panturrilha do oponente.", tip: "Kha significa perna/coxa." },
    { id: 49, difficulty: "hard", category: "Termos", question: "O que são as 'Sak Yant'?", options: ["Calções sagrados", "Tatuagens tradicionais tailandesas de proteção", "Os monges budistas", "Os tambores tocados na luta"], correct: 1, explanation: "Muitos lutadores fazem estas tatuagens geométricas para trazer sorte, proteção e força.", tip: "Tinta na pele." },
    { id: 50, difficulty: "hard", category: "Técnica", question: "Qual a diferença do 'Teep' no Muay Thai para um Front Kick do Karaté?", options: ["É feito com o calcanhar", "Serve como uma arma de contenção/empurrão e não apenas como chicote", "É sempre mirado na cabeça", "Não existe diferença"], correct: 1, explanation: "O Teep tem um movimento de pisão e penetração com o quadril para afastar o adversário.", tip: "Funciona como um soco direto usando a perna." }
];

// VARIÁVEIS DE ESTADO
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let streak = 0;

// ARMAZENA AS QUESTÕES JÁ RESPONDIDAS NA SESSÃO ATUAL
let usedQuestionIds = [];

document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
    }

    menuBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Navegação de Telas
    document.querySelectorAll('.nav-link, .btn-card, #startQuizHeroBtn, #startSimuladoCardBtn').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if(targetId) showScreen(targetId);
            
            if (link.id === 'startQuizHeroBtn' || link.id === 'startSimuladoCardBtn') {
                showScreen('pre-quiz-screen');
            }
            if(navMenu.classList.contains('active')) toggleMenu();
        });
    });

    document.getElementById('startCustomQuizBtn').addEventListener('click', startQuiz);
    
    document.getElementById('nextQuestionBtn').addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) loadQuestion();
        else finishQuiz();
    });
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    const target = document.getElementById(screenId);
    if(target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
}

// LÓGICA DE FILTRAGEM ANTI-REPETIÇÃO
function startQuiz() {
    const diffLevel = document.getElementById('quizDifficulty').value;
    const catLevel = document.getElementById('quizCategory').value;

    // 1. Puxa as questões do filtro escolhido
    const filteredQuestions = questionsData.filter(q => {
        const matchDiff = diffLevel === 'all' || q.difficulty === diffLevel;
        const matchCat = catLevel === 'all' || q.category === catLevel;
        return matchDiff && matchCat;
    });

    // 2. Filtra tirando as que já foram respondidas anteriormente
    let availableQuestions = filteredQuestions.filter(q => !usedQuestionIds.includes(q.id));

    // 3. Se não houver pelo menos 10 questões novas disponíveis neste filtro, reseta o histórico!
    if (availableQuestions.length < 10) {
        // Remove da lista de usados apenas as IDs deste filtro atual, mantendo as de outros níveis
        const filteredIds = filteredQuestions.map(q => q.id);
        usedQuestionIds = usedQuestionIds.filter(id => !filteredIds.includes(id));
        availableQuestions = filteredQuestions; // Reinicia a lista de disponíveis
        alert("Já respondeu a quase todas as perguntas deste nível. O seu progresso neste filtro foi reiniciado para poder treinar novamente!");
    }

    // 4. Embaralha as questões disponíveis
    availableQuestions.sort(() => Math.random() - 0.5);

    // 5. Pega 10 questões
    currentQuestions = availableQuestions.slice(0, 10);

    // 6. Adiciona estas 10 na lista de já usadas
    currentQuestions.forEach(q => usedQuestionIds.push(q.id));

    currentQuestionIndex = 0;
    correctAnswers = 0;
    streak = 0;
    document.getElementById('quizCorrects').innerText = "0";
    document.getElementById('quizErrors').innerText = "0";
    
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('questionText').innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    document.getElementById('quizCounter').innerText = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('quizStreak').innerText = `SEQ: ${streak}`;
    
    const progress = (currentQuestionIndex / currentQuestions.length) * 100;
    document.getElementById('quizProgressBar').style.width = `${progress}%`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('feedbackContainer').classList.add('hidden');
    document.getElementById('optionsContainer').style.pointerEvents = 'auto';
}

function checkAnswer(selectedIndex, btnElement) {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('optionsContainer').style.pointerEvents = 'none';
    
    const isCorrect = (selectedIndex === q.correct);
    const feedbackHeader = document.getElementById('feedbackHeader');
    const feedbackResult = document.getElementById('feedbackResult');
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        correctAnswers++;
        streak++;
        document.getElementById('quizCorrects').innerText = correctAnswers;
        feedbackHeader.style.backgroundColor = 'rgba(0, 255, 136, 0.2)';
        feedbackResult.innerText = "ACERTOU!";
        feedbackResult.style.color = "#00FF88";
    } else {
        btnElement.classList.add('wrong');
        streak = 0;
        let errors = parseInt(document.getElementById('quizErrors').innerText) + 1;
        document.getElementById('quizErrors').innerText = errors;
        feedbackHeader.style.backgroundColor = 'rgba(255, 68, 68, 0.2)';
        feedbackResult.innerText = "ERROU";
        feedbackResult.style.color = "#FF4444";
        document.querySelectorAll('.option-btn')[q.correct].classList.add('correct');
    }

    document.getElementById('quizStreak').innerText = `SEQ: ${streak}`;
    document.getElementById('feedbackCorrectText').innerText = q.options[q.correct];
    document.getElementById('feedbackExplanation').innerText = q.explanation;
    document.getElementById('feedbackTip').innerText = q.tip;
    
    document.getElementById('feedbackContainer').classList.remove('hidden');
    
    // Scroll automático suave para o feedback no mobile
    document.getElementById('feedbackContainer').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function finishQuiz() {
    showScreen('result-screen');
    const total = currentQuestions.length;
    const percentage = Math.round((correctAnswers / total) * 100);
    
    document.getElementById('resCorrect').innerText = correctAnswers;
    document.getElementById('resErrors').innerText = total - correctAnswers;
    
    document.getElementById('resPercent').textContent = `${percentage}%`;
    
    const circle = document.getElementById('resultCircle');
    circle.setAttribute('stroke-dasharray', `${percentage}, 100`);
    
    if(percentage >= 80) circle.style.stroke = "#00FF88";
    else if(percentage >= 50) circle.style.stroke = "#FFC800";
    else circle.style.stroke = "#FF4444";
}