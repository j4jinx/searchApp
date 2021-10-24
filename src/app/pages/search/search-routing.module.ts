import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SearchFormPageComponent } from './form/searchFormPage.component';
import { SearchResultPageComponent } from './result/searchResultPage.component';
import { SearchProfilePageComponent } from './profile/searchProfilePage.component';

const routes: Routes = [
    {
        path: '',
        component: SearchFormPageComponent
    },
    {
        path: 'result/:qry',
        component: SearchResultPageComponent
    },
    {
        path: 'profile/:username',
        component: SearchProfilePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule { }