import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { RimwordComponent } from "./components/proyecto/rimword.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProyectosComponent, CommonModule, RimwordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';

  icons= [
    {src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python",title:"Texto flotante"},
    {src :"https://img.icons8.com/?size=100&id=qBWtR72kluCU&format=png&color=000000",alt:"Kali",title:"Texto flotante"},
    {src :"https://img.icons8.com/?size=100&id=CZPJoDERmQz3&format=png&color=000000",alt:"Linux",title:"Texto flotante"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",title:"Texto flotante",href:"https://github.com/Mepystho066/"},
    {src :"https://img.icons8.com/?size=100&id=FBycNmdwUQz1&format=png&color=000000",alt:"Java",title:"Texto flotante"},
    {src :"https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000",alt:"Html",title:"Texto flotante"},
    {src :"https://img.icons8.com/?size=100&id=8ljTDYUEydbJ&format=png&color=000000",alt:"Sql",title:"Texto flotante"}
  ];



}
