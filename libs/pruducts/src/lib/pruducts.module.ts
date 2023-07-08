import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pruductsRoutes } from './lib.routes';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pruductsRoutes)],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class PruductsModule {}
