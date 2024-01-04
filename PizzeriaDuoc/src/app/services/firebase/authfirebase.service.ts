import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthfirebaseService {

  constructor(private auth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      console.log("sesion iniciada")
    } catch (error) {
      console.error("error al iniciar sesion")
    }
  }


  async register(email: string, password: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      console.log("usuario creado")
    } catch (error) {
      console.error("error al crear usuario")
    }
  }


  async logout() {
    try {
      await this.auth.signOut()
      console.log("sesion finalizada")
    } catch (error) {
      console.error("error al finalizar sesion")
    }
  }

}
