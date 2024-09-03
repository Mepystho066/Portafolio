import { NgFor } from '@angular/common';
import {Component} from '@angular/core';
@Component({
  selector: 'app-rimword',
  standalone: true,
  imports: [NgFor],
  template: `
      <div class="Info">
        <img id="ImgArticulo" src="/cmltd29yZAo.png">
        <h3 id="TituloArticulo">Rimword Mods Downloader</h3>
        <h4>Resumen</h4>
        <p>Este es una aplicacion creada con la intention de faciliar la descarga de mods de Rimword de algunas paginas en espesifico</p>  
      <div id="BodyIcons">
        <div id="Iconos" *ngFor ="let icon of icons">
          <a [href]="icon.href"><img [src]="icon.src" alt=""> </a>
        </div>
      </div>
          <br/>
   
    
    `,
  styles:`
  *{
    text-align: center;
  }




  `
})
export class RimwordComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",href:"https://github.com/Mepystho066/RimwordModsDownloader"}
    ];
}
