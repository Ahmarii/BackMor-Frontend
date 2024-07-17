'use client';
import { useEffect, useRef } from 'react';
import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
const socket = io('http://localhost:3003'); // Replace with your server URL

class localMarker extends maplibre.Marker{
    constructor(options,id) {
        super(options)
        this.id = id;
    }
}

export default function MapComponent() {
  const mapContainer = useRef(null);
  let local_markers = useRef([]);
  let mapInstance = useRef(null);

  useEffect(() => {
    const initializeMap = () => {
      fetch("http://localhost:8080/metadata")
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
            var styleURL = 'http://localhost:8080/style.json';
            var bounds = data['bounds'].split(',');
            mapInstance.current = new maplibre.Map({
                container: mapContainer.current,
                style: styleURL,
                center: [(Number(bounds[0]) + Number(bounds[2])) / 2, (Number(bounds[1]) + Number(bounds[3])) / 2],
                zoom: 13
            });

            map.showTileBoundaries = true;
            map.addControl(new maplibre.Inspect({
                showInspectButton: true,
                showMapPopup: true
            }));

            mapInstance.current.addControl(new maplibre.NavigationControl());
            mapInstance.current.addControl(new maplibre.AttributionControl({
                compact: false,
                customAttribution: "Style © <a href='http://openmaptiles.org/'>OpenMapTiles</a> | " +
                "Data © <a href='http://www.openstreetmap.org/copyright'>CPRE888</a>"
            }));
            
            console.log(45456466465)
        })

        .catch(error => {
          console.error('Error fetching metadata:', error);
        });
    };

    if (!mapInstance.current) {
      initializeMap();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

    useEffect(() => {
        if (mapInstance) {
            socket.on('initialMarkers', (initialMarkersData) => {
                //console.log(213123123123123,Object.entries(initialMarkersData))
                updateMarkersOnMap(Object.entries(initialMarkersData));
            });

            socket.on('updatedMarkers', (updatedMarkers) => {
                updateMarkersOnMap(Object.entries(updatedMarkers));
                });
        }
    },[mapInstance])

    const updateMarkersOnMap = (data) => {
        local_markers.current.forEach(marker => {
            //console.log(local_markers.current)
            marker.remove();
        });
        while (local_markers.current.length > 0) {
            local_markers.current.pop();
        }
        //console.log(123123213,data)
        data.forEach(markerData => {
            const newMarker = new localMarker({draggable: true},markerData[0])
            .setLngLat([markerData[1].lng,markerData[1].lat])
            .addTo(mapInstance.current)
            .on('dragend', onMarkerDragEnd);
            local_markers.current.push(newMarker);
            //console.log(local_markers)
        });
    }

    // Function to add marker to the map
    const addMarkerToMap = (lngLat) => {
        if (mapInstance) {
            const Id = uuidv4()
            const marker = new localMarker({draggable: true},Id)
                .setLngLat(lngLat)
                .addTo(mapInstance.current)
                .on('dragend', onMarkerDragEnd);
            local_markers.current.push(marker)

            const newRemoteMarker = {'id':Id,'geo':marker.getLngLat()}
            socket.emit('updateMarker', newRemoteMarker)
        }
    };

    const logMarkers = () => {
        console.log(window.inviteCode)
        local_markers.current.forEach((marker, index) => {
            console.log(`Marker ${marker.id}:`, marker.getLngLat());
        });
    };

    const onMarkerDragEnd = (event) => {
        const lngLat = event.target.getLngLat();
        //console.log(`Marker ${event.target.id} new position:`, lngLat);
        const Id = event.target.id
        socket.emit('updateMarker', {'id':Id,'geo':lngLat})
    };

    // Expose function
    useEffect(() => {
        if (typeof window !== 'undefined') {
        window.addMarkerToMap = addMarkerToMap;
        window.logMarkers = logMarkers;
        }
    }, [addMarkerToMap,logMarkers]);

    return <div id="map" ref={mapContainer} className="w-full h-screen" />;
}
