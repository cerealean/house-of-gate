import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'monsters',
    loadChildren: () => import('./monsters/monsters.module').then(m => m.MonstersModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'monsters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
