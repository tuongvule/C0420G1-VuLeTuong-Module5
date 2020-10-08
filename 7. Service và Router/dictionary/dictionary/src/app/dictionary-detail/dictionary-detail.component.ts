import { Component, OnInit, OnDestroy} from '@angular/core';
import {IWord} from '../IWord';
import {ActivatedRoute, convertToParamMap, ParamMap} from '@angular/router';
import {DictionaryService} from '../dictionary.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  words: IWord[] = [];
  private sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {key, meaning};
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
