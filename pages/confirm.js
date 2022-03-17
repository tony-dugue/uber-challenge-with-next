import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'

const Confirm = () => {

  const [pickupCoordinates, setPickupCoordinates] = useState()
  const [dropoffCoordinates, setDropoffCoordinates] = useState()

  const getPickupCoordinates = () => {
    const pickup = "Saint-grégoire"
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiY2VsdGljc2NvcnBpb24iLCJhIjoiY2toc2NuajhmMXAwODJ1azZxdTdnNG05bCJ9.mlepF2c99ZjypqpuXdZZvg",
        limit: 1
      })
    )
      .then(res => res.json())
      .then(data => setPickupCoordinates(data.features[0].center))
  }

  const getDropoffCoordinates = () => {
    const dropoff = "Rennes"
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiY2VsdGljc2NvcnBpb24iLCJhIjoiY2toc2NuajhmMXAwODJ1azZxdTdnNG05bCJ9.mlepF2c99ZjypqpuXdZZvg",
        limit: 1
      })
    )
      .then(res => res.json())
      .then(data => setDropoffCoordinates(data.features[0].center))
  }

  useEffect(() => {
    getPickupCoordinates()
    getDropoffCoordinates()
  }, [])

  return (
   <Wrapper>

     <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />

     <RideContainer>
       {/* Ride Selector */}
       {/* Confirm Button */}
     </RideContainer>

   </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`flex h-screen flex-col`
const RideContainer = tw.div`flex-1`
