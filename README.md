<div align="center">

# 💻 Aplicação Desenvolvida na Formação Fullstack da Rocketseat

</div>

---

## 🔖 Navegação

[**Tecnologias**](#-tecnologias) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[**Projeto**](#-projeto) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[**Licença**](#memo-licença)

---

<div align="center">

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=1F8459&labelColor=00292E)

</div>

<br>

<div align="center">

![image](https://github.com/user-attachments/assets/9a275f00-f163-423d-9641-c3ff16d4242a)


</div>

---

## 🚀 Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

| Tecnologia | Descrição |
|----------|-----------|
| **HTML** | Estruturação do conteúdo |
| **CSS**  | Estilização responsiva |
| **JavaScript** | Funcionalidades interativas |

---

## 📌 Projeto

Este é um site responsivo de **cartão fidelidade digital** criado para um clube de membros. A aplicação permite:

- Registro de cortes de cabelo realizados
- Visualização do histórico de serviços
- Interface otimizada para dispositivos móveis
- Design moderno e intuitivo

---

## 📄 Licença

O projeto está sob a licença [MIT License](https://opensource.org/licenses/MIT).

---

Claro! Aqui está uma explicação em formato **Markdown** de como executar o projeto com base no seu `package.json` e na estrutura do projeto:

---

# 🧑‍💻 Como Executar o Projeto

Este é um projeto desenvolvido durante a **Formação Fullstack da Rocketseat**, utilizando tecnologias como HTML, CSS, JavaScript e JSON Server para simular uma API fake. Abaixo estão os passos detalhados para rodar o projeto localmente.

---

## 🔧 Requisitos Prévios

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS ou superior)
- npm (gerenciador de pacotes do Node.js)

> Você pode verificar se já tem essas ferramentas instaladas usando:
```bash
node -v
npm -v
```

---

## 📦 1. Clonar o Repositório (opcional)

Se você ainda não clonou o repositório:

```bash
git clone https://github.com/andmartins/member-club.git
cd member-club
```

---

## 📦 2. Instalar as Dependências

Rode o comando abaixo para instalar todas as dependências necessárias:

```bash
npm install
```

---

## ▶️ 3. Executar o Projeto

O projeto roda com o **Webpack Dev Server** para o front-end e o **JSON Server** para simular uma API local.

### ✅ Passo 1: Iniciar o servidor Webpack (front-end)

Em um terminal, execute:

```bash
npm run dev
```

Esse comando irá iniciar o servidor de desenvolvimento na porta padrão `http://localhost:3000`.

### ✅ Passo 2: Iniciar o JSON Server (back-end fake)

Em outro terminal, execute:

```bash
npm run server
```

Isso iniciará o servidor fake na porta `http://localhost:3333`, servindo os dados definidos no arquivo `db.json`.

> Certifique-se de que nenhuma outra aplicação esteja ocupando a porta 3333.

---

## 🗂️ Estrutura de Pastas Importantes

```
.
├── src/
│   ├── assets/         # Imagens, ícones e estilos
│   ├── index.html      # Página principal
│   └── main.js         # Arquivo JS principal
├── db.json             # Banco de dados fake usado pelo json-server
├── package.json        # Configurações do projeto e scripts
└── webpack.config.js   # Configuração do Webpack
```

---

## 🚀 Scripts Disponíveis

| Script     | Descrição                                      |
|-----------|------------------------------------------------|
| `npm run dev`    | Roda o projeto com o Webpack Dev Server       |
| `npm run build`  | Gera a versão de produção na pasta `dist/`   |
| `npm run server` | Inicia o servidor JSON Server                 |

---

## 🛠️ Problemas Comuns

### ❌ Porta 3333 já em uso

Se aparecer o erro `EADDRINUSE` ao rodar `npm run server`, use:

```bash
npx kill-port 3333
```

Ou identifique e encerre o processo manualmente.

### 🖼️ Imagens não carregam

Certifique-se de que:
- O caminho das imagens no HTML está correto (`src="assets/icons/Logo.png"`)
- A configuração do `CopyWebpackPlugin` está copiando corretamente a pasta `assets` para `dist/assets`

---

## 📁 Build de Produção

Para gerar a versão final do projeto:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [`LICENSE`](LICENSE) para mais informações.

---

## 🤝 Contato

Anderson Martins  
GitHub: [@andmartins](https://github.com/andmartins)

--- 

💡 Pronto! Agora você tem tudo configurado para desenvolver, testar e até hospedar seu projeto.