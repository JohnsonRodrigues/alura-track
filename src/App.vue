<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro':modoEscuroAtivo }">
  <div class="column is-one-quarter">
    <BarraLateral @aotemaAlterado="trocarTema"/>
  </div>
  <div class="column is-three-quarter conteudo">
    <FormTimer @aoSalvarTarefa="salvaTarefa"/>
    <div class="lista">
      <TarefaForm v-for="(tarefa,index) in tarefas" :key="index" :tarefa="tarefa"/>
      <BoxTarefa v-if="listaEstaVazia">
        Você não está produtivo hoje :(;
      </BoxTarefa>
    </div>
  </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormTimer from './components/FormTimer.vue';
import TarefaForm from './components/TarefaForm.vue';
import ITarefa from "@/interfaces/ITarefa";
import BoxTarefa from "@/components/BoxTarefa.vue";

export default defineComponent({
  name: 'App',
  components: {BoxTarefa, BarraLateral, FormTimer, TarefaForm},
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
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }
});
</script>

<style>
.lista {
  padding: 1.5rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>
