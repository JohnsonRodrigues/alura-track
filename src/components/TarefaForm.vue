<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">Descrição</div>
      <div class="column">
        <CronometroTime :tempoEmSegundos="15" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTime from './CronometroTime.vue';

export default defineComponent({
  name: 'TarefaForm',
  components: { CronometroTime },
});
</script>

<style scoped>
.box {
  background:#FAF0CA ;
}
</style>
