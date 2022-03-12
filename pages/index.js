import tw from "tailwind-styled-components"
import Map from './components/Map'

export default function Home() {
  return (
    <Wrapper>

      <Map />

      <ActionItems>

        <Header>
          <UberLogo src="/uber-logo.jpeg" />

          <Profile>
            <Name>Tony Dugué</Name>
            <UserImage src="/tony.jpeg"/>
          </Profile>

        </Header>

        {/* ActionButtons */}
        {/* InputButton */}
      </ActionItems>

    </Wrapper>
  )
}

const Wrapper = tw.div`flex flex-col h-screen`
const ActionItems = tw.div`flex-1 p-4`
const Header = tw.div`flex justify-between items-center`
const UberLogo = tw.img`h-28`
const Profile = tw.div`flex items-center`
const Name = tw.div`mr-4 w-20 text-sm`
const UserImage = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px`


