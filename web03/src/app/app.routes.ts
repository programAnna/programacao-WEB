import { Routes } from '@angular/router';
import { Contato } from './contato/contato';

export const routes: Routes = [
  { path: '', component: Contato },
  { path: 'contato', component: Contato }
];