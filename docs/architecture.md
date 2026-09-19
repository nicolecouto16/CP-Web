Arquitetura da Aplicação:

A aplicação será desenvolvida em React, utilizando componentes para organizar e reutilizar as partes da interface.

Páginas e rotas:

Home (/): página inicial com destaque para filmes e séries.
Busca (/busca): página para pesquisar filmes e séries.
Filme (/filme/:id): página com os detalhes de um filme selecionado.
Série (/serie/:id): página com os detalhes de uma série selecionada.
*Minha Lista (/minha-lista): página com os títulos adicionados pelo usuário.

Componentes:

Header: responsável pela navegação entre as páginas.
Footer: apresenta informações complementares da aplicação.
SearchBar: campo utilizado para pesquisar filmes e séries.
MovieCard: apresenta os resultados de filmes e séries em formato de card.
MainLayout: organiza a estrutura principal das páginas.

Props:

Os componentes receberão dados através de props quando necessário. Por exemplo, o MovieCard poderá receber informações como título, imagem e identificador do filme para apresentar os dados na tela.

Estados do React

Serão utilizados estados com useState para controlar:

searchTerm - Texto pesquisado.
results - Resultados da API.
loading - Indica carregamento.
error - Controla erros.
myList - Títulos salvos.
watched - Títulos assistidos.
showSpoiler - Controla informação protegida

Efeitos:

O useEffect será utilizado principalmente para realizar as buscas na API e atualizar os dados apresentados na aplicação quando necessário.

API:

A aplicação utilizará a TMDB API para buscar informações sobre filmes e séries, como títulos, imagens e detalhes dos conteúdos.



Referências Visuais:

Para definir a aparência do AntesSpoiler, foram analisadas referências de plataformas digitais que trabalham com conteúdos de entretenimento, organização e descoberta de informações.

Netflix
Foi utilizada como referência para a organização visual dos conteúdos em cards e para a forma de apresentar filmes e séries de maneira mais visual.

Spotify
Foi utilizada como referência para a navegação e organização dos conteúdos, buscando uma interface simples e fácil de utilizar.

Letterboxd
Foi utilizada como referência para a apresentação de informações sobre filmes e para a organização dos conteúdos acompanhados pelo usuário.

As referências serão utilizadas apenas como inspiração para alguns elementos da interface. O AntesSpoiler terá uma identidade visual própria, adaptada à proposta de proteção contra spoilers.