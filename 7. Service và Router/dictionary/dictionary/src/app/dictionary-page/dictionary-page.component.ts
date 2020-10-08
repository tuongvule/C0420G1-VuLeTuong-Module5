import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {IWord} from '../IWord';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  word: IWord;
  words: IWord[] = [];
  constructor(private dictionaryService: DictionaryService) { }
  search(key){
    const meaning = this.dictionaryService.search(key);
    this.word = {
      key,
      meaning
    };
  }
  ngOnInit(): void {
   this.words = this.dictionaryService.getAll();
  }

}
