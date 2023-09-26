import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/inicio'
    },
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
    {
      name:'Formulario',
      icon: 'attach-outline',
      redirecTo:'/formulario'
    },
    {
      name:'Noticias',
      icon: 'newspaper-outline',
      redirecTo:'/noticias'
    },
    {
      name:'Feriado',
      icon: 'newspaper-outline',
      redirecTo:'/feriado'
    },

  ]




}
