import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RimwordComponent } from "../proyecto/rimword.component";
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ProyectosComponent, RimwordComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  icons= [
    "https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=qBWtR72kluCU&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=CZPJoDERmQz3&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=FBycNmdwUQz1&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=8ljTDYUEydbJ&format=png&color=000000"
  ];
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(RimwordComponent,{height:'99%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
