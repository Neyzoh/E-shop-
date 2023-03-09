import { Box, Button, Flex, Heading, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Stack } from "@chakra-ui/react";
import { AiFillShopping } from 'react-icons/ai'
function Header () {
    return(
        <Box p={8}>
            <Flex w="100%">
                <Heading 
                    ml="8" size="md" fontWeight='light' fontSize="3xl" fontFamily="heading" color='#000'>E-shop
                </Heading>
                <Stack  ml="100px" direction='row' spacing="4em" align='center'>
                    <Button colorScheme='purple'variant='solid'>Accueil</Button>
                    <Button colorScheme='black' variant='link'>Boutique</Button>
                    <Button colorScheme='black' variant='link'>Nouveautés</Button>
                    <Button colorScheme='black' variant='link'>Promotions</Button>
                </Stack>
                <Stack spacing={5} ml="auto" direction="row" align="center">
                    <Popover>
                        <PopoverTrigger>
                            <Button colorScheme='orange'variant='solid'>S'inscrire</Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent pt={4} bg="#60656F">
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Enregistrez vos articles préférés</PopoverHeader>
                                <Button colorScheme='yellow'variant='solid'>Se connecter</Button>
                                <Button colorScheme='blue'variant='solid'>S'inscrire</Button>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                    <Button rightIcon={<AiFillShopping />} colorScheme='black'variant='outline' mr="1px">Panier</Button>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Header;