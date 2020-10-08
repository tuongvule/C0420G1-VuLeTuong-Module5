import { Injectable } from '@angular/core';
import {IWord} from './IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'},
    {key: 'viet co ho', meaning: 'có thật nhé'}
  ];
  constructor() { }
  getAll(){
    return this.words;
  }
  search(word: string): string{
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'éo tìm thấy nhé!';
  }
}
