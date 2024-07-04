import React, { useEffect, useState, useRef } from 'react'
import { Map, TileLayer, Marker, Popup } from '@react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css'
import geosearch from 'esri-leaflet-geocoder'


const MapView = () => {
  const mapRef = useRef()
  const [position, setPosition] = useState([50, 10])
  const [icon, setIcon] = useState()

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (!map) return

    const control = geosearch()
    control.addTo(map)
    control.on('results', handleOnSearchResuts)


    let greenIcon = L.icon({
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Font_Awesome_5_solid_map-marker-alt.svg',
      shadowUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Font_Awesome_5_solid_map-marker-alt.svg',
      iconSize: [20, 30],
      shadowSize: [20, 30],
    })

    setIcon(greenIcon)

    return () => {
      control.off('results', handleOnSearchResuts)
    }

  }, []);

  const handleOnSearchResuts = (data) => {
    console.log('Search results', data);
    setPosition([data.latlng.lat, data.latlng.lng])
  }


  return (
    <Map
      ref={mapRef}
      center={position}
      zoom={6}
      style={{ width: '400px', height: '400px' }}
    >

      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={icon}>
        <Popup>Popup for any custom information.</Popup>
      </Marker>
    </Map>
  )
}


export default MapView