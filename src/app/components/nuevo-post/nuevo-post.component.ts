import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { IPost } from '../../interfaces/post';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { AgregarPost } from '../store/post.actions';

@Component({
  selector: 'app-nuevo-post',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './nuevo-post.component.html',
  styleUrl: './nuevo-post.component.css'
})
export class NuevoPostComponent {
  nombre:string='';
  descripcion:string='';

  constructor(private toastr:ToastrService, private store:Store){}

  agregarPost(){
    if(!this.nombre || !this.descripcion){
      this.toastr.error('El nombre y la descripción son obligatorios', 'Error');
      return;
    }
    //Crear objeto
    const post:IPost={
      id:uuidv4(),
      nombre:this.nombre,
      descripcion:this.descripcion
    }  

    //Agregar al store
    this.store.dispatch(new AgregarPost(post));

    this.toastr.success(`Post ${this.nombre.toUpperCase()} creado con éxito`, 'Post creado');  

    //Resetear formulario
    this.resetForm();
  }

  resetForm(){
    this.nombre='';
    this.descripcion='';
  }
}
