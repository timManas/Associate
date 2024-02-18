import { ButtonGroup, Flex, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex bg='gray.400'>
      <Link to={'/'}>
        <Text p='4' display='block' fontSize='lg' fontWeight='bold'>
          Associate Pro
        </Text>
      </Link>
      <Spacer />
      <ButtonGroup mr={5}>
        <Link to={'/editorspicks'}>
          <Text p='4'>Editors Pick</Text>
        </Link>
        <Link to={'/checklist'}>
          <Text p='4'>CheckList</Text>
        </Link>
        <Link to={'/aboutus'}>
          <Text p='4'>About Us</Text>
        </Link>
      </ButtonGroup>
    </Flex>
  )
}

export default Header
