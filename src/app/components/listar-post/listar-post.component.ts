import { Component } from '@angular/core';
import { IPost } from '../../interfaces/post';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EliminarPost } from '../store/post.actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-post.component.html',
  styleUrl: './listar-post.component.css'
})
export class ListarPostComponent {
  posts$:Observable<IPost[]>;

  constructor(private store:Store, private toastr:ToastrService) {
    this.posts$=this.store.select(state=>state.posts.listPosts);
  }

  eliminarPost(id: string) {
    this.store.dispatch(new EliminarPost(id));
    this.toastr.error('El post fue eliminado correctamente', 'Post eliminado');
  }
}
