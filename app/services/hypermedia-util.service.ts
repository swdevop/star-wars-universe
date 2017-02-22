import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class HypermediaUtilService {
  private verbose: boolean = false;

  constructor(private http: Http) {
    //this.verbose = true;
  }

  public follow(href: string, assignTo?: any): any {
    if (this.verbose) {
      console.log('follow| following link; href: %s', href);
    }
    assignTo = assignTo || {};

    this.http.get(href)
      .map(x => x.json())
      .subscribe(
        result => {
          Object.assign(assignTo, result);
          if (this.verbose) {
            console.log('follow| done; href: %s, result:', href, assignTo);
          }
        },
        error => {
          console.error('follow| failed; href: %s, error:', href, error);
          // TODO: handle errors
        });

    return assignTo;
  }
}
