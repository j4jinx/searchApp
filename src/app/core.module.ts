import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { UserService } from './services/user.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        UserService
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
})
export class CoreModule { }