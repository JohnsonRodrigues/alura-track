import {createMemoryHistory, createRouter, RouteRecordRaw} from "vue-router";
import TarefasView from "@/views/TarefasView.vue";


const rotas: RouteRecordRaw[] = [{
    path:'/',
    name: 'Tarefas',
    component: TarefasView

}];
const roteador = createRouter({
    history: createMemoryHistory(),
    routes: rotas
});

export default roteador;