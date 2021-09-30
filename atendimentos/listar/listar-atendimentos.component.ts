import { Component, OnInit } from '@angular/core';
import { Atendimento, AtendimentoService } from '../shared';



@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrls: ['./listar-atendimentos.component.css']
})

export class ListarAtendimentosComponent implements OnInit {
  atendimentos: Atendimento[];
  atendimentosAtivos: Atendimento[];
  
  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(){
    this.atendimentos= this.listarPacientes()
    this.atendimentosAtivos = this.listarPacientesAtivos();

  }
  listarPacientes():Atendimento[]{
    return this.atendimentoService.listarPacientes();
  }

  listarPacientesAtivos(): Atendimento[]{
    return this.atendimentoService.listarPacientesAtivos();
  }
  
  alterarStatus(atendimento:Atendimento):void {
    if(confirm('Alterar status do paciente ' + atendimento.nome +'?')){
      this.atendimentoService.alterarStatus(atendimento.id);
      this.atendimentosAtivos = this.listarPacientesAtivos();
    } 
  }

  remover($event:any, atendimento:Atendimento):void{
    $event.preventDefault();
    if(confirm('Deseja remover o paciente ' + atendimento.nome+'?')){
      this.atendimentoService.remover(atendimento.id);
      this.atendimentosAtivos = this.listarPacientesAtivos();
    }
  }
}

// public id?:number,
// public nome?:string,
// public prioridade?:number,
// public status?:boolean,
// public concluido?:boolean

