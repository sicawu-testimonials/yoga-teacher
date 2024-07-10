import { useEffect } from 'react'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_API_KEY

function GoogleMaps() {
    let map

    async function initMap() {
        const position = { lat: 16.0519593, lng: 108.2492045 }

        if (window.google && window.google.maps) {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

            if (Map && AdvancedMarkerElement) {
                map = new Map(document.getElementById("map"), {
                    zoom: 14,
                    center: position,
                    mapId: googleMapsApiKey,
                });

                const marker = new AdvancedMarkerElement({
                    map: map,
                    position: position,
                    title: "Yellow flag at Danang beach",
                });
            } else {
                console.error('Failed to import Google Maps libraries');
            }
        } else {
            console.error('Google Maps API is not loaded');
        }
    }

    useEffect(() => {
        if (googleMapsApiKey) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                initMap();
            };

            script.onerror = () => {
                console.error('Error loading Google Maps script');
            };
        }
    }, []); // Array -> einmaliges Ausführen

    return (
        <div id="location">
            <h2>Where to Find Us</h2>
            <div id="map" style={{ height: '100vh', width: '100%' }}></div>
        </div>
    )
}


export default GoogleMaps