import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}}details!</h2>
    <div><label >id:</label>{{hero.id}}</div>
    <div>
      <label >name:</label>
      <input type="text" [(ngModel)]="hero.name" placeholder="name">
    
    </div>
  `,
})

export class AppComponent  {
  // name = 'worlddklfj ';
  title = 'Tours of Heroes';
  // hero = 'windstorm';
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
  // const HEROES: Hero[] = [
  //   { id:11,name: 'Mr. Nice'}
  // ];
}
