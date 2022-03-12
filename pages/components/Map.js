import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

const Map = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsdGljc2NvcnBpb24iLCJhIjoiY2toc2NuajhmMXAwODJ1azZxdTdnNG05bCJ9.mlepF2c99ZjypqpuXdZZvg'

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-1.6786, 48.1127],
      zoom: 11.35
    });
  });

  return (
   <Wrapper id='map'></Wrapper>
  )
}

const Wrapper = tw.div`flex-1`

export default Map

