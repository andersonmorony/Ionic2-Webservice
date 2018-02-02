import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroServiceProvider } from  '../../providers/carro-service/carro-service';

import { Icarro } from '../../interfaces/icarro';
import { DetalhesPage } from '../../pages/detalhes/detalhes';

/**
 * Generated class for the CarrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html',
})
export class CarrosPage {

  listaDeCarros: Icarro[];
  imagemPadrao: string = '//png.icons8.com/color/300/000000/fiat-500.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService: CarroServiceProvider) {
    this.carroService.listaCarros().subscribe(data => {
      this.listaDeCarros = data;
        console.log(this.listaDeCarros);
    },erro =>{
      console.log(erro);
    } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrosPage');
  }

  abrirDetalhes(carro:Icarro) {
    this.navCtrl.push(DetalhesPage, {carro:carro});
  }


}
