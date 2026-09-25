
   // BANCO DE QUESTÕES COMPLETO - MUAY THAI
const questionsData = [
    // === FUNDAMENTOS TÉCNICOS ===
    {
        id: 1,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é o jab no Muay Thai?",
        options: [
            "Um chute circular com a perna de trás",
            "Um golpe reto desferido com a mão da frente",
            "Uma cotovelada descendente",
            "Uma joelhada voadora"
        ],
        correct: 1,
        explanation: "O jab é o golpe reto desferido com a mão que está mais próxima do adversário (mão da frente).",
        tip: "É a principal ferramenta para manter a distância e preparar combinações."
    },
    {
        id: 2,
        difficulty: "easy",
        category: "Fundamentos",
        question: "Qual mão executa o jab na base tradicional?",
        options: [
            "A mão de trás",
            "Ambas as mãos ao mesmo tempo",
            "A mão da frente",
            "Nenhuma das mãos"
        ],
        correct: 2,
        explanation: "Na base tradicional, o jab é sempre executado com a mão da frente.",
        tip: "Lembre-se: mão da frente = jab."
    },
    {
        id: 3,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é o direto?",
        options: [
            "Um golpe reto com a mão de trás",
            "Um chute frontal rápido",
            "Uma esquiva lateral",
            "Um bloqueio alto"
        ],
        correct: 0,
        explanation: "O direto é um golpe reto forte desferido com a mão que está posicionada atrás na base.",
        tip: "Aproveita a rotação do pé e do quadril de trás para gerar potência."
    },
    {
        id: 4,
        difficulty: "easy",
        category: "Fundamentos",
        question: "Qual é a diferença entre jab e direto?",
        options: [
            "O jab usa a mão de trás e o direto a da frente",
            "O jab usa a mão da frente e o direto a mão de trás",
            "Não existe diferença",
            "O jab é feito com os pés"
        ],
        correct: 1,
        explanation: "A principal diferença reside na mão utilizada: o jab usa a dianteira e o direto utiliza a traseira.",
        tip: "O jab foca em velocidade/distância; o direto foca em potência."
    },
    {
        id: 5,
        difficulty: "medium",
        category: "Fundamentos",
        question: "Qual é a posição correta dos pés na base?",
        options: [
            "Pés colados um ao outro",
            "Pés alinhados na mesma linha lateral",
            "Pés afastados na largura dos ombros com um pé ligeiramente à frente",
            "Um pé virado completamente para trás"
        ],
        correct: 2,
        explanation: "Os pés devem manter uma base sólida, afastados na largura dos ombros, permitindo mobilidade e equilíbrio.",
        tip: "Evite alinhar os pés lateralmente para não perder o equilíbrio facilmente."
    },
    {
        id: 6,
        difficulty: "easy",
        category: "Fundamentos",
        question: "Para um destro na base tradicional, qual pé fica à frente?",
        options: [
            "O pé direito",
            "O pé esquerdo",
            "Ambos lado a lado",
            "Qualquer um aleatoriamente"
        ],
        correct: 1,
        explanation: "Para um destro na base ortodoxa/tradicional, o pé esquerdo fica posicionado à frente.",
        tip: "A mão e o pé mais ágeis ficam na frente."
    },
    {
        id: 7,
        difficulty: "medium",
        category: "Fundamentos",
        question: "Para um canhoto, qual pé geralmente fica à frente?",
        options: [
            "O pé esquerdo",
            "O pé direito",
            "Nenhum deles",
            "Apenas os calcanhares"
        ],
        correct: 1,
        explanation: "Canhotos (base southpaw) colocam o pé direito à frente e a mão direita na dianteira.",
        tip: "Inverte a lógica da base de um destro."
    },
    {
        id: 8,
        difficulty: "easy",
        category: "Fundamentos",
        question: "Por que devemos manter o queixo protegido durante a guarda?",
        options: [
            "Para evitar nocautes e desequilíbrios causados por impactos diretos",
            "Para conseguir respirar melhor",
            "Para enxergar o oponente de costas",
            "Para manter a coluna reta"
        ],
        correct: 0,
        explanation: "O queixo é uma zona altamente vulnerável a nocautes; mantê-lo colado ao peito/ombro protege contra impactos.",
        tip: "Queixo baixo salva combates."
    },
    {
        id: 9,
        difficulty: "easy",
        category: "Fundamentos",
        question: "Qual é a função da mão que não está golpeando?",
        options: [
            "Ficar abaixada para descansar",
            "Manter a guarda alta e proteger o rosto",
            "Apontar para o adversário",
            "Segurar a corda do ringue"
        ],
        correct: 1,
        explanation: "Enquanto um membro ataca, o outro deve garantir a protecção defensiva do corpo e rosto.",
        tip: "Regra de ouro: atacou de um lado, protegeu do outro."
    },
    {
        id: 10,
        difficulty: "medium",
        category: "Fundamentos",
        question: "Por que é importante manter o equilíbrio durante os golpes?",
        options: [
            "Para conseguir dançar no ringue",
            "Para evitar quedas, retornar rapidamente à guarda e desferir novos golpes com potência",
            "Para gastar mais energia",
            "Para agradar ao público"
        ],
        correct: 1,
        explanation: "O equilíbrio garante suporte estrutural para aplicar força e permite reagir imediatamente a contra-ataques.",
        tip: "Sem equilíbrio, perde-se força e defesa."
    },
    {
        id: 11,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é a guarda no Muay Thai?",
        options: [
            "A posição de combate defensiva e ofensiva padrão",
            "O intervalo entre os rounds",
            "O uniforme oficial de treino",
            "A saudação inicial"
        ],
        correct: 0,
        explanation: "A guarda é a postura corporal estruturada para proteger o corpo enquanto permite atacar.",
        tip: "Cotovelos fechados, mãos junto ao rosto e base firme."
    },
    {
        id: 12,
        difficulty: "medium",
        category: "Fundamentos",
        question: "O que significa manter uma postura correta?",
        options: [
            "Estar com os braços abertos",
            "Alinhamento corporal que favorece a biomecânica, proteção e eficiência dos movimentos",
            "Ficar imóvel o máximo de tempo possível",
            "Inclinar o tronco totalmente para a frente"
        ],
        correct: 1,
        explanation: "A postura correta otimiza a energia, protege pontos vitais e agiliza a execução técnica.",
        tip: "Postura eficiente = menor gasto de energia e maior segurança."
    },
    {
        id: 13,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é um cruzado?",
        options: [
            "Um golpe circular de curta/média distância com rotação de tronco",
            "Um chute baixo na coxa",
            "Uma defesa de braço cruzado",
            "Um passo lateral rápido"
        ],
        correct: 0,
        explanation: "O cruzado é um golpe de punho desferido com o braço semi-flexionado em trajetória circular.",
        tip: "O punho cruza em direção ao alvo com forte rotação do calcanhar e quadril."
    },
    {
        id: 14,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é um uppercut?",
        options: [
            "Um soco ascendente de baixo para cima",
            "Um chute frontal alto",
            "Uma cotovelada lateral",
            "Uma queda de anca"
        ],
        correct: 0,
        explanation: "O uppercut é um soco desferido de baixo para cima, visando o queixo ou o tronco do oponente.",
        tip: "Excelente para quebrar guardas fechadas pela frente."
    },
    {
        id: 15,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é um chute frontal (teep)?",
        options: [
            "Um chute de empurrão usando a sola do pé",
            "Um chute giratório de costas",
            "Um golpe de calcanhar descendente",
            "Uma joelhada voadora"
        ],
        correct: 0,
        explanation: "O teep funciona como um 'jab de perna', servindo para afastar, controlar a distância e desequilibrar o oponente.",
        tip: "Usa-se a sola do pé ou os artelhos para empurrar."
    },
    {
        id: 16,
        difficulty: "medium",
        category: "Fundamentos",
        question: "Qual é a função principal do teep?",
        options: [
            "Nocautear com força máxima sempre",
            "Controlar a distância, impedir a aproximação e desequilibrar o adversário",
            "Golpear as costas do oponente",
            "Substituir o uso das mãos"
        ],
        correct: 1,
        explanation: "O teep é uma ferramenta tática defensiva e ofensiva para gerir o espaço no combate.",
        tip: "Mantém o adversário à distância segura."
    },
    {
        id: 17,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é um chute circular?",
        options: [
            "Um chute em trajetória semicircular de baixo para cima ou lateral",
            "Um chute em linha reta para a frente",
            "Um giro completo de 360 graus",
            "Um chute dado com os calcanhares"
        ],
        correct: 0,
        explanation: "O chute circular (Roundhouse kick) é o ataque clássico do Muay Thai desferido em arco.",
        tip: "Gera enorme potência através da rotação do quadril."
    },
    {
        id: 18,
        difficulty: "medium",
        category: "Fundamentos",
        question: "Qual parte da perna é tradicionalmente utilizada para aplicar o chute circular?",
        options: [
            "A ponta dos dedos do pé",
            "A canela (tíbia)",
            "O joelho exclusivamente",
            "A parte de trás do calcanhar"
        ],
        correct: 1,
        explanation: "No Muay Thai tradicional, o impacto do chute circular é feito com a tíbia (canela) e não com o pé.",
        tip: "A canela é um osso duro e resistente ideal para o impacto."
    },
    {
        id: 19,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é uma joelhada?",
        options: [
            "Um golpe desferido utilizando a articulação do joelho",
            "Um bloqueio de perna",
            "Uma queda aplicada com o joelho no chão",
            "Um passo de deslocamento"
        ],
        correct: 0,
        explanation: "A joelhada é uma das armas corporais mais devastadoras de curta distância no clinch e na média.",
        tip: "Pode ser reta, circular ou voadora."
    },
    {
        id: 20,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é uma cotovelada?",
        options: [
            "Um golpe desferido com a ponta do osso do cotovelo",
            "Uma defesa de braço esticado",
            "Um abraço técnico no clinch",
            "Uma flexão de braço no solo"
        ],
        correct: 0,
        explanation: "A cotovelada utiliza a ponta rígida do cotovelo para desferir golpes cortantes ou de impacto em curta distância.",
        tip: "Altamente eficiente para combates corpo a corpo."
    },
    {
        id: 21,
        difficulty: "medium",
        category: "Fundamentos",
        question: "Quais partes do corpo formam as 'oito armas'?",
        options: [
            "Dois punhos, dois cotovelos, dois joelhos e duas canelas/pés",
            "Apenas os braços e as pernas",
            "Cabeça, tronco, membros superiores e inferiores",
            "Mãos, pés, cabeça e ancas"
        ],
        correct: 0,
        explanation: "As oito armas referem-se ao uso combinado de punhos, cotovelos, joelhos e canelas/pés.",
        tip: "Permite atacar em várias distâncias diferentes."
    },
    {
        id: 22,
        difficulty: "easy",
        category: "Fundamentos",
        question: "Por que o Muay Thai é chamado de 'Arte das Oito Armas'?",
        options: [
            "Porque utiliza oito membros principais do corpo como pontos de impacto",
            "Porque tem oito regras fundamentais",
            "Porque foi criado por oito mestres",
            "Porque são necessários oito anos para graduar"
        ],
        correct: 0,
        explanation: "O termo reflete a versatilidade de usar punhos, cotovelos, joelhos e canelas como armas de combate.",
        tip: "Diferencia-se de artes marciais que usam apenas punhos ou apenas pés."
    },
    {
        id: 23,
        difficulty: "medium",
        category: "Fundamentos",
        question: "O que é uma esquiva?",
        options: [
            "Um movimento corporal para desviar a trajetória de um ataque adversário",
            "Um golpe de encontro",
            "Um tipo de queda lateral",
            "A interrupção do combate pelo árbitro"
        ],
        correct: 0,
        explanation: "A esquiva permite evitar o golpe sem necessariamente bloquear com os braços, abrindo espaço para contra-atacar.",
        tip: "Economiza esforço físico e protege contra impactos diretos."
    },
    {
        id: 24,
        difficulty: "easy",
        category: "Fundamentos",
        question: "O que é um bloqueio?",
        options: [
            "A interrupção física de um ataque com o uso dos braços, pernas ou tronco",
            "Uma regra proibida no ringue",
            "Uma técnica de submissão no solo",
            "A saída voluntária do combate"
        ],
        correct: 0,
        explanation: "O bloqueio absorve ou desvia o impacto de um golpe aplicado pelo oponente.",
        tip: "Bloquear com a canela evita lesões nos chutes circulares."
    },
    {
        id: 25,
        difficulty: "medium",
        category: "Fundamentos",
        question: "Por que não devemos cruzar os pés desnecessariamente durante o deslocamento?",
        options: [
            "Porque causa perda de equilíbrio e vulnerabilidade a quedas",
            "Porque é contra a etiqueta cultural tailandesa",
            "Porque gasta mais bateria mental",
            "Não há problema em cruzar os pés"
        ],
        correct: 0,
        explanation: "Cruzar os pés estreita a base de sustentação, tornando o praticante extremamente instável a qualquer empurrão.",
        tip: "Passos deslizantes e controlados mantêm a estabilidade."
    },

    // === BASE E MOVIMENTAÇÃO ===
    {
        id: 26,
        difficulty: "medium",
        category: "Base e Movimentação",
        question: "Por que a base é importante no Muay Thai?",
        options: [
            "Garante estabilidade, velocidade de reação e potência para golpes e defesas",
            "Serve apenas para fins estéticos",
            "Permite descansar durante a luta",
            "Evita que o oponente veja o seu rosto"
        ],
        correct: 0,
        explanation: "Uma base sólida é a fundação de toda a biomecânica de ataque e defesa no desporto.",
        tip: "Tudo começa numa boa base."
    },
    {
        id: 27,
        difficulty: "medium",
        category: "Base e Movimentação",
        question: "Como deve estar a distribuição do peso na base?",
        options: [
            "Totalmente no calcanhar da frente",
            "Dividido de forma equilibrada, com leve propensão para a ponta dos pés para facilitar a mobilidade",
            "100% no pé de trás",
            "Apoiado apenas numa perna o tempo todo"
        ],
        correct: 1,
        explanation: "O peso distribuído de forma inteligente permite reagir rapidamente tanto para atacar quanto para defender.",
        tip: "Evite ficar 'pesado' sobre os calcanhares."
    },
    {
        id: 28,
        difficulty: "medium",
        category: "Base e Movimentação",
        question: "Por que devemos manter os pés em uma posição que permita equilíbrio?",
        options: [
            "Para não cair ao receber um impacto ou aplicar um golpe forte",
            "Para correr mais rápido no ringue",
            "Para saltar mais alto",
            "Para facilitar a contagem de pontos"
        ],
        correct: 0,
        explanation: "O equilíbrio dinâmico protege contra desequilíbrios provocados pelos ataques do adversário.",
        tip: "Pés muito juntos = perda de equilíbrio."
    },
    {
        id: 29,
        difficulty: "easy",
        category: "Base e Movimentação",
        question: "O que acontece com a defesa quando você abaixa demais as mãos?",
        options: [
            "O rosto fica totalmente desprotegido contra socos e cotoveladas",
            "A defesa melhora consideravelmente",
            "Ganha-se mais velocidade nos chutes",
            "Nada se altera"
        ],
        correct: 0,
        explanation: "Abaixar a guarda abre uma brecha crítica para golpes diretos e cruzados no rosto.",
        tip: "Guarda baixa é sinónimo de perigo iminente."
    },
    {
        id: 30,
        difficulty: "easy",
        category: "Base e Movimentação",
        question: "Por que devemos retornar à guarda depois de executar um golpe?",
        options: [
            "Para não deixar aberturas para contra-ataques do oponente",
            "Para descansar o braço imediatamente",
            "Porque as regras exigem uma pausa",
            "Para cumprimentar o árbitro"
        ],
        correct: 0,
        explanation: "O momento exato após golpear é quando o praticante fica mais vulnerável se não retornar à postura defensiva.",
        tip: "Bateu, voltou para a base."
    },
    {
        id: 31,
        difficulty: "medium",
        category: "Base e Movimentação",
        question: "O que significa avançar mantendo a base?",
        options: [
            "Mover-se para a frente sem perder a distância padrão entre os pés e a postura de guarda",
            "Correr em direcção ao oponente de olhos fechados",
            "Arrastar os dois pés pelo chão",
            "Avançar pulando sem controle"
        ],
        correct: 0,
        explanation: "Avançar mantendo a base assegura que você está sempre pronto para golpear ou defender a qualquer instante.",
        tip: "Passo da frente puxa o de trás (na passada básica)."
    },
    {
        id: 32,
        difficulty: "medium",
        category: "Base e Movimentação",
        question: "O que significa recuar mantendo a base?",
        options: [
            "Afastar-se do oponente preservando a estrutura postural e a distância entre os pés",
            "Dar as costas e correr",
            "Cair sentado no chão de forma controlada",
            "Recuar saltando para trás sem olhar"
        ],
        correct: 0,
        explanation: "Recuar com base evita tropeços e mantém o controlo visual e defensivo do espaço.",
        tip: "O pé de trás comanda o recuo."
    },
    {
        id: 33,
        difficulty: "easy",
        category: "Base e Movimentação",
        question: "Por que olhar para o adversário é importante durante o treino?",
        options: [
            "Para antecipar movimentos, identificar brechas e reagir a ataques a tempo",
            "Para demonstrar falta de educação",
            "Para contar os segundos do round",
            "Não é necessário olhar se usar a intuição"
        ],
        correct: 0,
        explanation: "O contato visual e a leitura corporal do oponente são fundamentais para a defesa e estratégia.",
        tip: "Quem fecha os olhos perde a informação do golpe."
    },
    {
        id: 34,
        difficulty: "medium",
        category: "Base e Movimentação",
        question: "Qual é a importância do movimento de quadril nos golpes?",
        options: [
            "Gera a maior parte da potência e torque necessários para chutes e socos eficientes",
            "Serve apenas para embelezar a técnica",
            "Ajuda a manter o ritmo musical do treino",
            "Reduz a flexibilidade das pernas"
        ],
        correct: 0,
        explanation: "O quadril funciona como o motor rotacional que transmite o peso do corpo para o ponto de impacto.",
        tip: "Potência no Muay Thai vem do quadril e da base, não apenas dos braços."
    },
    {
        id: 35,
        difficulty: "medium",
        category: "Base e Movimentação",
        question: "Qual é a importância da rotação do corpo em determinados golpes?",
        options: [
            "Amplia o alcance, maximiza a força cinética e protege as articulações",
            "Gera tontura controlada",
            "Dificulta a respiração para treinar o cardio",
            "Não tem relevância prática"
        ],
        correct: 0,
        explanation: "A rotação correta do tronco e dos pés canaliza a energia cinética de forma fluida para o alvo.",
        tip: "Girar o calcanhar ao chutar ou desferir cruzados faz toda a diferença."
    },

    // === GRADUAÇÃO ===
    {
        id: 36,
        difficulty: "easy",
        category: "Graduação",
        question: "Qual é a primeira graduação do sistema utilizado pela sua academia?",
        options: [
            "A primeira faixa/Kruang inicial definida pelo syllabus da academia",
            "A faixa preta avançada",
            "O grau máximo de mestre",
            "Não existe primeira graduação"
        ],
        correct: 0,
        explanation: "O sistema de graduação inicia-se no nível básico correspondente à primeira faixa ou prajied estabelecido pela escola.",
        tip: "Consulte o regulamento interno da sua equipa."
    },
    {
        id: 37,
        difficulty: "easy",
        category: "Graduação",
        question: "Qual é a cor da primeira graduação na sua academia?",
        options: [
            "A cor oficial inicial adotada pela confederação ou mestre responsável",
            "Sempre preto universalmente",
            "Transparente",
            "Vermelho brilhante"
        ],
        correct: 0,
        explanation: "As cores iniciais variam conforme a linhagem e federação de Muay Thai adotada pela academia.",
        tip: "Verifique o padrão da sua bandeira/equipa."
    },
    {
        id: 38,
        difficulty: "medium",
        category: "Graduação",
        question: "Qual é a sequência das graduações utilizadas pela sua academia?",
        options: [
            "A progressão de cores e níveis estabelecida no plano de ensino da academia",
            "Uma ordem aleatória escolhida a cada mês",
            "Do nível mais alto para o mais baixo",
            "Não há sequência lógica"
        ],
        correct: 0,
        explanation: "Cada organização possui uma ordem padronizada de prajieds/faixas para certificar a evolução técnica e teórica.",
        tip: "Siga o cronograma de exames da sua escola."
    },
    {
        id: 39,
        difficulty: "easy",
        category: "Graduação",
        question: "O que uma graduação representa para o aluno?",
        options: [
            "Reconhecimento de esforço, evolução técnica, disciplina e maturidade no desporto",
            "Apenas um enfeite para usar no braço",
            "Direito de faltar aos treinos",
            "O fim obrigatório dos estudos marciais"
        ],
        correct: 0,
        explanation: "A graduação simboliza a bagagem de conhecimento e dedicação acumulada pelo praticante.",
        tip: "Representa responsabilidade e respeito contínuo."
    },
    {
        id: 40,
        difficulty: "medium",
        category: "Graduação",
        question: "A cor e a quantidade de graduações são iguais em todas as academias e confederações?",
        options: [
            "Não, cada confederação ou linhagem possui o seu próprio sistema regulamentar",
            "Sim, são estritamente padronizadas a nível mundial",
            "Sim, todas usam exatamente as mesmas 5 cores",
            "Não existem regras em nenhuma academia"
        ],
        correct: 0,
        explanation: "Como o Muay Thai possui diferentes linhagens e associações, os sistemas de graduação variam bastante.",
        tip: "Importante: não existe uma sequência universal única de cores."
    },
    {
        id: 41,
        difficulty: "medium",
        category: "Graduação",
        question: "Quem avalia o aluno durante uma graduação?",
        options: [
            "O professor responsável (Kru/Ajarn) ou uma banca avaliadora qualificada",
            "Apenas os alunos iniciantes",
            "Qualquer pessoa na rua",
            "Um sistema automatizado online"
        ],
        correct: 0,
        explanation: "O exame de graduação é conduzido por mestres e professores com autoridade técnica para certificar o nível.",
        tip: "A avaliação mede rigor técnico, físico e teórico."
    },
    {
        id: 42,
        difficulty: "medium",
        category: "Graduação",
        question: "Quais aspectos podem ser avaliados em uma graduação?",
        options: [
            "Técnica, postura, condicionamento, disciplina, conhecimento teórico e comportamento",
            "Apenas a força bruta no saco de pancadas",
            "A quantidade de equipamentos comprados",
            "Apenas a velocidade de corrida"
        ],
        correct: 0,
        explanation: "A avaliação é holística, abrangendo tanto a execução prática dos movimentos quanto os valores morais.",
        tip: "O respeito e a disciplina contam tanto quanto a técnica."
    },
    {
        id: 43,
        difficulty: "easy",
        category: "Graduação",
        question: "Por que disciplina e comportamento podem ser importantes durante a graduação?",
        options: [
            "Porque o Muay Thai cultiva valores de respeito mútuo, honra e autocontrole",
            "Para manter o ambiente silencioso o dia todo",
            "Não têm qualquer importância",
            "Apenas para cumprir burocracia"
        ],
        correct: 0,
        explanation: "A filosofia marcial preza pela conduta exemplar do praticante dentro e fora do tatame.",
        tip: "Um bom artista marcial destaca-se pela sua postura ética."
    },
    {
        id: 44,
        difficulty: "medium",
        category: "Graduação",
        question: "Além da técnica, por que o conhecimento teórico pode ser cobrado?",
        options: [
            "Para garantir que o aluno compreende a origem, a cultura e os conceitos fundamentais do desporto",
            "Para tornar o exame mais difícil sem motivo",
            "Porque substitui o treino físico",
            "Apenas por formalidade escolar"
        ],
        correct: 0,
        explanation: "A teoria assegura que o praticante conhece a história, os nomes dos golpes e a cultura do Muay Thai.",
        tip: "Conhecer a teoria enriquece a prática."
    },
    {
        id: 45,
        difficulty: "medium",
        category: "Graduação",
        question: "O que significa estar preparado para uma graduação?",
        options: [
            "Dominar os requisitos técnicos, físicos e teóricos exigidos para o seu nível atual",
            "Ter comprado a nova faixa antecipadamente",
            "Apenas ter completado a idade mínima",
            "Faltar menos aos treinos na semana do teste"
        ],
        correct: 0,
        explanation: "A preparação envolve dedicação contínua e assimilação correta dos conteúdos do programa.",
        tip: "Aprovação é fruto de constância nos treinos."
    },

    // === EQUIPAMENTOS ===
    {
        id: 46,
        difficulty: "easy",
        category: "Equipamentos",
        question: "Para que servem as bandagens?",
        options: [
            "Para proteger os ossos e articulações das mãos e punhos contra lesões",
            "Para enfeitar os braços com cores bonitas",
            "Para limpar o suor do rosto",
            "Para dar mais força aos socos"
        ],
        correct: 0,
        explanation: "As bandagens imobilizam e dão suporte estrutural aos pequenos ossos da mão e punho.",
        tip: "Item indispensável de segurança antes de colocar as luvas."
    },
    {
        id: 47,
        difficulty: "easy",
        category: "Equipamentos",
        question: "Para que servem as luvas?",
        options: [
            "Para amortecer o impacto e proteger as mãos e o rosto dos parceiros de treino",
            "Para conseguir segurar melhor os oponentes",
            "Para aquecer as mãos no inverno",
            "Para desferir golpes mais cortantes"
        ],
        correct: 0,
        explanation: "As luvas de boxe protegem as mãos do golpeador e suavizam o impacto no rosto de quem recebe.",
        tip: "Essenciais para sparring e manoplas."
    },
    {
        id: 48,
        difficulty: "easy",
        category: "Equipamentos",
        question: "Para que serve o protetor bucal?",
        options: [
            "Para proteger os dentes, mandíbula e prevenir cortes nos lábios e língua",
            "Para ajudar a respirar com mais oxigénio",
            "Para evitar falar durante o combate",
            "Para mastigar chiclete no treino"
        ],
        correct: 0,
        explanation: "O protetor bucal absorve e dissipa impactos recebidos na mandíbula, prevenindo lesões dentárias graves.",
        tip: "Nunca treine sparring sem protetor bucal."
    },
    {
        id: 49,
        difficulty: "easy",
        category: "Equipamentos",
        question: "Para que servem as caneleiras durante o treinamento?",
        options: [
            "Para proteger a tíbia e o peito do pé contra impactos fortes durante os bloqueios e sparrings",
            "Para correr mais rápido no aquecimento",
            "Para aumentar o peso das pernas",
            "Para fins puramente estéticos"
        ],
        correct: 0,
        explanation: "As caneleiras evitam fissuras ósseas e contusões musculares severas em treinos de choque.",
        tip: "Protege tanto quem chuta quanto quem bloqueia."
    },
    {
        id: 50,
        difficulty: "medium",
        category: "Equipamentos",
        question: "O que é o Mongkhon?",
        options: [
            "Um cordão sagrado tradicional colocado na cabeça antes da luta em sinal de respeito e proteção",
            "Um tipo de calção de combate",
            "Uma luva especial de competição",
            "O troféu entregue ao vencedor"
        ],
        correct: 0,
        explanation: "O Mongkhon é abençoado e usado durante o ritual de entrada no ringue (Wai Kru Ram Muay).",
        tip: "Símbolo tradicional da cultura tailandesa e respeito ao mestre."
    },
    {
        id: 51,
        difficulty: "medium",
        category: "Equipamentos",
        question: "O que é o Prajied?",
        options: [
            "Um cordão amarrado no braço usado como amuleto de proteção e símbolo de graduação",
            "Uma faixa usada na cintura",
            "Um protetor de virilha",
            "Um instrumento musical tradicional"
        ],
        correct: 0,
        explanation: "O Prajied é colocado no braço do lutador, muitas vezes carregando significado espiritual ou de escola.",
        tip: "Acompanha o atleta nos rituais e combates."
    },
    {
        id: 52,
        difficulty: "easy",
        category: "Equipamentos",
        question: "Por que devemos cuidar dos equipamentos de treino?",
        options: [
            "Para garantir a durabilidade, higiene, evitar proliferação de bactérias e manter a segurança",
            "Apenas para mantê-los arrumados na gaveta",
            "Porque o professor obriga sem razão",
            "Não é necessário limpar após o uso"
        ],
        correct: 0,
        explanation: "Equipamentos limpos e secos evitam odores desagradáveis, fungos e garantem proteção adequada.",
        tip: "Higienize luvas e caneleiras regularmente."
    }
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