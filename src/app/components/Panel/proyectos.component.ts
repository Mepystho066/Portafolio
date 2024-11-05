import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RimwordComponent ,RimwordCardComponent} from "../proyecto/rimword.component";
import { GestionComponent,GestionCardComponent } from "../proyecto/gestion.component";
import { NgFor } from '@angular/common';
import { DockerkaliComponent,DockerkaliCardComponent } from '../ariculos/dockerkali.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatDialogModule, ProyectosComponent, RimwordComponent, RimwordCardComponent, GestionComponent, GestionCardComponent, NgFor, DockerkaliCardComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})

export class ProyectosComponent {
  icons= [
    {src :"https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",alt:"Python",href:""},
    {src :"https://img.icons8.com/?size=100&id=qBWtR72kluCU&format=png&color=000000",alt:"Kali"},
    {src :"https://img.icons8.com/?size=100&id=CZPJoDERmQz3&format=png&color=000000",alt:"Linux"},
    {src :"https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",alt:"GitHib",href:"https://github.com/Mepystho066/"},
    {src :"https://img.icons8.com/?size=100&id=FBycNmdwUQz1&format=png&color=000000",alt:"Java"},
    {src :"https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000",alt:"Html"},
    {src :"https://img.icons8.com/?size=100&id=8ljTDYUEydbJ&format=png&color=000000",alt:"Sql"}
  ];

  readonly dialog = inject(MatDialog);
  GestionComponent:any = GestionComponent
  RimwordComponent:any = RimwordComponent
  DockerkaliComponent:any=DockerkaliComponent
  openDialog( component:any) {
    const dialogRef = this.dialog.open(component,{height:'99%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showProyectos: boolean = true; 
  toggleView(): void {
    this.showProyectos = !this.showProyectos;
  }
  
}



