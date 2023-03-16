import { Box, Button, ButtonGroup, Flex, Heading, Link, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Stack } from "@chakra-ui/react";

function Header () {
    return(
        <Box p={8} >
            <Flex w="100%">
                <Heading 
                    ml="180px" size="md" fontWeight='bold' fontSize="2xl" fontFamily="heading" color='#9331DD'>PurchasePro
                </Heading>
                <Stack  ml="480px" position="relative" direction='row' spacing="4em" align='center'>
                    <Link href="/" style={{ textDecoration: 'none' }}><Button colorScheme='purple' variant='outline'>Accueil</Button></Link>
                    <Button colorScheme='black' variant='link'>Nos Experts</Button>
                    <Button colorScheme='black' variant='link'>FAQ</Button>
                </Stack>
                <Stack  ml="400px" align="center">
                    <Popover>
                        <PopoverTrigger>
                            <Button colorScheme='purple'variant='solid'>Connexion</Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent pb={4} pt={4} bg="#F7F7FF">
                                <PopoverArrow />
                                <PopoverCloseButton color='black'/>
                                <ButtonGroup mt={5} pl={2}>
                                    <Link href="/Inscription-User" style={{ textDecoration: 'none' }}><Button colorScheme='purple'variant='solid'>Créer un compte</Button></Link>
                                    <Link href="/Connexion" style={{ textDecoration: 'none' }}><Button colorScheme='purple'variant='outline'>Connexion</Button></Link>
                                </ButtonGroup>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Header;