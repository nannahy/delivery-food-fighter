import React, { Component } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Map = () => {
  // 지도 css는 이 곳에 작성해주세요
  const mapStyle = {
    height: "100%",
  }
  return (
    <>
      <MapContainer style={mapStyle} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map
