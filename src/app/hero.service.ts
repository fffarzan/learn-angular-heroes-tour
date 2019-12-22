import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /** synchronous signature */
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  /** asynchronous signature */
  getHeroes(): Observable<Hero[]> {  // get `mock-heroes` data as `Hero` class style.
    this.messageService.add('HeroService: fetched heroes');  // send the message "after" fetching the heroe.
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Angular will inject the singleton `MessageService` into 
    that property when it creates the service. */
  constructor(private messageService: MessageService) { }
}
