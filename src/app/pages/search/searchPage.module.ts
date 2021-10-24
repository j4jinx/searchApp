import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { SearchRoutingModule } from './search-routing.module';
import { CoreModule } from '../../core.module';

import { SearchFormPageComponent } from './form/searchFormPage.component';
import { SearchResultPageComponent } from './result/searchResultPage.component';
import { SearchProfilePageComponent } from './profile/searchProfilePage.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchRoutingModule,
        HttpClientModule,
        CoreModule
    ],
    declarations: [SearchFormPageComponent, SearchResultPageComponent, SearchProfilePageComponent]
})
export class SearchPageModule { }