import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Card, CardBody, Center, FormControl, FormLabel, Heading, HStack, Input, Link, Stack, VStack } from "@chakra-ui/react";
import "./styleU.css"

function SignUpUser () {
    return(
    <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
        <Box >
            <Center>
                <Stack spacing={4}>
                    <VStack  as="header" spacing="6" mt="20">
                        <Breadcrumb>
                               <Heading as="h1" fontWeight="bold" fontSize="20px" color="yellow.500">Inscrivez-vous / </Heading>
                            <BreadcrumbItem>
                               <BreadcrumbLink href="/Inscription-Expert"><Heading as="h1" fontWeight="bold" fontSize="xl" color="purple.500" pl={2}>Rejoidre nos experts</Heading></BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </VStack>
                    <Card bg="#FFF" variant="outline" borderColor="#D8D8FF" w="650px" h="500px">
                        <CardBody>
                            <form>
                                <Stack>
                                    <FormControl>
                                        <HStack p={4}>
                                            <FormLabel fontWeight="semibold" color="purple.500">Adresse mail :</FormLabel>
                                        </HStack>
                                            <Input placeholder="E-mail" focusBorderColor="#B794F4" type="text" bg="white" borderColor="#D8D8FF" size="sm" borderRadius="6px"/>
                                        </FormControl>
                                        <FormControl>
                                            <HStack p={4}>
                                                <FormLabel fontWeight="semibold" color="purple.500">Mot de passe :</FormLabel>
                                            </HStack>
                                                <Input placeholder="Mot de passe" focusBorderColor="#B794F4" type="password" bg="white" borderColor="#D8D8FF" size="sm" borderRadius="6px"/>
                                        </FormControl>
                                        <FormControl>
                                            <HStack p={4}>
                                                <FormLabel size="sm" fontWeight="semibold" color="purple.500">Confirmer votre mot de passe :</FormLabel>
                                            </HStack>
                                            <Input type="password" placeholder="Confirmer votre mot de passe" focusBorderColor="#B794F4" bg="white" borderColor="#D8D8FF" size="sm" borderRadius="6px"/>
                                        </FormControl>
                                        <Stack justifyContent="center" alignItems="center" pt={6}>
                                            <Link color="purple.500">Déjà inscrit ?</Link>
                                        </Stack>
                                        <ButtonGroup justifyContent="center" pt={5}>
                                            <Button w="385px" h="40px" colorScheme="purple" mt="5">S'inscrire</Button>
                                        </ButtonGroup>
                                </Stack>
                            </form>
                        </CardBody>
                    </Card>
                </Stack>
            </Center>
        </Box>
    </div>
    )
}

export default SignUpUser;