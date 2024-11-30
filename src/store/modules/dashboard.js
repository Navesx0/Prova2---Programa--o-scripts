// store/modules/dashboard.js
export default {
    state: {
      products: [],
      categories: [],
    },
    mutations: {
      SET_PRODUCTS(state, products) {
        state.products = products;
      },
      SET_CATEGORIES(state, categories) {
        state.categories = categories;
      },
    },
    actions: {
      fetchProducts({ commit }) {
        // Substitua com a lógica de fetch real
        commit('SET_PRODUCTS', mockProducts); // mockProducts deve ser a lista de produtos
      },
      fetchCategories({ commit }) {
        // Substitua com a lógica de fetch real
        commit('SET_CATEGORIES', mockCategories); // mockCategories deve ser a lista de categorias
      },
    },
    getters: {
      allProducts: (state) => state.products,
      allCategories: (state) => state.categories,
    },
  };
  