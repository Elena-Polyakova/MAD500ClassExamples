import { Pipe, PipeTransform } from '@angular/core';
import { MarvelHero } from 'helper-files/MarvelHero';

@Pipe({
  name: 'heroShortList'
})
export class HeroShortListPipe implements PipeTransform {

  transform(heros: MarvelHero[]): MarvelHero[] {
    return heros.filter(hero => hero.showOnList == true);
  }

}
