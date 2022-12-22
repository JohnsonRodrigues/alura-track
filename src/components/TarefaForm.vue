<template>
  <BoxTarefa>
    <div class="columns">
      <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descrição'  }}</div>
      <div class="column">
        <CronometroTime :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </BoxTarefa>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import CronometroTime from './CronometroTime.vue';
import ITarefa from "@/interfaces/ITarefa";
import BoxTarefa from "@/components/BoxTarefa.vue";


export default defineComponent({
  name: 'TarefaForm',
  components: {BoxTarefa, CronometroTime},
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
});
</script>

<style scoped>

</style>
