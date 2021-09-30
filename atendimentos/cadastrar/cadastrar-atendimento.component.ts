import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AtendimentoService, Atendimento } from '../shared';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrls: ['./cadastrar-atendimento.component.css']
})
export class CadastrarAtendimentoComponent implements OnInit {

  // Criando uma referencia para trabalhar com validações
  @ViewChild('formAtendimento', {static:true})formAtendimento: NgForm;
  
  atendimento:Atendimento;

  constructor(private atendimentoService: AtendimentoService, private router: Router) { }

  ngOnInit(): void {
    this.atendimento = new Atendimento();
  }

  cadastrar():void {
    if(this.formAtendimento.form.valid){
      this.atendimentoService.cadastrar(this.atendimento);
      this.router.navigate(["/atendimentos"]);
    }
  }

}
