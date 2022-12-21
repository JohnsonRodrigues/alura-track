<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTime :tempoEmSegundos="tempoEmSegundos" />

    <ButtonTimer @clicado="iniciar" icone="fas fa-play" texto="play" v-bind:disabled="cronometroStart"/>

    <ButtonTimer @clicado="finalizar" icone="fas fa-stop" texto="stop" v-bind:disabled="!cronometroStart"/>
<!-- 
    <button class="button" v-on:click="iniciar" v-bind:disabled="cronometroStart">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroStart">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonTimer from './ButtonTimer.vue';
import CronometroTime from './CronometroTime.vue';

export default defineComponent({
  name: 'TemporizadorTime',
  emits:[
    'aoTemporizadorFinalizado'
  ],
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroStart: false
    };
  },
  methods: {
    iniciar() {
      console.log('tempo:' + this.tempoEmSegundos);
      this.cronometroStart = true;
      this.cronometro = setInterval(() => {
        console.log('incrementando tempo');
        this.tempoEmSegundos++;
        console.log('incrementando tempo:' + this.tempoEmSegundos);
      }, 1000);
      console.log('iniciando');
    },
    finalizar() {
      this.cronometroStart = false;
      clearInterval(this.cronometro);
      this.cronometro = 0;
      console.log('finalizando');
      this.$emit('aoTemporizadorFinalizado',this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
  components: { CronometroTime, ButtonTimer },
});
</script>

<style scoped>

</style>
