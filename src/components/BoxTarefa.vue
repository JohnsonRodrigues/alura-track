<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "BoxTarefa",
  data() {
    return {
      estilos:{
        backgroundCOlor:'#FAF0CA'
      }
    };
  }
});
</script>

<style scoped>
.box {
  //background: #FAF0CA;
}
</style>