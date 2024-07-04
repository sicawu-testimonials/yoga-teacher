import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function GoogleMaps() {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 40.748817,
        lng: -73.985428
    }

    return (
        <>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                >
                    <Marker position={defaultCenter} />
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default GoogleMaps