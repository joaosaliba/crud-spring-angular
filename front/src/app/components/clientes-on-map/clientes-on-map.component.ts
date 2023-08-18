import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import tt from '@tomtom-international/web-sdk-maps';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clientes-on-map',
  templateUrl: './clientes-on-map.component.html',
  styleUrls: ['./clientes-on-map.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClientesOnMapComponent),
      multi: true,
    },
  ],
})
export class ClientesOnMapComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  dataSource: any;

  constructor(private dataService: ClienteService) {}

  private map!: tt.Map;
  private markers: tt.Marker[] = [];
  private apiKey = 'LeoAVzKJGtmMgn4KQt3EbhWCgDXoTgsc';

  searchControl = new FormControl();
  searchResults: any;

  ngAfterViewInit(): void {

    this.loadData();
  }
  loadData() {
    this.dataService.getData(0, 100).subscribe((data) => {
      this.dataSource = data.content;
  
      // Calculate the bounding box of marker coordinates
      const minLatitude = Math.min(...this.dataSource.map(pessoa => pessoa.endereco.latitude));
      const maxLatitude = Math.max(...this.dataSource.map(pessoa => pessoa.endereco.latitude));
      const minLongitude = Math.min(...this.dataSource.map(pessoa => pessoa.endereco.longitude));
      const maxLongitude = Math.max(...this.dataSource.map(pessoa => pessoa.endereco.longitude));
  
      // Calculate the center based on the bounding box
      const center: tt.LngLatLike = [
        (minLongitude + maxLongitude) / 2,
        (minLatitude + maxLatitude) / 2
      ];
  
      // Initialize the map with the calculated center and default zoom
      this.initMap(center);
  
      // Add markers
      this.dataSource.forEach((pessoa) => {
        this.addMarker(pessoa);
      });
    });
  }
  
  initMap(center: tt.LngLatLike): void {
    this.map = tt.map({
      key: this.apiKey,
      language: 'pt-BR',
      container: this.mapContainer.nativeElement,
      center: center,
      zoom: 10 // Set a default zoom level
    });
    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());
  
    // Calculate and set an appropriate zoom level to fit all markers
    this.fitMapToMarkers();
  }
  
  fitMapToMarkers(): void {
    const bounds = new tt.LngLatBounds();
    this.dataSource.forEach((pessoa) => {
      bounds.extend([pessoa.endereco.longitude, pessoa.endereco.latitude]);
    });
  
    this.map.fitBounds(bounds, { padding: 40 }); // Adjust padding as needed
  }
  
 
  addMarker(result: any): void {
    const coordinates = result.endereco;
    const popup = new tt.Popup().setHTML(result.nome);
    const marker = new tt.Marker()
      .setLngLat([coordinates.longitude, coordinates.latitude])
      .setPopup(popup)
      .addTo(this.map);

    this.markers.push(marker);
  }
}
