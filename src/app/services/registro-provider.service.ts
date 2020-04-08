import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RegistroProviderService {

  constructor(private sql:SQLite, public alertCtrl:AlertController) {
   }
  crearDB(){
    this.sql.create({
      name:"DB.db",
      location:'default'
    }).then((db:SQLiteObject)=>{
      db.executeSql("CREATE TABLE IF NOT EXISTS usuario(name VARCHAR(50) not null,email VARCHAR(50) not null, pass VARCHAR(50) not null)",[]).then(
        async ()=>{console.log("tabla creada");
          const alert=await this.alertCtrl.create({
          header: 'Aviso',
          subHeader: 'La tabla fue creada correctamente',
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'secondary',
            }]
        });
        alert.present();
        }).catch(async (error)=>{console.log("Error creando tabla: "+error);          
        const alert=await this.alertCtrl.create({
          header: 'Aviso',
          subHeader: "Error creando tabla: "+JSON.stringify(error),
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'secondary',
            }]
        });
        alert.present()
});
    }).catch((error)=>{console.log("Error creando DB: "+JSON.stringify(error))});    
  }
  insertarUsuario(usuario:any){
    this.sql.create({
      name:"DB.db",
      location:'default'
    }).then((db:SQLiteObject)=>{
//      db.executeSql("INSERT INTO usuarios (name,email,pass) VALUES ('"+usuario.name+"','"+usuario.email+"','"+usuario.password+"')")
      db.executeSql("INSERT INTO usuario (name,email,pass) VALUES (?,?,?)",[usuario.name,usuario.email,usuario.password])
        .then(async ()=>{
          console.log('usuario insertado');
          const alert=await this.alertCtrl.create({
          header: 'Aviso',
          subHeader: 'Usuario insertado correctamente',
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'secondary',
            }]
        });
        alert.present();

        })
        .catch(async (error)=>{
          console.log("Error en inserción: "+error);
          const alert=await this.alertCtrl.create({
            header: 'Aviso',
            subHeader: 'Error insertando: '+JSON.stringify(error),
            buttons: [
              {
                text: 'Aceptar',
                cssClass: 'secondary',
              }]
          });
          alert.present();
          });
    }).catch((error)=>console.log("Error creando DB: "+JSON.stringify(error)));
  }
  getUsuario(email:string)
  {
    this.sql.create({
      name:"DB.db",
    }).then((db:SQLiteObject)=>{
      db.executeSql("SELECT * FROM usuarios WHERE email='"+email+"'").then((data)=>{
        return data;
      }).catch((error)=>{
        console.log("Error en select: "+error);
      })
    }).catch((error)=>console.log("Error creando DB: "+error));
  }
}
