<!-- l10n-sync: source-file="README.md" -->
🌐 [English](README.md) | [Português (Brasil)](README.pt_BR.md)

# 🎮 Mona Mayhem

> **Construye una Arena de Batalla de Contribuciones GitHub** — taller de VS Code y GitHub Copilot CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-v6-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)

Dos desarrolladores entran. Solo uno sale victorioso. **Mona Mayhem** es una app con temática de arcade retro que convierte los gráficos de contribuciones de GitHub en una épica batalla cara a cara — y construirla es el taller.

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*Lo que construirás al final del taller*

## ✨ Lo Que Aprenderás

| # | Habilidad | Descripción |
|---|-----------|-------------|
| 1 | **Ingeniería de Contexto** | Enseña a Copilot sobre tu código con instrucciones y restricciones claras |
| 2 | **Planifica Primero** | Diseña la arquitectura antes de escribir una sola línea de código |
| 3 | **Implementación Agéntica** | Deja que Copilot realice trabajo de codificación en múltiples pasos |
| 4 | **Diseño Iterativo** | Usa Copilot para transformar visuales y refinar detalles de interacción |
| 5 | **Flujos de Trabajo Paralelos** | Divide el trabajo entre agentes, sesiones o tareas delegadas |

## 🎯 Elige Tu Track

El taller admite dos tracks — sigue el que se adapte a tu flujo de trabajo:

| Track | Herramientas | Ideal Para |
|-------|--------------|------------|
| **VS Code** | Chat, Plan Mode, Agent Mode, background agents, review loops | Desarrolladores orientados al editor |
| **CLI** | `copilot`, `@file`, `/plan`, `/fleet`, `/delegate`, `/review` | Desarrolladores orientados a la terminal |

## 📚 Taller

| Parte | Título | Foco en Copilot |
|-------|--------|-----------------|
| [00](workshop/es/00-overview.md) | Visión General | Selección de track y objetivos |
| [01](workshop/es/01-setup.md) | Configuración e Ingeniería de Contexto | Instrucciones, permisos y entorno |
| [02](workshop/es/02-plan-and-scaffold.md) | Planificar y Estructurar | Plan Mode |
| [03](workshop/es/03-agent-mode.md) | Construir el Juego | Agent Mode |
| [04](workshop/es/04-design-vibes.md) | Temas Design-First | Plan + Agent Mode |
| [05](workshop/es/05-polish.md) | Pulido & Multi-Agent | Background & cloud agents |
| [06](workshop/es/06-bonus.md) | Bonus y Extensiones | Desafíos abiertos |

## 🚀 Inicio Rápido

1. **Crea tu propio repositorio** ya sea:
   - haciendo clic en **Use this template** para crear un nuevo repositorio, o
   - haciendo un fork de este repositorio.
2. Elige tu camino de taller:
   - **VS Code:** clona tu repositorio y ábrelo en VS Code.
   - **GitHub Copilot CLI:** clona tu repositorio localmente, instala `copilot`, y trabaja desde tu terminal.
3. Sigue la [guía del taller](workshop/es/00-overview.md)

## Requisitos Previos

### Compartidos

- GitHub Copilot (Pro, Business o Enterprise)
- Git
- Node.js

### Track VS Code

- VS Code v1.107+
- Extensión de GitHub Copilot con sesión iniciada

### Track CLI

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ si planeas instalarlo via `npm install -g @github/copilot`
- O Homebrew / WinGet si prefieres un gestor de paquetes nativo

## Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js con adaptador [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Fuente**: Press Start 2P (fuente de juegos retro)
- **API**: API de gráfico de contribuciones de GitHub

## Licencia

MIT
