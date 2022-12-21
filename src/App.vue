<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormTimer />
      <div class="lista">
        <TarefaForm />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormTimer from './components/FormTimer.vue';
import TarefaForm from './components/TarefaForm.vue';

export default defineComponent({
  name: 'App',
  components: { BarraLateral, FormTimer, TarefaForm },
});
</script>

<style>
.lista {
  padding: 1.5rem;
}
</style>
