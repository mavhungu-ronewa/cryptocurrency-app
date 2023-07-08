import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  { 
    path: '', component: NxWelcomeComponent, pathMatch: 'full'
  },
  {
    path: 'frontend', loadChildren : ()=> import('@crypocurrency/frontend-ui').then(m => m.FrontendUiModule)
  },
  {
    path: 'product', loadChildren: ()=> import('@crypocurrency/pruducts').then(m=>m.PruductsModule)
  }
];
