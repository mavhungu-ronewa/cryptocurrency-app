import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pruductsRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pruductsRoutes)],
})
export class PruductsModule {}
