import { Component, OnInit } from '@angular/core';
import {Event,Router,NavigationEnd,NavigationStart} from "@angular/router";
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
          this.heroes.push(hero);
      });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    window.alert("Are you sure you Want to delete Hero?")
    this.heroes = this.heroes.filter(h => h !== hero);
    console.log(this.heroes);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

