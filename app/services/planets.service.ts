import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Planet } from '../planets/planet';

@Injectable()
export class PlanetsService {
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http){
  }

  getAll(): Observable<Planet[]>{
    let planets$ = this.http
      .get(`${this.baseUrl}/planets`, {headers: this.getHeaders()})
      .map(mapPlanets)
      .catch(handleError);
      return planets$;
}

  get(id: number): Observable<Planet> {
    let planet$ = this.http
      .get(`${this.baseUrl}/planets/${id}`, {headers: this.getHeaders()})
      .map(mapPlanet);
      return planet$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapPlanets(response:Response): Planet[]{
  return response.json().results.map(toPlanet)
}

function toPlanet(r:any): Planet{
  let planet = <Planet>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    rotation: r.rotation_period,
    orbit: r.orbital_period,
    diameter: r.diameter,
    climate: r.climate,
    gravity: r.gravity,
    terrain: r.terrain,
    surface_water: r.surface_water,
    population: r.population,
    residents: r.residents,
    films: r.films,
  });
  console.log('Parsed planet:', planet);
  return planet;
}

function extractId(planetData:any){
  let extractId = planetData.url.replace('http://swapi.co/api/planets/','').replace('/','');
  return parseInt(extractId);
}

function mapPlanet(response:Response): Planet{
  return toPlanet(response.json());
}

function handleError (error: any) {
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  return Observable.throw(errorMsg);
}
