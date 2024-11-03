import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoPostComponent } from "./components/nuevo-post/nuevo-post.component";
import { ListarPostComponent } from "./components/listar-post/listar-post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoPostComponent, ListarPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-NgXs';
}
