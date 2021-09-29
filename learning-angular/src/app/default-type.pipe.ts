import { Pipe, PipeTransform } from '@angular/core';
import { MarvelHero } from 'helper-files/MarvelHero';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(hero: MarvelHero, defaultLocation?: string): string {
    return hero.currentLocation || defaultLocation || "London";
  }

}
