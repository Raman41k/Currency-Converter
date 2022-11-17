import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {IConvertor} from "../../interfaces";

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {
  selectedFrom: string = 'USD';
  selectedTo: string = 'UAH';
  amount = 1;
  result: IConvertor;

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  calc() {
    if (this.amount && this.selectedFrom && this.selectedTo) {
      this.mainService.convertor(this.amount, this.selectedFrom, this.selectedTo).subscribe(value => {
        this.result = value;
      })
    }


  }
}
