import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

/*
interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  /*
  componentes : Componente[]=[
    {
      name:'Alert',
      icon: 'bicycle-outline',
      redirecTo:'/alert'
    },
    {
      name:'Action-Sheet',
      icon: 'bug-outline',
      redirecTo:'/action-sheet'
    },
    {
      name:'Card',
      icon: 'cafe-outline',
      redirecTo:'/card'
    },
    {
      name:'Inputs',
      icon: 'flower-outline',
      redirecTo:'/inputs'
    },

  ]
  */

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }



}
