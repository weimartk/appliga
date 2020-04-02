import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioProviderService {

  constructor(public http:HttpClient) {

   }
  cargarUsuarios(){
    return this.http.get("https://jsonplaceholder.typicode.com/users/");
  }
  crearUsuario(dato){
    console.log(dato);
    return this.http.post("https://jsonplaceholder.typicode.com/users/",dato);
  }
}
