import { AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import tt from '@tomtom-international/web-sdk-maps';
import { services } from "@tomtom-international/web-sdk-services";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MapComponent),
    multi: true
}]
})
export class MapComponent  implements AfterViewInit  {

  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  marker: tt.Marker;
  @Input() public formGroup: FormGroup;

  public static get formGroup(): FormGroup {
    return new FormGroup({
      latitude: new FormControl(),
      longitude: new FormControl(),
 
    })
  } 
  
  private map!: tt.Map;
  private apiKey='LeoAVzKJGtmMgn4KQt3EbhWCgDXoTgsc'

  searchControl = new FormControl();
  searchResults:any



  ngAfterViewInit(): void {
    const controls = MapComponent.formGroup.controls

    for (const name in controls) {
      if (!this.formGroup?.contains(name)) {
        this.formGroup?.addControl(name, controls[name]);
      }
    }


    this.initMap();

  }



  fuzzySearch(query:string) {
    return services
      .fuzzySearch({
        key:this.apiKey,
        query: query,
        countrySet:'BR'
      })
      .then(function(result) {
        return result.results;
      }).catch();
  }

  async getSearchResults(searchTerm: string): Promise<void> {
    if (searchTerm) {
      this.searchResults =   this.fuzzySearch(searchTerm)
    } else {
      this.searchResults = [];
    }
  }

  displayFn(result: any): string {
    return result ? result.address.freeformAddress : '';
  }

   private initMap(): void {
    var popup = new tt.Popup({
        offset: 35
    });
    this.map = tt.map({
      key: this.apiKey,
      language: 'pt-BR',
      container: this.mapContainer.nativeElement,
      center: [-47.925738, -15.779384],
      zoom: 14
    });
    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());

 


  }

  onResultSelected(result: any): void {
    const coordinates = result.position;
    this.map.jumpTo({
      center: [coordinates.lng, coordinates.lat],
      zoom: 15,
    });
    this.formGroup.get('latitude')?.setValue(coordinates.lng )
    this.formGroup.get('longitude')?.setValue(coordinates.lat )
    if (this.marker) {
      this.marker.remove(); // Remove the marker from the map
    }
    const popup = new tt.Popup().setHTML(result.address.freeformAddress);
  this.marker=  new tt.Marker()
      .setLngLat([coordinates.lng, coordinates.lat])
      .setPopup(popup)
      .addTo(this.map)
      .on('dragend', (event: any) => {
        const { lng, lat } = event.target.getLngLat();
    this.formGroup.get('latitude')?.setValue(lng )
    this.formGroup.get('longitude')?.setValue(lat )
        console.log(`Marker dragged to: ${lat}, ${lng}`);
      }).setDraggable(true);
  }



  

}
