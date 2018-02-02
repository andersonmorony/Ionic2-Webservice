import { Component } from '@angular/core';

import { CarrosPage } from '../carros/carros';
import { FavoritosPage } from '../favoritos/favoritos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CarrosPage;
  tab2Root = FavoritosPage;

  constructor() {

  }
}
