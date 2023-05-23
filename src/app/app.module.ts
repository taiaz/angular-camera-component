import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './components/camera/camera.component';

@NgModule({
  imports: [BrowserModule, FormsModule, WebcamModule],
  declarations: [AppComponent, CameraComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
