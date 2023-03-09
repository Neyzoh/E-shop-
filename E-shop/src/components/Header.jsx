import { Box, Flex, Heading } from "@chakra-ui/react";

function Header () {
    return(
        <Box p={5}>
            <Flex w="100%">
                <Heading 
                    ml="8" size="md" fontWeight='semibold' color='cyan.400'>E-shop</Heading>
            </Flex>
        </Box>
    )
}

export default Header;