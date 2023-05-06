import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Collection } from "@core/models/collection.model";
import { Topic } from "@core/models/topic.model";
import collectionsData from "../data/collections.json"    

@Injectable()
export class CollectionService {

    private readonly collections: Collection[] = collectionsData as Collection[];

    public getAll(): Observable<Collection[]> {
        return of(this.collections);
    }

    public getRandomTopicByCollectionId(id: string | null): Observable<Topic> {
        const collection = this.collections.find(collection => collection.id == id);
        const topics = collection?.topics || [];
        return of(topics[Math.floor(Math.random() * topics.length)]);
    }

    public getById(id: string | null): Observable<Collection | undefined> {
        const collection = this.collections.find(collection => collection.id == id);
        return of(collection);
    }

}
