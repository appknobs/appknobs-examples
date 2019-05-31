import { Component, OnInit } from '@angular/core';
import {AppknobsService} from '@appknobs/angular';
import example from '../../../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private appknobs = null;
  title = 'angular-example';

  constructor(appknobs: AppknobsService) {
    this.appknobs = appknobs;
  }

  ngOnInit() {
    this.appknobs.evaluate(example.payload);
  }
}
