import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /** Synchronous signature */
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  /** Asynchronous signature */
  getHeroes(): Observable<Hero[]> {  // get `mock-heroes` data as `Hero` class style.
    // TODO: send the message "after" fetching the heroe.
    this.messageService.add('HeroService: fetched heroes')
    /** `of(HEROES)` returns an observable <Hero[]> emits a 
      * "single value", an array of data from the body of
      * the HTTP response. */
    return of(HEROES);  
  }
  
  // Angular will inject the singleton `MessageService` into that 
  // property when it creates the service.
  constructor(private messageService: MessageService) { }
}
