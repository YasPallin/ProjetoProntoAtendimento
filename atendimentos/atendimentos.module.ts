import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService, atendimentoConcluidoDirective } from './shared';
import { ListarAtendimentosComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { EditarAtendimentoComponent } from './editar';

@NgModule({
	providers: [
		AtendimentoService
	],
	declarations: [	
    ListarAtendimentosComponent, 
	CadastrarAtendimentoComponent, 
	EditarAtendimentoComponent, 
	atendimentoConcluidoDirective
  ],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	]
})

export class AtendimentosModule { }