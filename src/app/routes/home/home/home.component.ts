import {Component, OnInit} from '@angular/core';
import {Settings} from "../../../public/settings/settings";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public language = Settings.language;

  constructor() {
  }

  ngOnInit() {
  }

}
