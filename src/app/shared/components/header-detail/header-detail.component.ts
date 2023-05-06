import { Component, Input } from '@angular/core';

@Component({
  selector: 'devt-header-detail',
  templateUrl: './header-detail.component.html'
})
export class HeadetDetailComponent {

    @Input() public title: string = "";
    @Input() public description: string = "";

}
