# Detona Ralph - Jogo Web

Um jogo divertido e interativo inspirado no filme "Detona Ralph" da Disney! Teste seus reflexos e pontaria tentando acertar o Ralph que aparece aleatoriamente nas janelas.

![Game Preview](https://img.shields.io/badge/Status-Concluído-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Como Jogar

### Objetivo
Clique no **Ralph** (quadrado vermelho) quando ele aparecer nas janelas para ganhar pontos! Mas cuidado - se você clicar no lugar errado, perderá uma vida.

### Regras
-  **Tempo**: 60 segundos para fazer a maior pontuação possível
-  **Vidas**: Você começa com 3 vidas
-  **Pontuação**: +1 ponto para cada acerto no Ralph
-  **Penalidade**: -1 vida para cada clique errado
-  **Movimento**: O Ralph aparece aleatoriamente a cada segundo

### Game Over
O jogo termina quando:
-  O tempo acaba (60 segundos)
-  Suas vidas chegam a zero

**Após o Game Over, o jogo reinicia automaticamente!**

##  Funcionalidades

-  **Interface Retrô**: Design inspirado nos jogos clássicos
-  **Efeitos Sonoros**: Som de acerto ao clicar no Ralph
-  **Responsivo**: Funciona em diferentes tamanhos de tela
-  **Auto-Reset**: Reinício automático após cada partida
-  **Dinâmico**: Ralph aparece aleatoriamente nas 9 posições

##  Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura da página e elementos do jogo |
| **CSS3** | Estilização e layout responsivo |
| **JavaScript** | Lógica do jogo e interatividade |
| **Google Fonts** | Fonte "Press Start 2P" para visual retrô |

## Estrutura do Projeto

```
detona-ralph/
│
├── index.html              # Página principal
├── src/
│   ├── images/             # Imagens do jogo
│   │   └── player.png      # Ícone do jogador
│   ├── scripts/
│   │   └── engine.js       # Lógica principal do jogo
│   ├── sounds/
│   │   └── hit.m4a         # Som de acerto
│   └── styles/
│       ├── main.css        # Estilos principais
│       └── reset.css       # Reset de CSS
└── README.md               # Este arquivo
```

## Características Técnicas

### JavaScript Features
- **Estado Global**: Gerenciamento centralizado do estado do jogo
- **Event Listeners**: Detecta cliques nos quadrados
- **Timers**: Controla movimento do inimigo e countdown
- **Audio API**: Reproduz efeitos sonoros
- **DOM Manipulation**: Atualiza interface em tempo real

### CSS Features
- **Flexbox Layout**: Layout responsivo e centrado
- **Custom Properties**: Fácil manutenção de cores e espaçamentos
- **Google Fonts**: Tipografia temática de jogos retrô
- **Hover Effects**: Feedback visual para interação

## Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/juliaverso/detona-ralph.git
   ```

2. **Navegue até o diretório**
   ```bash
   cd detona-ralph
   ```

3. **Abra o arquivo index.html**
   - Duplo clique no arquivo `index.html`
   - Ou abra com seu navegador preferido
   - Ou use um servidor local como Live Server (VS Code)
