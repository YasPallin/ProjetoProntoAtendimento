import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[atendimentoConcluido]'
})
export class atendimentoConcluidoDirective implements OnInit {

  @Input() atendimentoConcluido:boolean;

  constructor(private el:ElementRef) { }
  ngOnInit(){
	  if(this.atendimentoConcluido){
		this.el.nativeElement.style.color = "green";
		this.el.nativeElement.style.backgroundColor = "#bfffd3";
	  }
	}
}
