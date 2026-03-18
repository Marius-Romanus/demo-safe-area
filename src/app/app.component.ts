import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() {}

  async ngOnInit() {
    await StatusBar.setOverlaysWebView({ overlay: false });
  }
}
