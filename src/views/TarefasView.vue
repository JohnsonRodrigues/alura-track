<template>
  <FormTimer @aoSalvarTarefa="salvaTarefa" />
  <div class="lista">
    <TarefaForm v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <BoxTarefa v-if="listaEstaVazia">
      Você não está produtivo hoje :(;
    </BoxTarefa>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormTimer from '../components/FormTimer.vue';
import TarefaForm from '../components/TarefaForm.vue';
import ITarefa from "@/interfaces/ITarefa";
import BoxTarefa from "../components/BoxTarefa.vue";

export default defineComponent({
  name: 'TarefasView',
  components: { BoxTarefa,  FormTimer, TarefaForm },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvaTarefa(tarefa: ITarefa) {
      console.log(tarefa);
      this.tarefas.push(tarefa);
    },
  }
});
</script>

<style>

</style>
