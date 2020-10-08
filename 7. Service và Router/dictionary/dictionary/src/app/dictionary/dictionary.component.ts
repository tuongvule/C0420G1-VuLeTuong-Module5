import { Component, OnInit } from '@angular/core';
import {IWord} from '../IWord';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words: IWord[] = [];
  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.words = this.dictionaryService.getAll();
  }

}
