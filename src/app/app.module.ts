import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Components
import { LoaderComponent } from './components/loader/loader.component';

// Interceptors
import { MyInterceptor } from './interceptors/my.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HeadersInterceptor } from './interceptors/headers.interceptor';

//Angular Material
import {MatMenuModule, MatButtonModule ,MatToolbarModule, MatIconModule} from '@angular/material';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';

import { ToastrModule } from 'ngx-toastr';
import { ErrorComponent } from './components/error/error.component';
import { MyService } from './services/my.service';

const AngularMaterialElements = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
]

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialElements,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    MyService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true  },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
