import { AsyncPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Langue } from './langue.type';

@Pipe({
  name: 'translateSelf'
})
export class TranslateSelfPipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: {[K in Langue]?: any}, lang = this.translateService.currentLang, defaultLang = this.translateService.defaultLang): any {
    let translated = value[lang];
    if (!translated || 0 === translated.length) {
      return value[defaultLang];
    } else {
      return translated;
    }
  }

}
