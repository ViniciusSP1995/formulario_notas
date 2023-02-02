import { Injectable } from '@angular/core';
import { IFormulario } from '../formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  itens: IFormulario[] = [];
  constructor(

  ) { }

  buscarFormularios() {
    this.itens = JSON.parse(localStorage.getItem("formulario") || "[]");
    return this.itens;
  }

  adicionarFormulario(formulario: IFormulario) {

    this.itens.push(formulario);
    localStorage.setItem("formulario", JSON.stringify(this.itens));
  }

  removerFormulario(nome: string) {
    alert("teste");

    this.itens = this.itens.filter(item => item.nome !== nome);
    localStorage.setItem("formulario", JSON.stringify(this.itens));
    
  }
}
