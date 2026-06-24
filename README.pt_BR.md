<!-- l10n-sync: source-file="README.md" -->
🌐 [English](README.md) | [Español](README.es.md)

# 🎮 Mona Mayhem

> **Construa uma Arena de Batalha de Contribuições GitHub** — workshop de VS Code e GitHub Copilot CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-v6-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)

Dois desenvolvedores entram. Apenas um sai vitorioso. **Mona Mayhem** é um app com tema de arcade retrô que transforma os gráficos de contribuições do GitHub em uma batalha épica cara a cara — e construí-lo é o workshop.

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*O que você vai construir ao final do workshop*

## ✨ O Que Você vai Aprender

| # | Habilidade | Descrição |
|---|------------|-----------|
| 1 | **Engenharia de Contexto** | Ensine o Copilot sobre seu código com instruções e restrições claras |
| 2 | **Planeje Primeiro** | Projete a arquitetura antes de escrever uma única linha de código |
| 3 | **Implementação Agêntica** | Deixe o Copilot realizar trabalho de codificação em múltiplas etapas |
| 4 | **Design Iterativo** | Use o Copilot para transformar visuais e refinar detalhes de interação |
| 5 | **Fluxos de Trabalho Paralelos** | Divida o trabalho entre agentes, sessões ou tarefas delegadas |

## 🎯 Escolha Sua Trilha

O workshop suporta duas trilhas — siga a que se encaixa no seu fluxo de trabalho:

| Trilha | Ferramentas | Ideal Para |
|--------|-------------|------------|
| **VS Code** | Chat, Plan Mode, Agent Mode, background agents, review loops | Desenvolvedores orientados ao editor |
| **CLI** | `copilot`, `@file`, `/plan`, `/fleet`, `/delegate`, `/review` | Desenvolvedores orientados ao terminal |

## 📚 Workshop

| Parte | Título | Foco no Copilot |
|-------|--------|-----------------|
| [00](workshop/pt_BR/00-overview.md) | Visão Geral | Seleção de trilha e objetivos |
| [01](workshop/pt_BR/01-setup.md) | Configuração & Engenharia de Contexto | Instruções de workspace, background agents |
| [02](workshop/pt_BR/02-plan-and-scaffold.md) | Planejar & Estruturar | Plan Mode |
| [03](workshop/pt_BR/03-agent-mode.md) | Construir o Jogo | Agent Mode |
| [04](workshop/pt_BR/04-design-vibes.md) | Temas Design-First | Plan + Agent Mode |
| [05](workshop/pt_BR/05-polish.md) | Polimento & Multi-Agent | Background & cloud agents |
| [06](workshop/pt_BR/06-bonus.md) | Bônus & Extensões | Desafios abertos |

## 🚀 Início Rápido

1. **Crie seu próprio repositório** por:
   - clicando em **Use this template** para criar um novo repositório, ou
   - fazendo um fork deste repositório.
2. Escolha sua trilha de workshop:
   - **VS Code:** clone seu repositório e abra no VS Code.
   - **GitHub Copilot CLI:** clone seu repositório localmente, instale o `copilot`, e trabalhe pelo terminal.
3. Siga o [guia do workshop](workshop/pt_BR/00-overview.md)

## Pré-requisitos

### Compartilhados

- GitHub Copilot (Pro, Business ou Enterprise)
- Git
- Node.js

### Trilha VS Code

- VS Code v1.107+
- Extensão do GitHub Copilot com sessão iniciada

### Trilha CLI

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ se planeja instalar via `npm install -g @github/copilot`
- Ou Homebrew / WinGet se preferir um gerenciador de pacotes nativo

## Stack Tecnológica

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js com adaptador [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Fonte**: Press Start 2P (fonte de jogos retrô)
- **API**: API de gráfico de contribuições do GitHub

## Licença

MIT
