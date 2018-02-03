import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes:Routes = [
    {path:'' ,redirectTo:'/home',pathMatch:'full' },
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'electornics',component:LoginComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    
})
export class AppRouterModule{

}