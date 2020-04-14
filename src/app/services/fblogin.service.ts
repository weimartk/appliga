import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class FbloginService {

  constructor(private fb: Facebook,private googlePlus: GooglePlus) { }
  loginFB(){
/*    this.fb.login(['id','name','email']).then
    ((res:FacebookLoginResponse)=>{
      return('Logueado correctamente'+JSON.stringify(res));
    }).
    catch((error)=>{
      return('Error:'+JSON.stringify(error));
    });*/

  }
  loginG(){
    this.googlePlus.login({})
      .then(res => {alert('Login OK '+JSON.stringify(res));
        return (res);})
      .catch(err => {alert ('Error');
        return ("Error"+(err))});
  }
}
