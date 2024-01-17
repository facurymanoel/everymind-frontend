import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Array<User> ;
  nome: string;
  usuario = new User();

  constructor(private usuarioService: UsuarioService) { 
      
  }

  ngOnInit(): void {

           this.usuarioService.getStudentList().subscribe( data =>{
           this.students = data;
       });
  }

  deleteUsuario(id: number){
      this.usuarioService.deletarUsuario(id).subscribe(data =>{
        console.log("Retorno do método delete : " + data);
        this.usuarioService.getStudentList().subscribe( data =>{
        this.students = data;
      
         });  

      });
  }

  consultarUser(){
       this.usuarioService.consultarUser(this.nome).subscribe( data =>{
            this.students = data;
       });
  }

  salvarUser(){
      this.usuarioService.salvarUsuario(this.usuario).subscribe( data =>{
        this.novo();
        console.info("Gravou User: " + data);
         
      });
  }

  novo(){
    //this.usuario = new User();
    //this.nome = '';
       localStorage.clear();
   }

}
