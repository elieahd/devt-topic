import { Component, OnInit } from '@angular/core';

import { CollectionService } from '@core/services/collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from '@core/models/topic.model';
import { Collection } from '@core/models/collection.model';

@Component({
  selector: 'devt-collection-detail',
  templateUrl: './collection-detail.component.html'
})
export class CollectionDetailComponent implements OnInit {

  public collection: Collection | undefined = undefined;
  public randomTopic!: Topic;
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly collectionService: CollectionService) {
  }

  ngOnInit(): void {
    const collectionId = this.route.snapshot.paramMap.get('id'); 
    this.collectionService.getById(collectionId)
    .subscribe(collection => {
      this.collection = collection;
      this.setRandomTopic();
    });
  }

  get collectionName(): string {
    return this.collection?.name || "";
  }

  get collectionDescription(): string {
    return this.collection?.description || "";
  }

  get topics(): Topic[] {
    return this.collection?.topics || [];
  }

  get hasTopic(): boolean {
    return this.topics.length > 0
  }

  setRandomTopic(): void {
    if (this.hasTopic) {
      let newRandomTopic = this.getRandomTopic();
      while (newRandomTopic == this.randomTopic) {
        newRandomTopic = this.getRandomTopic();
      }
    }
  }

  getRandomTopic(): Topic {
    return this.topics[Math.floor(Math.random() * this.topics.length)];
  }

  goToCollectionsRoute(): void {
    this.router.navigateByUrl(`/`);
  }

}
