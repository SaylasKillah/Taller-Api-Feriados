import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Data } from '../interfaces/interfaces';
import { ApiTallerService } from 'src/app/servicios/api-taller.service';

@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss'],
})
export class FeriadoPage implements OnInit {

  data: Data[]=[];
  constructor(private menuController: MenuController,
              private apiService: ApiTallerService) { }

  ngOnInit() {
    this.apiService.Feriados().subscribe(resp => {
      console.log(resp)
      this.data.push(...resp.data);
    })
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}
