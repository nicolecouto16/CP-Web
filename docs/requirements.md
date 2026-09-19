Requirements — AntesSpoiler

1. Objetivo

O AntesSpoiler é uma plataforma web criada para ajudar usuários a pesquisar e acompanhar filmes e séries, reduzindo a chance de encontrar spoilers durante a busca por informações.

2. Público

Pessoas que assistem a filmes e séries e querem pesquisar informações sobre os conteúdos sem descobrir acontecimentos importantes da história antes da hora.

3. Problema

Ao pesquisar sobre filmes e séries, o usuário pode acabar encontrando comentários, avaliações ou informações que revelam partes importantes da história, mesmo sem querer.

4. Solução

O AntesSpoiler reúne informações sobre filmes e séries em um só lugar e permite proteger conteúdos que podem revelar partes da história. Essas informações ficam ocultas inicialmente e só aparecem quando o usuário decidir visualizá-las.



User Stories:

US01 — Pesquisa

Como usuário, quero pesquisar filmes e séries para encontrar conteúdos de meu interesse.

US02 — Detalhes

Como usuário, quero visualizar informações de um filme ou série para conhecer melhor o conteúdo.

US03 — Proteção contra spoilers

Como usuário, quero que informações potencialmente reveladoras fiquem ocultas para evitar spoilers.

US04 — Marcar como assistido

Como usuário, quero marcar um filme ou série como assistido para controlar o que já acompanhei.

US05 — Minha Lista

Como usuário, quero visualizar minha lista de conteúdos para organizar os filmes e séries que quero acompanhar ou já assisti.


Critérios de Aceitação:

US01 — Pesquisar conteúdo

Dado que o usuário está na página de busca,
quando ele digitar o nome de um filme ou série e realizar a pesquisa,
então o sistema deve apresentar os resultados retornados pela API.

US02 — Visualizar detalhes

Dado que o usuário encontrou um título,
quando clicar no card,
então deve ser direcionado para a página de detalhes correspondente.

US03 — Evitar spoilers

Dado que uma informação está protegida,
quando o usuário acessar a página,
então o conteúdo deverá permanecer oculto.

Quando o usuário clicar em “Mostrar conteúdo”,
então a informação deverá ser revelada.

US04 — Marcar como assistido

Dado que o usuário está visualizando um título,
quando clicar em “Marcar como assistido”,
então o sistema deverá atualizar o estado do título.

US05 — Minha Lista

Dado que o usuário está visualizando um título,
quando clicar em “Adicionar à lista”,
então o título deverá aparecer em “Minha Lista”.

Estados da Aplicação:

*Carregando*: enquanto a aplicação estiver buscando informações na API, será exibida uma indicação de carregamento.
*Resultados encontrados*: após uma pesquisa, os filmes e séries encontrados serão apresentados em cards.
*Nenhum resultado*: caso a pesquisa não encontre nenhum título, será exibida uma mensagem informando que nenhum conteúdo foi encontrado.
*Erro*: caso ocorra algum problema durante o consumo da API, será exibida uma mensagem informando que não foi possível carregar os dados.
*Minha Lista vazia*: quando o usuário ainda não tiver nenhum título salvo, será exibida uma mensagem orientando-o a adicionar filmes ou séries.
*Informação protegida*: informações que possam conter spoilers ficarão ocultas inicialmente, permitindo que o usuário escolha se deseja visualizá-las.
*Informação revelada*: após o usuário solicitar a visualização, a informação protegida será exibida.

Regras do Produto:

1. O usuário deve conseguir pesquisar filmes e séries.
2. Os resultados das pesquisas devem ser obtidos através da API escolhida.
3. Cada resultado deve permitir o acesso à página de detalhes do título.
4. Informações definidas como protegidas não devem aparecer imediatamente.
5. O usuário deve poder revelar uma informação protegida através de uma interação.
6. O usuário deve poder adicionar títulos à “Minha Lista”.
7. O usuário deve poder remover títulos da “Minha Lista”.
8. O usuário deve poder marcar títulos como assistidos.
9. A interface deve funcionar em diferentes tamanhos de tela.