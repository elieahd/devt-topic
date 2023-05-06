import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CollectionService } from '@core/services/collection.service';
import { Collection } from '@core/models/collection.model';

@Component({
  selector: 'devt-collections',
  templateUrl: './collection-list.component.html'
})
export class CollectionListComponent implements OnInit {

  public collections$!: Observable<Collection[]>;
  
  constructor(
    private readonly collectionService: CollectionService) {
  }

  ngOnInit(): void {
    this.collections$ = this.collectionService.getAll();
  }

}
