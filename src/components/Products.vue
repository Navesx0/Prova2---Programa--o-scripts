<template>
  <div class="container">
    <h1 class="my-4 text-center">Produtos</h1>
    <div class="row mb-4">
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          v-model="search"
          placeholder="Buscar produtos"
        />
      </div>
      <div class="col-md-4">
        <select
          class="form-control"
          v-model="selectedCategory"
          @change="filterByCategory"
        >
          <option value="">Todas as Categorias</option>
          <option
            v-for="category in allCategories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-control" v-model="sortOrder" @change="sortProducts">
          <option value="price">Ordenar por Preço</option>
          <option value="rating">Ordenar por Avaliação</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3" v-for="product in filteredProducts" :key="product.id">
        <div class="card mb-4 h-100">
          <img
            :src="product.image"
            class="card-img-top"
            :alt="product.title"
          />
          <div class="card-body">
            <h5 class="card-title text-truncate">{{ product.title }}</h5>
            <p class="card-text description">
              {{ product.description }}
            </p>
            <p class="card-text price"><strong>R$ {{ product.price }}</strong></p>
            <button class="btn btn-primary btn-block" @click="viewProduct(product.id)">Visualizar</button>
            <button class="btn btn-success btn-block mt-2" @click="addToCart(product)">Adicionar ao Carrinho</button>
            <button class="btn btn-danger btn-block mt-2" @click="deleteProduct(product.id)">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      search: "",
      selectedCategory: "",
      sortOrder: "price",
    };
  },
  computed: {
    ...mapGetters(["allProducts", "allCategories"]),
    filteredProducts() {
      let products = this.allProducts;
      if (this.search) {
        products = products.filter((product) =>
          product.title.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      if (this.selectedCategory) {
        products = products.filter(
          (product) => product.category === this.selectedCategory
        );
      }
      return products;
    },
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchCategories", "deleteProduct", "addToCart"]),
    viewProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    sortProducts() {
      if (this.sortOrder === "price") {
        this.allProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === "rating") {
        this.allProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      }
    },
    addToCart(product) {
      // Adicione o produto ao carrinho (você pode usar Vuex ou outro sistema de gerenciamento de estado)
      this.$store.dispatch("addToCart", product);
      alert(`${product.title} foi adicionado ao carrinho!`);
    },
  },
  created() {
    this.fetchProducts();
    this.fetchCategories();
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card-img-top {
  height: 180px;
  object-fit: cover;
}

.card-title {
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  font-size: 0.9rem;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
}

.btn-block {
  width: 100%;
}

/* Ajuste para espaçamento entre as colunas */
.row-cols-md-4 {
  gap: 1.5rem; /* Mais espaço entre as colunas */
}

/* Ajuste na largura para garantir que não sobrecarregue o layout */
.card-body {
  padding: 1rem;
}

.card-text {
  font-size: 0.95rem;
}
</style>
