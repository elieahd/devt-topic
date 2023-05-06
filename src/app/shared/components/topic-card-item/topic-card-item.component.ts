import { Component, Input } from '@angular/core';
import { Topic } from '@core/models/topic.model';

@Component({
  selector: 'devt-topic-card-item',
  templateUrl: './topic-card-item.component.html'
})
export class TopicCardItemComponent {

  @Input() public topic!: Topic | null;

}
