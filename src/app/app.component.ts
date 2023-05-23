import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // webcamImage: WebcamImage = null;
  webcamImage: WebcamImage | undefined;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}
