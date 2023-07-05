import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) {}

  categoryId: string | null = null; 
  products: Product[] = []

  ngOnIni(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id')
      console.log(this.categoryId);
      if(this.categoryId) {
        this.service.getByCategory(this.categoryId, 10, 0).subscribe(data => {
          this.products = data
        })
      }
      
    })
  }
}
