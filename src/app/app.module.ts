import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { MydirectiveDirective } from './directives/mydirective.directive';
// import { RetryInterceptorProvider } from './interceptors/retry-provider';
import { retryInterceptor } from './interceptors/retry.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([retryInterceptor( {count: 5})])),
    // RetryInterceptorProvider,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useValue: { count: 5, delay: 2000}
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
