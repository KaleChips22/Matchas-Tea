import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'

export default function Minimap() {
    const position = { lat: 36.09391957589741, lng: -80.26034874038942 }

    const mapContainerStyle = {
        height: '100%',
        width: '100%'
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyCimMQ9MeVUuI0KL5SqoWEDBvCZXLp1Uy0'>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={position}
                zoom={15}
                options={{
                    disableDefaultUI: true,
                    mapTypeId: 'roadmap'
                }}
            >
                <Marker position={position} />
            </GoogleMap>
        </LoadScript>
    )
}