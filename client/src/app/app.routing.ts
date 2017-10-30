import {ModuleWithProviders} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CrudComponent } from './crud/crud.component';
import {CrudlistComponent} from './crud/crudlist.component';
import {CrudeditComponent} from './crud/crudedit.component';
import {ContactusComponent} from './contactus/contactus.component';
import {PolicyComponent} from './policy/policy.component';
import {TermsComponent} from './terms/terms.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
const appRoutes : Routes =[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'aboutus',
        component:AboutusComponent
    },
    {
        path:'crud',
        component:CrudComponent
    },
    {
        path:'crud/edit/:id',
        component:CrudeditComponent
    },
    {
        path:'crud/list',
        component:CrudlistComponent
    },
    {
        path:'contactus',
        component:ContactusComponent
    },
    {
        path:'terms',
        component:TermsComponent
    },
    {
        path:'policy',
        component:PolicyComponent
    },
    {
        path:'**',
        component:PageNotFoundComponentComponent
    }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes) ;