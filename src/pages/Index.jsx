import { Container, Text, VStack, HStack, Box, Heading, IconButton, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Header */}
        <HStack w="full" justifyContent="space-between" p={4} bg="teal.500" color="white">
          <Heading as="h1" size="lg">
            Secret Project OpenSign
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </HStack>
        </HStack>

        {/* Main Content */}
        <VStack spacing={4} align="start">
          <Heading as="h2" size="md">
            Welcome to the Secret Project OpenSign
          </Heading>
          <Text fontSize="lg">This is a collaborative project where we work together to build something amazing. Feel free to explore and contribute!</Text>
          <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTcxNzQ3NzkzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Collaboration" borderRadius="md" />
        </VStack>

        {/* Footer */}
        <Box w="full" p={4} bg="teal.500" color="white" textAlign="center">
          <Text>&copy; 2023 Secret Project OpenSign. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
