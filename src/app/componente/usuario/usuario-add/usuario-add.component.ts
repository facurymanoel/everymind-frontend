import { UsuarioService } from 'src/app/service/usuario.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
 

@Component({
   selector: 'app-root',
   //selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

    usuario = new User();
  
    constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  ngOnInit(): void {
      let id = this.routeActive.snapshot.paramMap.get('id');
       
      if(id != null ){
           this.userService.getStudant(id).subscribe(data => {
           this.usuario = data;
          });
     }
  }

  salvarProduto(){
      //console.info(this.usuario);
      this.userService.salvarProduto(this.usuario).subscribe(data => {
      this.novo();
      console.info("Gravou User: " + data);
      });
  }

  atualizarProduto(id: number){
      this.userService.updateProduto(id, this.usuario).subscribe(data =>{
       this.novo();
       console.info("User atualizado: " + data);
      });
   
  }

  novo(){
    this.usuario = new User();
  }

}
