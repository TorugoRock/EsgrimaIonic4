import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProfileService } from 'src/app/services/user/profile.service';
import { MenuController } from '@ionic/angular'
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userOp: any;
  fotoPerfilURL: string;
  userProfile: any;
  
 constructor(public router: Router,
            public profileService:ProfileService,
            private menu: MenuController) { 
               
    
  } 


  voltar(){
    this.router.navigate(['/login'])
  }
  novaLuta(){
    this.router.navigate(['/registra-lutadores'])
  }
  historico(){
    this.router.navigate(['/minhas-lutas'])
  } 
 
  ngOnInit() {


    // recupera a foto do perfil do usuario
    this.profileService
    .getUserProfile()
    .get()
    .then( userProfileSnapshot => {
      this.fotoPerfilURL = userProfileSnapshot.data().fotoPerfilURL;  
      this.setFoto();
    });
    
   }

   setFoto(){
     if(this.fotoPerfilURL){
      document.getElementById("fotoButton").setAttribute("src",`http://ucarecdn.com/${ this.fotoPerfilURL}/`);
     }
   }

   openMenu(){
     this.menu.open('menu');
   }

}
