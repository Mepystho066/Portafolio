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
      <p>Crear un contenedor con Kali Linux y su interfaz gráfica (GUI) es una forma eficiente de ejecutar herramientas de seguridad y pruebas de penetración sin la necesidad de una máquina virtual completa <p>
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
      <p>Docker ha transformado la manera en que gestionamos proyectos y aplicaciones, facilitando su despliegue y asegurando una implementación más organizada tanto para desarrolladores como para equipos de trabajo. Sin embargo, su utilidad no se limita solo a la gestión de aplicaciones. Docker también es una herramienta poderosa en el ámbito de la seguridad informática, permitiendo el despliegue de sistemas operativos diseñados para auditorías de seguridad y pruebas de penetración. En el vasto repositorio de contenedores de Docker Hub, que alberga miles de imágenes para aplicaciones y sistemas operativos, encontramos opciones ideales para practicar y ejecutar herramientas de seguridad, incluyendo una imagen muy especial: Kali Linux, la distribución de referencia para pruebas de seguridad. En este artículo, exploraremos cómo crear un contenedor con Kali Linux y su interfaz gráfica (GUI), facilitando su uso en tareas de auditoría y análisis sin complicaciones.<p>
      <a href="https://hub.docker.com/r/kasmweb/core-kali-rolling">https://hub.docker.com/r/kasmweb/core-kali-rolling </a>
      <div id="Comands">
        <h4>Comandos </h4>
        <p> Llamamos al contenedor, tenemos que tener algo de paciencia si no se tiene una buena conexión dado que son 2.7 GB lo que que pesa la imagen  <br>
      <code>
      docker pull kasmweb/kali-rolling-desktop:1.16.0
      </code>
      <li><strong>pull:</strong>Es la forma llamar un contendor</li>
      </p>
      <p>Ejecutamos el contenedor ten en cuenta que esto puede tomar unos cuantos minutos dependiendo de tu computadora.<br>

      <code>
        sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/kali-rolling-desktop:1.16.0
      </code>

      <li><strong>run:</strong> Ejecuta el contenedor</li>
      <li><strong>--rm:</strong> Eliminar automáticamente el contenedor y sus volúmenes anónimos asociados cuando sale</li>
      <li><strong>--it:</strong>-i (Modo interactivo) -t (Asignar pseudo-terminal)</li>
      <li><strong>--shm-size=512m:</strong> Establece el tamaño de la memoria compartida a 512 MB</li>
      <li><strong>-p 6901:6901:</strong> el Puerto del contenedor al puerto del host, permitiendo acceder a servicios en ese puerto</li>
      <li><strong>-e VNC_PW=password:</strong> Establece una variable de entorno VNC_PW con el valor password</li>
      </p>
      <p>Dentro del navegador  docker-ip:6901 </p>
      <code>
        User : kasm_user<br>
        Password: password
      </code>
      <p>
      Algunas ventajas que se puede tener al hacer este tipo de contenedores es:
      <li>Aislamiento y Seguridad</li> 
      <li>Portabilidad</li>
      <li>Facidad de configuración</li>
      <li>Eficiencia y recursos</li>
      Al aislar la maquina virtual con la que vamos a hacer las auditorias es una buena practica, estos contenedores tienen una asignación ip diferente al de host.
      </p>
      </div>
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
  p{
  text-align: justify;
  padding: 1% 5% 1% 5%;
  }
  li{
    text-align:left;
  }
    h3{
    font-family:'Jersey10';
    } 
    #Comands{
      justify-content: center;
    }
    code{
      background-color:grey;
      padding:0em 1em 0em 1em;
      text-align:left;
    }

  
  `
})
export class DockerkaliComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=TkG10j-DmXkU&format=png&color=000000",alt:"docker"},
    {src :"https://img.icons8.com/?size=100&id=qBWtR72kluCU&format=png&color=000000",alt:"Kali"}
  ]
 
}