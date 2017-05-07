import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>my favorite hero is :{{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">{{hero.name}}</li>
    </ul>
    <p *ngIf="heroes.length > 3">there are many  heroes </p>
  `,
})
export class AppComponent  {
  title = 'Tours of Heroes';
  // heroes = ['Windstorm','Bombasto','Magneta','Tornado'];
  heroes = [
    new Hero(1,'windstorm'),
    new Hero(13,'Bombasto'),
    new Hero(15,'Magneta'),
    new Hero(20,'Tornado')
  ]
  myHero = this.heroes[0];

}
