import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GeoService {
  constructor(private _http: Http) { }

  query(lat, lng): any {
    console.log(lat, lng);
        console.log('test');
    return this._http.get(`http://api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${lng}&key=9b1938411521e24262caab481117fbdc&abv=+10&p=1`)
      .map((res: Response) => {
        return res.json();
      });

  }
}
