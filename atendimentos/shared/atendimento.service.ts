import { Injectable } from '@angular/core';
import { Atendimento } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  constructor() { }

  listarPacientes(): Atendimento [] {
    // Criando o BD
    const atendimentos = localStorage ['atendimentos'];
    return atendimentos ? JSON.parse (atendimentos) : [];
  }

  listarPacientesAtivos(): Atendimento[] {
    const atendimentos: Atendimento[] = this.listarPacientes();
    return atendimentos.filter(atendimento => atendimento.status == true)
  }

  cadastrar(atendimento: Atendimento):void {
    const atendimentos = this.listarPacientes();
    atendimento.id = new Date().getTime();
    atendimento.status = true
    atendimento.concluido = false
    atendimentos.push(atendimento);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  buscarPorId(id:number): Atendimento{
    const atendimentos : Atendimento[] = this.listarPacientes();
    return atendimentos.find (atendimento => atendimento.id === id);
  }

  atualizar(atendimento: Atendimento):void{
    const atendimentos : Atendimento [] = this.listarPacientes();
    atendimentos.forEach((obj, index, objs)=>{
      if (atendimento.id === obj.id){
        objs[index] = atendimento;
      }
    })
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  remover(id:number):void{
    let atendimentos: Atendimento [] = this.listarPacientes();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].status = !obj.status;
      }
    })
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  alterarStatus(id:number):void{
    let atendimentos: Atendimento [] = this.listarPacientes();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].concluido = !obj.concluido;
      }
    })
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }
}
