import { Component, createNgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-12-31'

  constructor() {
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção' //concatenação normal
    console.log(`Nome do Produto: `,this.nomeProduto);
    console.log(`anuncio: `,this.anuncio);
    console.log(`Id: `,this.idProduto);
    console.log(`Preço: `, this.precoProduto);
    console.log(`Promoção: `, this.promocao);

    /*var variavel1;
    let variavel2;
    const variavel3: number =10;

    /*var idade = 19;
    console.log('Minha idade é: ', idade);

    let idadelet = 20;
    console.log('Minha idade é: ', idadelet);

   function imprimeIdade(){
      var idade = 20;
      console.log('Sua idade é :' idade);
   }


    function imprimeIdadeFor(){
      for(var idade = 30; idade <=40; idade++){
        console.log ('Idade dentro do for: ', idade);
      }
      console.log('Idade fora do for: ', idade);
    }
   // imprimeIdade();
    imprimeIdadeFor();*/

  }

  ngOnInit(): void {}
}




