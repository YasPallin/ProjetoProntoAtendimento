export class Atendimento{
    constructor(
        public id?:number,
        public nome?:string,
		public cpf?:string,
        public endereco?:string,
        public prioridade?:number,
        public status?:boolean,
        public concluido?:boolean
    ){
        
    }
}