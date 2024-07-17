'use client';
import { useEffect, useRef } from 'react';
import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapComponent() {
    useEffect(() => {
    fetch("http://localhost:8080/metadata")
        .then(response => response.json())
        .then(data => {
            var styleURL = 'http://localhost:8080/style.json';
            var bounds = data['bounds'].split(',');
            console.log([(Number(bounds[0]) + Number(bounds[2])) / 2, (Number(bounds[1]) + Number(bounds[3])) / 2])
            var map = new maplibre.Map({
                container: 'map', // container id
                style: styleURL, // stylesheet location
                center: [(Number(bounds[0]) + Number(bounds[2])) / 2, (Number(bounds[1]) + Number(bounds[3])) / 2], // starting position [lng, lat]
                zoom: 13 // starting zoom
            });
    
            map.addControl(new maplibre.NavigationControl());
            map.addControl(new maplibre.AttributionControl({
                compact: false,
                customAttribution: "Style © <a href='http://openmaptiles.org/'>OpenMapTiles</a> | " +
                "Data © <a href='http://www.openstreetmap.org/copyright'>CPRE888</a>"
            }));
  
          // Uncomment to enable debug UI
            map.showTileBoundaries = true;
            map.addControl(new maplibre.Inspect({
                showInspectButton: false,
                showMapPopup: true
            }));
        })
        .catch(error => {
          console.error('Error fetching metadata:', error);
        });
    }, []);

    
    return <div id="map" className="w-full h-screen" />;
  }