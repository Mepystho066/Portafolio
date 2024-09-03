import { NgFor } from '@angular/common';
import { Component,TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NgFor],
  template: `
    
    <div class="Info">
      <img id ="ImgArticulo" src="/UHJpbnRzM0RfVUkK.png"/>
      <h3 id="TituloArticulo" >App Gestion Impresiones 3d</h3>
      <h4>Resumen</h4>
      <p>App para la gestion de Impresiones 3D, con su respectiva base de datos para el almacenamiento de la información<p>
      
      <div id="BodyIcons">
        <div id="Iconos" *ngFor ="let icon of icons">
          <a [href]="icon.href"><img [src]="icon.src" alt=""> </a>
        </div>
      </div>
      
    </div>
    `,
  styles:`
  *{
    text-align: center;
  }
    h3{
    font-family:'Jersey10';
    } 
  `
})
export class GestionComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",href:"https://github.com/Mepystho066/RimwordModsDownloader"}
  ]
}
