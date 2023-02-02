import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormulario } from '../formulario';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularios: IFormulario[] = [];
  
  constructor(
    private formularioService: FormularioService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.formularios = this.formularioService.buscarFormularios();
  }

  formAluno = this.fb.group({
    nome: "",
    nota1: "",
    nota2: "",
  })

  enviarFormulario() {
    alert("Formulário enviado!");
    var media = (Number(this.formAluno.value.nota1!) + Number(this.formAluno.value.nota2!)) / 2

    const formulario: IFormulario = {
      nome: this.formAluno.value.nome!,
      nota1: Number(this.formAluno.value.nota1!),
      nota2: Number(this.formAluno.value.nota2!),
      media: media,
      aprovado: media < 6 ? false : true
    }

    this.formularioService.adicionarFormulario(formulario);
    this.formularios = this.formularioService.buscarFormularios();
    this.formAluno.reset();
  }

  removerFormulario(nome: string) {
    this.formularios = this.formularios.filter(item => item.nome !== nome);

    this.formularioService.removerFormulario(nome);
  }

}
