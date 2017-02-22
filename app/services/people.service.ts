import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from '../people/person';
import {Subscribable} from "rxjs/Observable";
import {HypermediaUtilService} from "./hypermedia-util.service";

@Injectable()
export class PeopleService {
  private baseUrl: string = 'http://swapi.co/api';

  constructor(
    private http : Http,
    private hu: HypermediaUtilService) {
  }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(x => this.mapPersons(x))
      .catch(handleError);
      return people$;
  }

  get(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(x => this.mapPerson(x));
    return person$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapPerson(response: Response): Person {
    // toPerson looks just like in the previous example
    return this.toPerson(response.json());
  }

  private mapPersons(response: Response): Person[] {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(this.toPerson.bind(this));
  }

  private toPerson(r: any): Person {
    let person = <Person>({
      id: extractId(r),
      url: r.url,
      name: r.name,
      weight: r.mass,
      height: r.height,
      hair: r.hair_color,
      skin: r.skin_color,
      eyes: r.eye_color,
      birth: r.birth_year,
      gender: r.gender,
      homeworld: this.hu.follow(r.homeworld),
      films: this.hu.follow(r.films),
      species: this.hu.follow(r.species),
      vehicles: this.hu.follow(r.vehicles),
      starships: this.hu.follow(r.starships),
    });
    console.log('Parsed person:', person);
    return person;
  }
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
