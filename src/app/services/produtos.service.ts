import { IProduto } from './../components/model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY,Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
    private URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]> (this.URL);
 }

  exibirMensagem():void {

  }
  }
