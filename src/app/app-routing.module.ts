import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { HomeComponent } from './components/home/home.component';
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
    path: 'campaigns',
    loadChildren: () => import('./campaigns/campaigns.module').then(e => e.CampaignsModule)
  },
  {
    path: 'spells',
    loadChildren: () => import('./spells/spells.module').then(e => e.SpellsModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule)
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
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'changelog',
    component: ChangelogComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'can-i-hit', loadChildren: () => import('./can-i-hit/can-i-hit.module').then(m => m.CanIHitModule) },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
