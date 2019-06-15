import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../article';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  articles: any = [];
  selectedValue: Article;

  constructor(public Api: ApiService) { }

  ngOnInit() {
    this.getArticles();
  }
  // Get payments list
  getArticles() {
    return this.Api.getAllArticles().subscribe((data: {}) => {
      this.articles = data;
    });
  }

  buy(id) {
    console.log(this.selectedValue);
    this.Api.createNewPayment(id).subscribe(data => {
      console.log("POST Request is successful ", data);
    });
  }

}
