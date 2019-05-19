import {Component, OnInit} from '@angular/core';
import {HttpHandlerService} from './services/http-handler.service';
import {Image} from './models/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  public showSlider = true;
  public imageSize = {
    width: 280,
    height: 350
  };
  public images: Image[] = [];

  get slideCount() {
    return window.innerWidth <= 1000 ? 2 : 3;
  }

  constructor(private httpService: HttpHandlerService) {
    this.successHandler = this.successHandler.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
    this.images = [{thumbImage: '', title: ''}];
  }

  public ngOnInit() {
    this.initialize();
  }

  public onViewImages() {
    this.showSlider = !this.showSlider;
  }

  private initialize() {
    this.httpService.images.subscribe(this.successHandler, this.errorHandler);
  }

  private successHandler({results}) {
    this.images = results.map(({picture: {large}, name: {first, last}}) => {
      return {
        thumbImage: large,
        title: `${first} ${last}`
      };
    });
  }

  private errorHandler({error}) {
    console.error('Error while loading data:', error);
  }
}
