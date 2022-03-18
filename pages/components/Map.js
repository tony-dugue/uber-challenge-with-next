import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsdGljc2NvcnBpb24iLCJhIjoiY2toc2NuajhmMXAwODJ1azZxdTdnNG05bCJ9.mlepF2c99ZjypqpuXdZZvg'

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-1.6786, 48.1127],
      zoom: 11
    });

    pickupCoordinates ? addToMap(map, pickupCoordinates) : null
    dropoffCoordinates ? addToMap(map, dropoffCoordinates) : null

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds( [pickupCoordinates, dropoffCoordinates], { padding: 60 } )
    }

  }, [pickupCoordinates, dropoffCoordinates]);

  return (
   <Wrapper id='map'></Wrapper>
  )
}

const Wrapper = tw.div`flex-1`

export default Map

