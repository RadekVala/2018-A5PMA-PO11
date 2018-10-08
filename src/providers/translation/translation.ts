import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TranslationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TranslationProvider Provider');
  }

}
