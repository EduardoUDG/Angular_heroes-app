import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroComponent } from './pages/hero/hero.component';
import { SearchComponent } from './pages/search/search.component';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'list',     component: ListComponent },
      { path: 'add',      component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: 'search',   component: SearchComponent },
      { path: ':id',      component: HeroComponent },
      { path: '**',       redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
