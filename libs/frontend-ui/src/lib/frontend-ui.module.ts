import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { frontendUiRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(frontendUiRoutes)],
})
export class FrontendUiModule {}
