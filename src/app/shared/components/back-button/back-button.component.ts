import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'devt-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {

    @Output() back: EventEmitter<Boolean> = new EventEmitter<Boolean>();

    onClick(): void {
        this.back.emit(true);
    }   

}
