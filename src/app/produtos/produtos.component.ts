import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { IProduto, produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent {

  produtos: IProduto[] | undefined;
 
  constructor(
    private produtosService: ProdutosService
  ){}

  ngOnInit(): void {
      this.produtos = this.produtosService.getAll()
  }

}
