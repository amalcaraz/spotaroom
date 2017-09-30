import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CityList } from './home.model';


@Component({
  selector: 'sar-home',
  templateUrl: 'home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class HomeComponent implements OnInit {

  mockedCities: CityList = [
    {id: 'madrid', name: 'Madrid'},
    {id: 'barcelona', name: 'Barcelona'},
    {id: 'valencia', name: 'Valencia'},
    {id: 'london', name: 'Londres'}
  ];

  constructor() {
  }

  ngOnInit() {


  }

}
