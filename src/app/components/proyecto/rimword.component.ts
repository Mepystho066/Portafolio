import { NgFor } from '@angular/common';
import {Component} from '@angular/core';
@Component({
  selector: 'app-rimword-card',
  standalone: true,
  imports: [NgFor],
  template: `
      <div class="Info">
        <img id="ImgArticulo" src="/cmltd29yZAo.png">
        <h3 id="TituloArticulo">Rimword Mods Downloader</h3>  
        <p>Este es una aplicacion creada con la intention de faciliar la descarga de mods de Rimword de algunas paginas en espesifico</p>  
      <div id="BodyIcons">
        <div id="Iconos" *ngFor ="let icon of icons">
          <a [href]="icon.href"><img [src]="icon.src" alt=""> </a>
        </div>
      </div>
          <br/>
   
    
    `,
  styles:`
 
  p{
    text-align: justify;
  }
  `
})
export class RimwordCardComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",href:"https://github.com/Mepystho066/RimwordModsDownloader"}
    ];
}







@Component({
  selector: 'app-rimword',
  standalone: true,
  imports: [NgFor],
  template: `
    
    <div class="Info">
      <img id="ImgArticulo" src="/cmltd29yZAo.png">
        <h3 id="TituloArticulo">Rimword Mods Downloader</h3>
        <h4>Información</h4>
        <p>Este es una aplicacion creada con la intention de faciliar la descarga de mods de Rimword de algunas paginas en espesifico</p>  
      
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
          flet App/main.py 
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
      border-radius:50%;
    }
        
  `
})
export class RimwordComponent {
  icons= [
    //{src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",href:"https://github.com/Mepystho066/RimwordModsDownloader"}
  ]
  librerias = [
    {src:"https://avatars.githubusercontent.com/u/102273996?s=280&v=4",alt:"Flet",href:"https://flet.dev"},
    {src:"https://docs.aiohttp.org/en/stable/_static/aiohttp-plain.svg",alt:"aiohttp",href:"https://docs.aiohttp.org/en/stable/"}
  ]
}