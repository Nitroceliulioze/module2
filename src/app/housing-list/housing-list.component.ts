import { HousingLocation } from './../housing-location';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent {
  @Input() locationList: HousingLocation[] = [];
  result: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  searchHousingLocations(searchText: string) {
    if(!searchText) return;
    this.result = this.locationList.filter((location) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
    // this.result = this.locationList.filter((location) =>
    //   location.state.toLowerCase().includes(searchText.toLowerCase())
    // );
    // this.result = this.locationList.filter((location) =>
    //   location.name.toLowerCase().includes(searchText.toLowerCase())
    // );
  }
  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }

}
