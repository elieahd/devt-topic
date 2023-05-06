import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';  
import { RoutesModule } from './routes/routes.module';  

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, RoutesModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
