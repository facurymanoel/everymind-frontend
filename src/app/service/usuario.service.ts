import { AppConstants } from './../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 

  }

  getStudentList(): Observable<any> {
      return this.http.get<any>(AppConstants.baseURL);
  }

  getStudant(id: any): Observable<any>{
      return this.http.get<any>(AppConstants.baseURL + id);
  }

  deletarProduto(id: number): Observable<any>{
        return this.http.delete(AppConstants.baseURL + id, {responseType : 'text'});
  }
   
  consultarProduto(nome: string) : Observable<any>{
       return this.http.get(AppConstants.baseURL + "produtoPorNome/" + nome);

  }

  salvarProduto(user: any) : Observable<any>{
       return this.http.post<any>(AppConstants.baseURL, user);
   }

   updateProduto(id: number, user: any) : Observable<any>{
    return this.http.put<any>(AppConstants.baseURL + id, user);
}
}
