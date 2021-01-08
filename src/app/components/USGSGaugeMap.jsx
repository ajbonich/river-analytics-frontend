import React from 'react'
import { MapContainer, TileLayer, Tooltip, Marker, Popup } from 'react-leaflet'
import * as gaugeData from './COUSGSGauges.json'

export default class USGSGaugeMap extends React.Component {
    // const [activeGauge, setActiveGauge] = React.useState(null)
    // const gaugeClicked = (gaugeId) => {
    //     this.props.onSelectGauge(gaugeId)
    // }
    render() {
        return (
            <MapContainer
                center={[36.705, -97.0]}
                zoom={5}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {gaugeData.sites.site.map((gauge) => (
                    <Marker
                        position={[gauge._lat, gauge._lng]}
                        key={gauge._sno}
                        eventHandlers={{
                            click: () => {
                                this.props.onSelectGauge(gauge._sno)
                            },
                        }}
                    >
                        <Popup>Graph generated for gauge: {gauge._sna}</Popup>
                        <Tooltip>Description: {gauge._sna}</Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        )
    }
}
