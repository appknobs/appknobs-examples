import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { newBrowserClient } from '@appknobs/client';
import { AppknobsModule} from '@appknobs/angular';
import example from '../../../config';

const appknobsClient = newBrowserClient({
  appId: example.appId,
  apiKey: example.apiKey
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppknobsModule.forRoot({client: appknobsClient}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
