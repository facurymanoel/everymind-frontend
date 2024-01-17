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

  deletarUsuario(id: number): Observable<any>{
        return this.http.delete(AppConstants.baseURL + id, {responseType : 'text'});
  }

  consultarUser(nome: string) : Observable<any>{
       return this.http.get(AppConstants.baseURL + "produtoPorNome/" + nome);

  }

  salvarUsuario(user: any) : Observable<any>{
      return this.http.post<any>(AppConstants.baseURL, user);
  }
}
