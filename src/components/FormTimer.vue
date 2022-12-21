<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa.">
        <input type="text" class="input" placeholder="Qual a tarefa você deseja iniciar?" v-model="descricao" />
      </div>
      <div class="column">
        <TemporizadorTime @ao-temporizador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TemporizadorTime from './TemporizadorTime.vue';

export default defineComponent({
  name: 'FormTimer',
  data() {
    return {
      descricao: ''
    };
  },
  components: { TemporizadorTime },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      console.log('tempo decorrido:', tempoDecorrido);
      console.log("Descrição da tarefa: ", this.descricao);
      this.descricao = '';
    }
  }
});
</script>

<style scoped>

</style>
