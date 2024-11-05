import { NgFor } from '@angular/common';
import { Component,TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dockerkali-card',
  standalone: true,
  imports: [NgFor],
  template: `
    
    <div class="Info">
      <img id ="ImgArticulo" src="/DockerKali.png"/>
      <h3 id="TituloArticulo" >Kali en un contenedor</h3>
      <p>Docker y kali una implementación para la seguridad informática <p>
      <div id="BodyIcons">
        <div id="Iconos" *ngFor ="let icon of icons">
          <a><img [src]="icon.src" alt=""> </a>
        </div>
      </div>
      
    </div>
    `,
  styles:`
  p{
    text-align: justify;
  }
    h3{
    text-align: center;
    font-family:'Jersey10';
    } 
  `
})
export class DockerkaliCardComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=TkG10j-DmXkU&format=png&color=000000",alt:"docker"},
    {src :"https://img.icons8.com/?size=100&id=qBWtR72kluCU&format=png&color=000000",alt:"Kali"}
  ]
}



@Component({
  selector: 'app-dockerkali',
  standalone: true,
  imports: [NgFor],
  template: `
    
    <div class="Info">
      <img id ="ImgArticulo" src="/DockerKali.png"/>
      <h3 id="TituloArticulo" >Kali en un contenedor</h3>
      <p>Docker y kali una implementación para la seguridad informática <p>
      <div id="BodyIcons">
        <div id="Iconos" *ngFor ="let icon of icons">
          <a><img [src]="icon.src" alt=""> </a>
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
export class DockerkaliComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=TkG10j-DmXkU&format=png&color=000000",alt:"docker"},
    {src :"https://img.icons8.com/?size=100&id=qBWtR72kluCU&format=png&color=000000",alt:"Kali"}
  ]
 
}