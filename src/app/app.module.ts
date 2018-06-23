import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewCmpRouteComponent } from './new-cmp-route/new-cmp-route.component';
import { MyserviceService } from './myservice.service';
import { NewCmpHttpComponent } from './new-cmp-http/new-cmp-http.component';
import { NewCmpFormComponent } from './new-cmp-form/new-cmp-form.component';
import { NewCmpFormModelComponent } from './new-cmp-form-model/new-cmp-form-model.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewCmpRouteComponent,
    NewCmpHttpComponent,
    NewCmpFormComponent,
    NewCmpFormModelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
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
