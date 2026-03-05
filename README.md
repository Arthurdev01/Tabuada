# Tabuada

Um gerador simples e interativo de tabuadas (tabelas de multiplicação) desenvolvido em HTML, CSS e JavaScript.

## 📋 Descrição

Este projeto cria uma aplicação web que permite ao usuário inserir um número e gera automaticamente sua tabuada de multiplicação (de 1 a 10).

## ✨ Funcionalidades

- ✅ Interface limpa e responsiva
- ✅ Entrada de números inteiros
- ✅ Geração automática da tabuada de 1 a 10
- ✅ Exibição dos resultados em uma lista organizada
- ✅ Design moderno com tema em roxo/azul
- ✅ Efeitos de hover nos botões

## 🚀 Como Usar

1. Abra o arquivo `modelo.html` em um navegador web
2. Digite um número no campo de entrada
3. Clique no botão "Gerar Tabuada"
4. Os resultados serão exibidos na caixa de seleção abaixo

Exemplo:
```
Número inserido: 5
Resultado:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
... até 5 x 10 = 50
```

## 📁 Estrutura do Projeto

```
Tabuada/
├── modelo.html      # Arquivo HTML principal
├── script.js        # Lógica JavaScript
├── style.css        # Estilos CSS
└── README.md        # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e design responsivo
- **JavaScript** - Lógica de geração da tabuada

## 📝 Detalhes Técnicos

### JavaScript (`script.js`)
A função `tabuada()` realiza as seguintes operações:
- Captura o valor inserido pelo usuário
- Valida e converte para número
- Gera elementos `<option>` dinamicamente
- Calcula e exibe os resultados (número × 1 até número × 10)
- Centraliza o texto na exibição

### CSS (`style.css`)
- Paleta de cores: roxo/azul (rgb(116, 116, 214))
- Layout flexbox para estrutura responsiva
- Efeitos visuais de sombra e transição nos botões
- Design mobile-friendly

## 👨‍💻 Autor

CursoEmVideo

## 📄 Licença

Este projeto é fornecido como fim educacional.

---

**Desenvolvido como projeto de aprendizado em JavaScript puro.**
