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
    loadComponent: () => import('./components/privacy-policy/privacy-policy.component').then(c => c.PrivacyPolicyComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./components/terms/terms.component').then(c => c.TermsComponent)
  },
  {
    path: 'items',
    loadComponent: () => import('./items/items.component').then(i => i.ItemsComponent)
  },
  {
    path: 'magic-item-tables',
    loadComponent: () => import('./magic-item-tables/magic-item-tables.component').then(c => c.MagicItemTablesComponent)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'changelog',
    loadComponent: () => import('./components/changelog/changelog.component').then(c => c.ChangelogComponent)
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
