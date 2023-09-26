import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usuario={
    nombre: '',
    email:'',
    edad:'',
    password:'',
    jornada:''
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  async Enviar(){
    const alert = await this.alertController.create({
      header: 'Gracias!' + ' '+ this.usuario.nombre,
      message: 'Sus datos han sido enviados!',
      buttons: ['OK'],
    });

    await alert.present();
    this.usuario.edad='';
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.password='';
  }


}
