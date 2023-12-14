import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permissao: string = ""
  buttonState: boolean = true
  array: string[] = ['root', 'admin', 'visitante']
  mensagem: string = ""

  public onLogando() {
    if (this.array.includes(this.permissao)) {
      this.buttonState = false
    } else {
      this.buttonState = true
    }
  }

  public logar() {
    if (!this.buttonState) {
      this.mensagem = `Bem vindo usuário ${this.permissao}, você está logado!`
    }
  }
}
