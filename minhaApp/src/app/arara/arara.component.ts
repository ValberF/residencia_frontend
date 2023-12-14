import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent implements OnInit {
  nome: string = "Arara Azul"
  url: string = ""
  
  ngOnInit() {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    alert("teste")
  }

}
