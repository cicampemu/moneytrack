import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  Payment: any = [];

  constructor(public Api: ApiService) { }

  ngOnInit() {
    this.getPayments()
  }
  // Get employees list
  getPayments() {
    return this.Api.getAllPayments().subscribe((data: {}) => {
      this.Payment = data;
    });
  }

}
