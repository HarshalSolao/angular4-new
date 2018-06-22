import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewCmpRouteComponent } from './new-cmp-route/new-cmp-route.component';
import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewCmpRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'new-cmp-route',
        component: NewCmpRouteComponent
      }
    ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
