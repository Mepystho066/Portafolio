import { NgFor } from '@angular/common';
import { Component,TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-gestion-card',
  standalone: true,
  imports: [NgFor],
  template: `
    
    <div class="Info">
      <img id ="ImgArticulo" src="/image-1.png"/>
      <h3 id="TituloArticulo" >App Gestion Impresiones 3d</h3>
      <p>Una App de escritorio para la gestion de Impresiones 3D, con su respectiva base de datos para el almacenamiento de la información<p>
      
      <div id="BodyIcons">
        <div id="Iconos" *ngFor ="let icon of icons">
          <a [href]="icon.href"><img [src]="icon.src" alt=""> </a>
        </div>
      </div>
      
    </div>
    `,
  styles:`
  p{
    text-align: justify;
  }

  `
})
export class GestionCardComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",href:"https://github.com/Mepystho066/RimwordModsDownloader"}
  ]
}



@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NgFor],
  template: `
    
    <div class="Info">
      <img id ="ImgArticulo" src="/image-1.png"/>
      <h3 id="TituloArticulo" >App Gestion Impresiones 3d</h3>
      <h4>Informacion</h4>
      <p>Diseñado para ser una app de escritorio ayudar a la gestión de impresiones 3D</p>
      
      <h5>Librerias</h5>
      <div id="BodyLibraries">
        <div id="Libraries" *ngFor ="let lib of librerias">
          <a [href]="lib.href"><img [src]="lib.src" alt=""> {{lib.alt}}</a>
        </div>
      </div>
      <h5>Uso</h5>
      <div id="Use">
        <ol>
        <li>Activar el entorno virtual</li>
        <code>
         source ./bin/active
        </code>
        <li>Ejecutar la aplicacción</li>
        <code>
          python3 Print3D_UI.py
        </code>
        </ol>
      </div>

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
    content-align: center;
    }
    h3{
    font-family:'Jersey10';
    } 
    #Use{
      display: flex;
      justify-content: center;
    }
    #Use code{
      background-color:grey;
      padding:0em 1em 0em 1em;
    }
    #Libraries img{
      width:2em;
      
    }
  
  `
})
export class GestionComponent {
  icons= [
    //{src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",href:"https://github.com/Mepystho066/RimwordModsDownloader"}
  ]
  librerias = [
    {src:"https://icon.icepanel.io/Technology/png-shadow-512/SQLite.png",alt:"Sqlite",href:"https://docs.python.org/es/3/library/sqlite3.html"},
    {src:"https://raw.githubusercontent.com/hoffstadt/DearPyGui/assets/readme/dpg_logo_button.png",alt:"Dearpygui",href:"https://github.com/hoffstadt/DearPyGui/"}
  ]
}