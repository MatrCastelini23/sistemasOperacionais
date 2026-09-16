# Projeto sobre Sistemas Operacionais
## Link do app em produção: 
> https://sistemas-operacionais-jet.vercel.app/
## Contexto: 
Este repositório tem como finalidade trabalhar os hooks do React-Router-Dom para navegação dentro de um SPA. O tema é livre, então, escolhi fazer um pequeno estudo sobre os Sistemas Operacionais Windows, Linux e Mac, suas diferenças e um parte da história junto com alguns detalhes de particulares sobre cada um. <br> A página home possui uma pequena apresentação e um card para prós e contras.

## Objetivo:
O objetivo do trabalho era utilizar o roteamento de páginas do React-Router-Dom com boas práticas. Listo alguns abaixo:

- Um arquivo exclusivo para rotas.
- Uma página 404 para rotas não criadas.
- Para a página de portifolio que recebe um parametro deixei uma pequena regra no state caso não venha nenhum e entregue a pagina com os detalhes do Linux.

## Tecnologias:
Para o sistemas eu utilizei as tecnologias: 

- React + Vite
- TailwindCSS
- React-Router-Dom
- Lucide React

Toda a estilização do site foi criado com Tailwind utilizando as classes (className) direto nas tags HTML. <br> Para os icones utilizar o lucide-React e o estilizei com classes do TailWindCSS também. <br> O React mais o React-Router-Dom faz todo o trabalho de SLA (Single Page Application) assim todo o site é carregado em uma unica requisição no navegador.

### Páginas:

- Home: 
    - Na home tenho uma pequena saudação e uma demonstração dos prós e contras de cada OS.
- Contato:
    - Na aba de contatos tenho meus contatos pessoais que são públicos.
- Portifolio:
    - No portifólio tenho a pesquisa separada por OS.
- Quem Sou eu:
    - Nessa página tem algumas informações sobre eu e meus estudos
- NoRoute:
    - É uma página criada para personalizar o erro 404 caso seja chamada uma rota que não existe. 

## Outras observações:

Utilizei o useContext para fazer o tema Claro/Escuro. E salvei no localStorage o estado (key: theme; value: light/dark) para que ao recarregar a pagina ou ao retornar ao site um tempo depois o tema continue salvo na navegador.


## Tecnologias:
Para o sistemas eu utilizei as tecnologias: 

- React + Vite
- TailwindCSS
- React-Router-Dom
- Lucide React

Toda a estilização do site foi criado com Tailwind utilizando as classes (className) direto nas tags HTML. <br> 
    
## Estrutura:
    sistemasOperacionais
        ├── public
        │  ├── Logo.png
        │  └── icon.png
        ├── src
           ├── assets
           │  ├── hero.png
           │  ├── react.svg
           │  └── vite.svg
           ├── components
           │  ├── CardOs
           │  │  └── index.tsx
           │  ├── Footer
           │  │  └── index.tsx
           │  └── Header
           │     └── index.tsx
           ├── context
           │  └── themeContext.tsx
           ├── data
           │  ├── dataOS.ts
           │  ├── dataOsDetails.ts
           ├── hooks
           │  └── useLocalStorage.ts
           ├── pages
           │  ├── Contato
           │  │  └── index.tsx
           │  ├── Home
           │  │  └── index.tsx
           │  ├── NoRoute
           │  │  └── index.tsx
           │  ├── Portifolio
           │  │  └── index.tsx
           │  └── QuemSouEu
           │     └── index.tsx
           ├── App.tsx
           ├── index.css
           ├── main.tsx
           └── routes.tsx

