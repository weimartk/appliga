import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public tipo: string;
  public retorno:string;
  public equipo: any;
  public equipo_seleccionado: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.retorno="/folder/Equipos";
    this.tipo=this.activatedRoute.snapshot.paramMap.get('tipo');
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.equipo=[
      {
        id:0,
        nombre:"Club Bolivar",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Emblem_bolivar.png/216px-Emblem_bolivar.png",
        estadio:"Hernando Siles",
        ciudad:"La Paz",
        presidente:"Marcelo Claure",
        entrenador:"Claudio Vivas",
        url:"/equipo/0",
        jugadores:[{
          numero:1,
          nacionalidad:"Bolivia",
          posicion:"Arquero",
          nombre:"Javier",
          apellido:"Rojas",
          edad:"24 años"
        },
        {
          numero:2,
          nacionalidad:"El Salvador",
          posicion:"Defensa",
          nombre:"Roberto",
          apellido:"Dominguez",
          edad:"22 años"
        }
        ]
      },
      {
        id:1,
        nombre:"Club The Strongest",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Escudo_Club_The_Strongest.png/240px-Escudo_Club_The_Strongest.png",
        estadio:"Hernando Siles",
        ciudad:"La Paz",
        presidente:"Inés Quispe",
        entrenador:"Alberto Illanes",
        url:"/equipo/1"
      },
      {
        id:2,
        nombre:"Club Deportivo Jorge Wilstermann",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Escudo_Wilstermann-1.png/330px-Escudo_Wilstermann-1.png",
        estadio:"Felix Capriles",
        ciudad:"Cochabamba",
        presidente:"Grover Vargas",
        entrenador:"Cristian Díaz",
        url:"/equipo/2"
      },
      {
        id:3,
        nombre:"Club Atlético Nacional Potosí",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Club_Atletico_Nacional_Potosi.svg/210px-Club_Atletico_Nacional_Potosi.svg.png",
        estadio:"Victor Agustín Ugarte",
        ciudad:"Potosí",
        presidente:"Wilfredo Condori",
        entrenador:"Sebastián Nuñez",
        url:"/equipo/3"
      },
      {
        id:4,
        nombre:"Club San José",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/CD_San_Jose.png/270px-CD_San_Jose.png",
        estadio:"Jesús Bermúdez",
        ciudad:"Oruro",
        presidente:"Huascar Antezana",
        entrenador:"Omar Asad",
        url:"/equipo/4"
      },
      {
        id:5,
        nombre:"Club Blooming",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Escudo_Club_Blooming_2019.png/240px-Escudo_Club_Blooming_2019.png",
        estadio:"Ramón Tahuichi Aguilera",
        ciudad:"Santa Cruz",
        presidente:"Juan Alfredo Jordan Romero",
        entrenador:"Miguel Ponce",
        url:"/equipo/5"
      },
      {
        id:6,
        nombre:"Club Oriente Petrolero",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Escudo_Oriente_Petrolero.png/151px-Escudo_Oriente_Petrolero.png",
        estadio:"Ramón Tahuichi Aguilera",
        ciudad:"Santa Cruz",
        presidente:"Ronald Raldes",
        entrenador:"Pablo Sanchez",
        url:"/equipo/6"
      },
      {
        id:7,
        nombre:"Club Always Ready",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Club_Always_Ready_Escudo.png/270px-Club_Always_Ready_Escudo.png",
        estadio:"Estadio Municipal de El Alto",
        ciudad:"El Alto",
        presidente:"Ángel Fernando Costa Sarmiento",
        entrenador:"Eduardo Villegas",
        url:"/equipo/7"
      },
      {
        id:8,
        nombre:"Royal Pari Fútbol Club",
        logo:"https://pbs.twimg.com/profile_images/1213612354509914113/YXOjLhnB_400x400.jpg",
        estadio:"Ramón Tahuichi Aguilera",
        ciudad:"Santa Cruz",
        presidente:"Mario Fránklin Chávez Méndez",
        entrenador:"Miguel Ángel Portugal",
        url:"/equipo/8"
      },
      {
        id:9,
        nombre:"Club Deportivo Guabirá",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Club_Deportivo_Guabira.png/270px-Club_Deportivo_Guabira.png",
        estadio:"Estadio Gilberto Parada",
        ciudad:"Montero",
        presidente:"Rafael E. Paz Hurtado",
        entrenador:"Victor Hugo Andrada",
        url:"/equipo/9"
      },
      {
        id:10,
        nombre:"Club Real Potosí",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Club_Real_Potos%C3%AD.png/172px-Club_Real_Potos%C3%AD.png",
        estadio:"Víctor Agustín Ugarte",
        ciudad:"Potosí",
        presidente:"Calixto Santos Javier",
        entrenador:"Marcos Ferrufino",
        url:"/equipo/10"
      },
      {
        id:11,
        nombre:"Club Aurora",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Club_Aurora.png/193px-Club_Aurora.png",
        estadio:"Felix Capriles",
        ciudad:"Cochabamba",
        presidente:"Jaime Cornejo",
        entrenador:"Julio Cesar Baldivieso",
        url:"/equipo/11"
      },
      {
        id:12,
        nombre:"Club Atlético Palmaflor",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Palmaflor.png/285px-Palmaflor.png",
        estadio:"Municipal de Quillacollo",
        ciudad:"Quillacollo",
        presidente:"Cesar Aduviri",
        entrenador:"Humberto Viviani",
        url:"/equipo/12"
      },
      {
        id:13,
        nombre:"Club Real Santa Cruz",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Escudo_Club_Real_Santa_Cruz.png/144px-Escudo_Club_Real_Santa_Cruz.png",
        estadio:"Real Santa Cruz",
        ciudad:"Santa Cruz",
        presidente:"",
        entrenador:"José Peña",
        url:"/equipo/13"
      }
    ];
    if(this.tipo=='equipo')
      this.equipo_seleccionado=this.equipo[this.folder];
    //console.log(this.folder);
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
