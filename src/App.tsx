import { Box, Text } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <>
      <Box 
        m="2" 
        p="2" 
        bg="brand.900" 
        color="white"
      >
        Hello, Box
      </Box>

      <Text 
        fontSize="md" 
        border="1px" 
        borderColor="brand.800"
        borderRadius='4px'
        m='2'
        boxShadow='lg'
        _hover={{
          backgroundColor: 'brand.900',
          color: 'white'
        }}
      >
        Hello, Text
      </Text>
      
      <Box 
        m="2" 
        p="2" 
        sx={{ "--xs-color": "#53c8c4" }}
        bg="brand.900" 
        color="var(--xs-color)"
      >
        Hello, XS prop
      </Box>
    </>

  );
}

export default App;
