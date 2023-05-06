
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CollectionCardItemComponent } from './components/collection-card-item/collection-card-item.component';
import { TopicCardItemComponent } from './components/topic-card-item/topic-card-item.component';
import { HeadetDetailComponent } from './components/header-detail/header-detail.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
    declarations: [
        CollectionCardItemComponent,
        TopicCardItemComponent,
        HeadetDetailComponent,
        BackButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        CollectionCardItemComponent,
        HeadetDetailComponent,
        BackButtonComponent,
        TopicCardItemComponent
    ]
    /* NO PROVIDERS */
})
export class SharedModule {
}