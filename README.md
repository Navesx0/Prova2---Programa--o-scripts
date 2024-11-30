
# Store Dashboard

Este é um painel de controle para gerenciar uma loja online, onde é possível visualizar produtos, categorias, adicionar ao carrinho e realizar outras funcionalidades típicas de um e-commerce. O painel é construído com Vue.js e utiliza a Fake Store API para simular dados de produtos, categorias e usuários.

## Funcionalidades

- **Visualização de Produtos**: Exibe uma lista de produtos com a capacidade de buscar por nome, filtrar por categoria e ordenar por preço ou avaliação.
- **Carrinho de Compras**: Adiciona produtos ao carrinho e simula a ação de compra.
- **Gerenciamento de Categorias**: Filtra produtos por categoria.
- **Responsividade**: O layout é totalmente responsivo, exibindo 4 produtos por linha em telas médias e maiores, ajustando automaticamente para 1 ou 2 produtos em telas menores.
- **Modo Escuro**: Permite alternar entre o modo claro e escuro para melhorar a experiência de uso.

## Tecnologias Usadas

- **Vue.js**: Framework JavaScript para construção da interface.
- **Vuex**: Gerenciamento de estado da aplicação.
- **Bootstrap**: Framework CSS para construção do layout responsivo.
- **FontAwesome**: Para os ícones.
- **Fake Store API**: API fictícia utilizada para fornecer dados de produtos e categorias.

## Instalação e Execução

### Requisitos

- Node.js (versão 14 ou superior)
- NPM (ou Yarn)

### Passos para rodar o projeto

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/store-dashboard.git
   cd store-dashboard
   ```

2. **Instalar as dependências:**

   Se estiver utilizando o NPM:

   ```bash
   npm install
   ```

   Ou se estiver utilizando o Yarn:

   ```bash
   yarn install
   ```

3. **Iniciar o servidor de desenvolvimento:**

   Com NPM:

   ```bash
   npm run serve
   ```

   Ou com Yarn:

   ```bash
   yarn serve
   ```

4. **Acessar o painel:**
   Abra seu navegador e acesse [http://localhost:8080](http://localhost:8080).

## Estrutura de Componentes

### 1. **App.vue**
   - Componente principal onde é configurado o layout geral, incluindo a barra de navegação e o roteamento entre as páginas do painel.

### 2. **Products.vue**
   - Exibe a lista de produtos com filtros por categoria, busca e ordenação por preço ou avaliação. Também permite adicionar itens ao carrinho, visualizar ou excluir produtos.

### 3. **Overview.vue**
   - Página de visão geral que mostra o número total de produtos, categorias e usuários, com ícones ilustrativos e a opção de ativar o modo escuro.

### 4. **Store.vue** (Se aplicável)
   - Gerencia o carrinho de compras e a adição de produtos. Neste arquivo, a lógica de adicionar produtos ao carrinho é gerenciada por Vuex.

### 5. **Vuex Store**
   - **state**: Armazena as informações dos produtos, categorias, e carrinho.
   - **mutations**: Define funções que alteram o estado da aplicação, como adicionar produtos ao carrinho ou excluir produtos.
   - **actions**: Chama mutações e permite a execução de operações assíncronas, como buscar dados de APIs.

### 6. **Modo Escuro**
   - Através de um botão na barra de navegação, é possível alternar entre o modo claro e escuro, proporcionando uma experiência visual aprimorada.

## Como Contribuir

1. **Fork o repositório** e crie uma nova branch para suas mudanças.
2. Faça suas modificações e adicione testes se necessário.
3. Realize um pull request com a descrição das alterações feitas.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
