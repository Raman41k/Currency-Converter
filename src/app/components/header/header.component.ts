import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {ILatest} from "../../interfaces";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  latestUSD:ILatest;
  latestEUR:ILatest;

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.mainService.getLatest('USD','UAH').subscribe(value => {
      this.latestUSD = value;
    })
    this.mainService.getLatest('EUR','UAH').subscribe(value => {
      this.latestEUR = value;
    })
  }

}
