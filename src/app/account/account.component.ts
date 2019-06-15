import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  Balance: any = [];
  todayDate = new Date();

  constructor(public Api: ApiService) { }

  ngOnInit() {
    this.getBalance();
  }
  // Get employees list
  getBalance() {
    return this.Api.getBalance().subscribe((data: {}) => {
      this.Balance = data;
    });
  }

}
