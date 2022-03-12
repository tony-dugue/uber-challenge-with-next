import tw from "tailwind-styled-components"

export default function Home() {
  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex flex-col h-screen bg-red-300`

const Map = tw.div`bg-red-500 flex-1`

const ActionItems = tw.div`flex-1`

