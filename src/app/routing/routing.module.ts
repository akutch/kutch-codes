import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';

import { LandingComponent } from '../landing/landing.component';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: '',
        component: LandingComponent,
        pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {

}
