import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Collection } from '@core/models/collection.model';

@Component({
  selector: 'devt-collection-card-item',
  templateUrl: './collection-card-item.component.html'
})
export class CollectionCardItemComponent {

  @Input() public collection!: Collection;

  constructor(private readonly router: Router) {}

  onClicked(): void {
    this.router.navigateByUrl(`/collections/${this.collection.id}`);
  }

  get topicsCount(): number {
    if (this.collection && this.collection.topics) {
      return this.collection.topics.length;
    } else {
      return 0;
    }
  }

}
