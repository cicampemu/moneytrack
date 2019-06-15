import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  Article: any = [];
  selectedValue: string;

  constructor(public Api: ApiService) { }

  ngOnInit() {
    this.getArticles();
  }
  // Get payments list
  getArticles() {
    return this.Api.getAllArticles().subscribe((data: {}) => {
      this.Article = data;
    });
  }

}
