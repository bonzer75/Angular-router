import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor (
    private service: ProductsService,
    private route: ActivatedRoute
  ) {}

  let limit = 10;
  let offset = 0;
  let products: Product[] = []
  let productId: string | null = null;

  ngOnInit(): void {
    this.service.getAll(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product')
    })
  }
}
