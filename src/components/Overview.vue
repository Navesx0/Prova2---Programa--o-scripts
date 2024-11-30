<template>
  <div class="container">
    <h1 class="my-4 text-center">Visão Geral</h1>
    <div class="row">
      <!-- Card para Total de Produtos -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-lg border-0 rounded-lg">
          <div class="card-body d-flex flex-column align-items-center">
            <div class="card-icon mb-3">
              <!-- Imagem representando Produtos -->
              <img src="@/assets/products-icon.png" alt="Produtos" style="width: 4rem; height: 4rem; object-fit: contain;">
            </div>
            <h5 class="card-title">Total de Produtos</h5>
            <p class="card-text">{{ totalProducts }}</p>
          </div>
        </div>
      </div>
      <!-- Card para Total de Categorias -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-lg border-0 rounded-lg">
          <div class="card-body d-flex flex-column align-items-center">
            <div class="card-icon mb-3">
              <!-- Imagem representando Categorias -->
              <img src="@/assets/categories-icon.png" alt="Categorias" style="width: 4rem; height: 4rem; object-fit: contain;">
            </div>
            <h5 class="card-title">Total de Categorias</h5>
            <p class="card-text">{{ totalCategories }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Overview',
  computed: {
    ...mapGetters(['allProducts', 'allCategories']),
    totalProducts() {
      return this.allProducts.length;
    },
    totalCategories() {
      return this.allCategories.length;
    },
  },
  methods: {
    ...mapActions(['fetchProducts', 'fetchCategories']),
  },
  created() {
    this.fetchProducts();
    this.fetchCategories();
  },
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.card-icon {
  font-size: 3rem;
  color: #007bff;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text {
  font-size: 1.5rem;
  color: #333;
}

.card-body {
  padding: 2rem;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
