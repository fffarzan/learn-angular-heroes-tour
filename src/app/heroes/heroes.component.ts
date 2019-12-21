import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({  
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];  // expose HEROES array.

  selectedHero: Hero;
  onSelect(hero: Hero): void {  // an object will be recieved from template with `Hero` class type.
    this.selectedHero = hero;
  }

  /** @-The parameter simultaneously defines a private heroService property and
    * identifies it as a HeroService injection site.
    * @-**Constructor certainly shouldn't call a function that makes HTTP requests to a 
    * remote server as a real data service would. */
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /** synchronous signature */
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  /** Asynchronous signature */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)  // `subscribe` is like `promise` in js!
  }

}
