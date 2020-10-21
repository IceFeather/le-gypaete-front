import { Pipe, PipeTransform } from '@angular/core';
import { Langue } from './langue.type';

@Pipe({
  name: 'translateSelf'
})
export class TranslateSelfPipe implements PipeTransform {

  transform(value: {[K in Langue]?: any}, lang, defaultLang): any {
    console.log(value, lang, defaultLang);
    let translated = value[lang];
    if (!translated || 0 === translated.length) {
      console.log("default", value[defaultLang]);
      return value[defaultLang];
    } else {
      console.log("trans", translated);
      return translated;
    }
  }

}
