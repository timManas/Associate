import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  Divider,
} from '@chakra-ui/react'

const ProductCard = (product) => {
  const clickHandler = (url) => {
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <Card key={product._id}>
      <CardBody>
        <Image
          src={`https://picsum.photos/300/200`}
          alt={`https://picsum.photos/300/200`}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text color='blue.600' fontSize='2xl'>
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button
            variant='solid'
            colorScheme='blue'
            onClick={() => clickHandler(product.url)}
          >
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Review
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
