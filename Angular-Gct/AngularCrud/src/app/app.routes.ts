import { Routes } from '@angular/router';
import { ListEmployess } from './employees/list-employess';
import { CreateEmployee } from './employees/create-employee/create-employee';

export const routes: Routes = [
    {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListEmployess
  },
  {
    path: 'create',
    component: CreateEmployee
  }
];
