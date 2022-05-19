import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Henrique';
  text = '';
  pessoas = [
    {
      nome: 'Henrique',
      sobrenome: 'Silva'
    },
    {
      nome: 'Rosana',
      sobrenome: 'Sanches'
    },
    {
      nome: 'Julia',
      sobrenome: 'Silva'
    },
    {
      nome: 'Paulo',
      sobrenome: 'Silva'
    },
  ];

  constructor() {

  }

  ngOnInit() {
    let interval = setInterval(() => {
      this.count ++;
      if(this.count == 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void{
    console.log('clicou em mim', nome)
  }
}
