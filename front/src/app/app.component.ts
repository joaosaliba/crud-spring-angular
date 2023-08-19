import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ccliente';

  ngOnInit() {
    this.setRandomBackground();
  }

  setRandomBackground() {
    const randomImageId = Math.floor(Math.random() * 1000);
    const imageUrl = `url(https://picsum.photos/id/${randomImageId}/1920/1080)`;
    document.body.style.backgroundImage = imageUrl;
  }
}
