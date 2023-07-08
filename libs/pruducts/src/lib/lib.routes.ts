import { Route } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const pruductsRoutes: Route[] = [
  { 
    path: '',
      children: [
        { path: '', component: ProductComponent },
        { path: ':id',
          children: [
            { path: '', component: ProductComponent }
          ]
        }
      ]
  }
];
