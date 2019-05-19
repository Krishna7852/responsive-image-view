import {Component, Input} from '@angular/core';
import {Image} from '../models/image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {
  @Input() public images: Image[] = [];
}
