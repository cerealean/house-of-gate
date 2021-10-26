import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  {
    path: 'monsters',
    loadChildren: () => import('./monsters/monsters.module').then(m => m.MonstersModule)
  },
  {
    path: 'encounters',
    loadChildren: () => import('./encounters/encounters.module').then(e => e.EncountersModule)
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'monsters'
  },
  {
    path: '**',
    redirectTo: 'monsters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
