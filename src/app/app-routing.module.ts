import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/homePage.component';
//import { SearchPageComponent } from './pages/search/searchPage.component';
import { HistoryPageComponent } from './pages/history/historyPage.component';
import { ErrorPageComponent } from './pages/error/errorPage.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
    },
    {
        path: 'search',
        loadChildren: () => import('./pages/search/searchPage.module').then(m => m.SearchPageModule)
    },
    {
        path: 'history',
        component: HistoryPageComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }