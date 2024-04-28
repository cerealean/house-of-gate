import { Routes } from '@angular/router';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';

export const routes: Routes = [
  {
    path: 'monsters',
    loadComponent: () => import('./monsters/components/monsters/monsters.component').then(m => m.MonstersComponent)
  },
  {
    path: 'encounters',
    loadChildren: () => import('./encounters/encounters.routes').then(e => e.routes)
  },
  {
    path: 'campaigns',
    loadComponent: () => import('./campaigns/campaigns-landing/campaigns-landing.component').then(e => e.CampaignsLandingComponent)
  },
  {
    path: 'spells',
    loadComponent: () => import('./spells/components/spells/spells.component').then(e => e.SpellsComponent)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./feedback/feedback.component').then(m => m.FeedbackComponent)
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
  { path: 'can-i-hit', loadComponent: () => import('./can-i-hit/can-i-hit.component').then(m => m.CanIHitComponent) },
  { path: 'characters', loadChildren: () => import('./characters/characters.routes').then(m => m.routes) },
  {
    path: '**',
    redirectTo: 'home'
  }
];
