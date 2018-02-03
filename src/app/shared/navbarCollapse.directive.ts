import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive
({
    selector:'[appNavCollapse]',

})
export class NavbarCollapseDirective{

    @HostBinding('class.in') isCollapsed = false;
    @HostListener('click') toggleCollapse()
    {
        this.isCollapsed = !this.isCollapsed;
    }

}