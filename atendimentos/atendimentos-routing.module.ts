import { Routes } from '@angular/router';
import { ListarAtendimentosComponent } from './listar';
import { CadastrarAtendimentoComponent } from "./cadastrar";
import { EditarAtendimentoComponent } from './editar';

export const atendimentoRoutes : Routes = [
    {
        path: 'atendimentos',
        redirectTo: 'atendimentos/listar'
    },
    {
        path: 'atendimentos/listar',
        component: ListarAtendimentosComponent
    },
    {
        path:"atendimentos/cadastrar",
        component: CadastrarAtendimentoComponent
    },
    {
        path:"atendimentos/editar/:id",
        component: EditarAtendimentoComponent
    }
];

