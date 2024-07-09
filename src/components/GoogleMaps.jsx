import { useEffect } from 'react'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_API_KEY

function GoogleMaps() {
    let map

    async function initMap() {
        const position = { lat: 16.0519593, lng: 108.2492045 }

        const { google } = window; // Zugriff auf das globale google-Objekt

        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

        map = new Map(document.getElementById("map"), {
            zoom: 14,
            center: position,
            mapId: googleMapsApiKey,
        })

        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: "Yellow flag at Danang beach",
        })
    }

    useEffect(() => {
        if (googleMapsApiKey) {
            initMap();
        }
    }, []) // Array -> einmaliges Ausführen

    return (
        <>
            <h2>Where to Find Us</h2>
            <div id="map" style={{ height: '100vh', width: '100%' }}></div>
        </>
    )
}


export default GoogleMaps