# Marvel Heroes

[![Netlify Status](https://api.netlify.com/api/v1/badges/bd617c20-09ef-4789-b935-96e65b28a46a/deploy-status)](https://app.netlify.com/sites/do-vale-marvel-heroes/deploys)

## Como executar

Como foi utilizado os recursos de monorepo do Yarn v1, caso haja a necessidade de rodar o projeto localmente, recomendo as seguintes versões (versões quais desenvolvi o projeto por inteiro):

```json
"node": "12.16.1"
"yarn": "1.19.1"
```

Para instalar as dependências, na raiz:

```
yarn
```

Antes de executar a aplicação web, é necessário configurar as variáveis de ambiente no arquivo `applications/web/.env.development.local` (ou diretamente nas variáveis globais de sua máquina), com a seguinte estrutura:

```
REACT_APP_MARVEL = http://gateway.marvel.com/
REACT_APP_MARVEL_PUBLIC = ${publicKey}
REACT_APP_MARVEL_PRIVATE = ${privateKey}
```

Para executar a aplicação web, na raiz:

```
yarn web start
```

Ou, na pasta `applications/web`:

```
yarn start
```

Para executar o StoryBook onde foi desenvolvido os componentes visuais, na raiz:

```
yarn ds storybook
```

Ou, na pasta `shared/design-system`:

```
yarn storybook
```

## Testes

Para rodar todos os testes, na raiz:

```
yarn test
```

Ou, individualmente:

```
yarn web test
yarn ds test
yarn utils test
```

Também tendo a opção de executar localmente pelas pastas `applications/web`, `shared/design-system` ou `shared/utils`:

```
yarn test
```

<hr>

## Requisitos

-   [x] Deve ser uma SPA “single page application” (dar preferencia ao React);
-   [x] Não utilizar bibliotecas de UI como: bootstrap, semantic-ui, antdesign e etc;
-   [x] Utilizar API da Marvel (https://developer.marvel.com/docs);
-   [x] Disponibilizar em uma URL pública do projeto rodando para avaliação;
-   [x] Disponibilizar código em repositório Git de sua preferência, commitando cada fase do seu processo de desenvolvimento;
-   [x] Seguir layout da pasta `./assets`, respeitando as páginas, features e componentes (não será avaliado “pixel perfect”).

## Requisitos funcionais

##### Página de listagem de personagens (home):

-   [x] Exibir os 20 primeiros resultados da API;
-   [x] Permitir ordenação por nome do personagem;
-   [x] Permitir filtrar por nome, pelo campo de busca;
-   [x] Permitir mostrar apenas os personagens favoritos;
-   [x] Permitir o usuário favoritar/desfavoritar até 5 personagens;

##### Página de detalhe do personagem:

-   [x] Exibir dados do personagem;
-   [x] Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate);
-   [x] Permitir o usuário favoritar/desfavoritar (dentro do limite de 5).

## Bônus

-   [ ] Adicionar paginação a listagem para exibir além dos 20 personagens iniciais;
-   [x] Persistir os dados de favoritos (para manter os dados após o reload da página);
-   [ ] Layout responsivo;
-   [x] Utilização de ES6+;
-   [x] Utilização de ferramentas para garantir a qualidade do código;
-   [ ] Teste e2e;
-   [x] CI/CD.
