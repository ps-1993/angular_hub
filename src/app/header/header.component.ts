import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit
{
@Input() navData;
isLoggedIn :boolean=false;
ngOnInit(){

}
login()
{
    this.isLoggedIn =true;
}
logout(){
    this.isLoggedIn=false;
}


}