import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { WebsiteModule } from '../../website.module';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [ CategoryComponent ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    WebsiteModule,
    QuicklinkModule
  ]
})
export class CategoryModule { }
