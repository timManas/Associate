import { ButtonGroup, Flex, Spacer, Link, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex bg='gray.400'>
      <Link p='4' href={'something'} ml={5}>
        <Text display='block' fontSize='lg' fontWeight='bold'>
          Associate Pro
        </Text>
      </Link>
      <Spacer />
      <ButtonGroup mr={5}>
        <Link p='4'>Products</Link>
        <Link p='4'>Editors Pick</Link>
        <Link p='4'>CheckList</Link>
        <Link p='4'>Sign In</Link>
      </ButtonGroup>
    </Flex>
  )
}

export default Header
