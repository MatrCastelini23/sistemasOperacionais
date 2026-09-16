# Projeto sobre Sistemas Operacionais

## Contexto: 
Este repositório tem como finalidade trabalhar os hooks do React-Router-Dom para navegação dentro de um SPA. O tema é livre, então, escolhi fazer um pequeno estudo sobre os Sistemas Operacionais Windows, Linux e Mac. <br> A página home possui uma pequena apresentação e um card para prós e contras. <br> A pagina portifólio possui as informações e fontes da pesquisa de cada OS. <br> Em Quem Sou Eu temos uma pequena apresentação minha e na página de Contatos, alguns contatos meus.

## Objetivo:
O objetivo do trabalho era utilizar o roteamento de páginas do React-Router-Dom com boas práticas. Listo alguns abaixo:

- Um arquivo exclusivo para rotas.
- Uma página 404 para rotas não criadas.
- Para a página de portifolio que recebe um parametro deixei uma pequena regra no state caso não venha nenhum e entregue a pagina com os detalhes do Linux.

## Tecnologias:
Para o funcionamento do projeto como SPA utilizei: 
- Hook useNavigate do React-Router-Dom
- Hook useState do próprio React

Para estilização do projeto utilizei:
- TailwindCss para estilização geral
- Lucide-React para icones da página

## Idéias:
Pretendo hospedar esse site na Vercel para fins de portifólio e também trabalhar alguns outros hooks do React para otimização do site como por exemplo o useContext provavelmente para deixar disponivel a opção de tema Claro/Escuro.