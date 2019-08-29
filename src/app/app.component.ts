import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import {Character} from './Character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  constructor(private cs: ConfigService) {
  }
  ngOnInit() {
    this.cs.getCharacters().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }
}
