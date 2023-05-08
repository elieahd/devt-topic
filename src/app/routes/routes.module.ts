import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { CollectionListComponent } from './collection-list/collection-list.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';

const ROUTES: Routes = [
  { path: '', component: CollectionListComponent  },
  { path: ':id', component: CollectionDetailComponent },
  { path: '**', redirectTo: 'collections', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CollectionListComponent,
    CollectionDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RoutesModule {
}
