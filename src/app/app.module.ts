import { AppRouterModule } from './app-route.module';

import { NavbarCollapseDirective } from './shared/navbarCollapse.directive';
import { DropDownDirective } from './shared/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,DropDownDirective,NavbarCollapseDirective, HomeComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
