import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth : AngularFireAuth) {
    
   }

  login(email : string, password : string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  signup(email : string, password : string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }
  logout(){
    return this.afAuth.signOut();
  }
  hasUser(){
    return this.afAuth.authState;
  }
  get email(){
    return this.afAuth.authState;
  }
  
  

  
  
}
