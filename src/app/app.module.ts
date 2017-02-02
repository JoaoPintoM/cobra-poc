import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { StateManagerService } from './services/state-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    StateManagerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (stateService: StateManagerService) => () => stateService.load(),
      deps: [StateManagerService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
