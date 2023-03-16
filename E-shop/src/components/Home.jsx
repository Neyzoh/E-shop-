import { Box, Flex, Heading, Text, Button, HStack, Image } from "@chakra-ui/react";


function Home () {
    return(
    <Flex w="100%" h="450px" borderRadius="35" flexDirection="column" backgroundImage="linear-gradient(to left, #861dfd, #9331dd)" >
      <Box borderRadius="35px"  mt="190px" bg="#FFFFFF" w="60%" p={5}>
        <Flex flexDirection="column" alignItems="center" >
          <Box pt="20px" maxW="50%">
            <Heading size="xl" mb={8} color="">Les achats entre particuliers n'ont jamais été aussi faciles et sûrs</Heading>
            <Text fontSize="lg" fontWeight="hairline" mb={6}>Devenez un acheteur averti grâce à notre application qui met à votre disposition des experts et passionnés de
             domaine technique pour vous accompagner dans vos achats entre particuliers.</Text>
             <HStack spacing="15px">
                <Button w="280px" h="50px" colorScheme="purple">Trouver un expert</Button>
                <Button w="280px" h="50px" variant="outline" colorScheme="purple">En savoir plus</Button>
            </HStack>
          </Box>
        </Flex>
            <Image 
            w="640px"
            transform="translateX(180%)"
            bottom="50%"
            position="relative" 
            borderRadius="35px" 
            src="https://images.unsplash.com/photo-1613292252537-be6ada176e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Layout image"></Image>
        </Box>
    </Flex>
);
}


export default Home;