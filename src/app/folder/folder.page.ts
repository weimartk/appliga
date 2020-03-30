import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public equipo: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.equipo=[
      {
        nombre:"Club Bolivar",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Emblem_bolivar.png/216px-Emblem_bolivar.png",
        estadio:"Hernando Siles",
        ciudad:"La Paz",
        presidente:"Marcelo Claure",
        entrenador:"Claudio Vivas"
      },
      {
        nombre:"Club The Strongest",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Escudo_Club_The_Strongest.png/240px-Escudo_Club_The_Strongest.png",
        estadio:"Hernando Siles",
        ciudad:"La Paz",
        presidente:"Inés Quispe",
        entrenador:"Alberto Illanes"
      },
      {
        nombre:"Club Deportivo Jorge Wilstermann",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Escudo_Wilstermann-1.png/330px-Escudo_Wilstermann-1.png",
        estadio:"Felix Capriles",
        ciudad:"Cochabamba",
        presidente:"Grover Vargas",
        entrenador:"Cristian Díaz"
      }
    ];
    console.log(this.equipo);
    /*equipo={
      "nombre"
      "logo"
      "estadio"
      "ciudad"
      "presidente"
      "entrenador"
    }*/
  }

}
