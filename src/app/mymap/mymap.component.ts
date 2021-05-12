import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer,Map,point, marker, icon, Layer } from 'leaflet';

@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.scss']
})
export class MymapComponent implements OnInit {
  mymap: any;
options : any;
layersControl: any;
streetMap : any;
worldtopo: any;
worldimagery : any;
coordinatemarker:any;
  constructor() { }

  ngOnInit(): void {
    this.startthemap() ;
  }
  startthemap()
  {
    //this.mymap=map('mymap');
    this.streetMap = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true
    });
    this.worldtopo = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      detectRetina: true
    });

    this.worldimagery = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
      detectRetina:true
    });

    this.layersControl = {
      baseLayers: {
        'Street Map': this.streetMap,
        'World-Topo Map': this.worldtopo,
        'Worl-Imagery Map' : this.worldimagery,
      },
      overlays: {
        'Co-ordiantes' : this.coordinatemarker
      }
    };
    this.options = {
      layers: [ this.streetMap,this.coordinatemarker
      ],
      zoom: 12,
      center: latLng([ 20.27, 85.84 ])
    };
    
  }
  onMapClick(e :any)
  {
    console.log(e);
    this.coordinatemarker = marker([ e.latlng.lat,e.latlng.lng ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      }).addTo(this.options).bindPopup("The Coordinate of clicked point: "+e.latlng.lat +" and " +e.latlng.lng).openPopup()
    });
    alert("The Coordinate of clicked point: "+e.latlng.lat +" and " +e.latlng.lng);
  }
}
