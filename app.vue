<template>
  <div>
    <nav class="navbar navbar-expand-lg" :class="darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Store Dashboard</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Overview</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Produtos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/carts">Carrinho</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Usuários</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <!-- Botão para alternar entre modo claro/escuro -->
            <li class="nav-item">
              <button class="btn btn-outline-secondary" @click="toggleDarkMode">
                {{ darkMode ? 'Modo Claro' : 'Modo Escuro' }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false, // Controle para o modo escuro
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.updateBodyClass();
      // Salva a preferência do modo escuro no localStorage
      localStorage.setItem('darkMode', this.darkMode ? 'enabled' : 'disabled');
    },
    updateBodyClass() {
      if (this.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
  },
  created() {
    // Recupera a preferência do modo escuro do localStorage quando a página é carregada
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      this.darkMode = true;
      this.updateBodyClass();
    }
  },
};
</script>

<style>
/* Transição suave para o fundo e cor do texto */
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Estilos para o modo escuro */
body.dark-mode {
  background-color: #121212;
  color: #f0f0f0;
}

/* Estilos para a navbar no modo escuro */
.navbar-dark .navbar-nav .nav-link {
  color: #f0f0f0;
}

.navbar-dark .navbar-brand {
  color: #f0f0f0;
}

.navbar-light .navbar-nav .nav-link {
  color: #333;
}

.navbar-light .navbar-brand {
  color: #333;
}

.navbar-dark .navbar-toggler-icon {
  background-color: #f0f0f0;
}
</style>
