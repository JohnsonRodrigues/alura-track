<template>
  <header>
    <h1><img src="../assets/logo.png" alt=""/></h1>
    <button class="button" @click="alterarTema"> {{ textBotao}}</button>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aotemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativa modo escuro';
      }
      return 'Ativa modo escuro';
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit('aotemaAlterado', this.modoEscuroAtivo);
    }
  }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
