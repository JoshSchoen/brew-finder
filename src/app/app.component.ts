import { Component, OnInit } from '@angular/core';
import { GeoService } from './geo.service';
import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeoService]
})
export class AppComponent implements OnInit {
  title = 'Brew Finder';
  brewerySelected: Object[];
  cords: Object[];
  lat: number;
  lng: number;
  zoom: number = 10;
  breweries: Observable<any>;

  options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

constructor(
  private geoService: GeoService) {}

clickedMarker(brewery: any) {
     this.brewerySelected = brewery;
   }

success(pos): any {
  var crd = pos.coords;
  this.lat = crd.latitude;
  this.lng = crd.longitude;
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  this.geoService.query(this.lat, this.lng).subscribe(res => {
      this.breweries = res.data;
      console.log(res.data);
    }, (error: Error) => {
        console.log(error);
      });
};

error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error, this.options);
  }
}
