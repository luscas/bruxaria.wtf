import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/core';

const Social = ({ icon, label, link }) => (
  <Box
    bg="#202125"
    py="6"
    px="8"
    fontWeight="normal"
    borderRadius="lg"
    cursor="pointer"
    _hover={{
      background: '#1a1b1f'
    }}
    onClick={() => window.open(link, '_blank')}
  >
    <Flex>
      <Image src={icon} />
      <Text color="gray.400" ml="5">
        {label}
      </Text>
    </Flex>
  </Box>
);

const Index = () => {
  const [error, setError] = useState('');
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const emailRef = useRef();

  const handleContact = (e) => {
    e.preventDefault();

    let email = emailRef.current.value;

    setButtonIsLoading(true);

    setTimeout(function () {
      setButtonIsLoading(false);

      if(email == '') {
        setError('Este campo é obrigatório');
      } else if(!/\S+@\S+\.\S+/.test(email)) {
        setError('Digite um e-mail válido');
      } else {
        setIsOpen(true);
        setError('');
      }
    }, 500);
  };

  return (
    <SimpleGrid
      height="100vh"
      columns={1}
      mt={{
        sm: "16",
        lg: "0"
      }}
      placeItems={{
        sm: "start",
        lg: "center"
      }}
    >
      <Container
        px={{
          sm: "8",
          lg: "0"
        }}
        maxW={{
          lg: "md"
        }}
      >
        <Flex
          direction={{
            sm: "column",
            lg: "row"
          }}
          alignItems="start"
        >
          <Image
            src="avatar.jpg"
            borderRadius="lg"
            width="45px"
            height="45px"
            boxSize={{
              sm: "45px",
              lg: "120px"
            }}
            draggable={false}
          />

          <Flex
            direction="column"
            mt={{
              sm: "10",
              lg: "0"
            }}
            ml={{
              lg: "40px"
            }}
          >
            <Heading fontSize="36px" color="gray.300">Olá amigo desconhecido, sou eu, Lucas!</Heading>
            <Text fontSize="22px" color="gray.400" mt="5">Sou um desenvolvedor web e mobile que vive e trabalha no Piauí. Nos meus tempos vagos costumo estudar novas tecnologias ou então praticar meu hobby atual que é replicar aplicativos famosos e postar no meu github. Quer contratar meu trabalho? Insira seu e-mail logo abaixo.</Text>


          <form onSubmit={handleContact}>
            <Flex
                direction={{
                sm: "column",
                lg: "row"
              }}
              alignItems={{
                sm: "flex-start",
                lg: "flex-end"
              }}
            >
              <Input
                ref={emailRef}
                name="email"
                bg="#202125"
                color="gray.300"
                mt="10"
                py="6"
                px="5"
                border="0"
                placeholder="Endereço de e-mail"
                borderRadius="lg" />

              <Button
                type="submit"
                bg="purple.700"
                py="6"
                px="12"
                color="#fff"
                borderRadius="lg"
                mt={{
                  sm: "4",
                  lg: "0"
                }}
                ml={{
                  sm: "0",
                  lg: "4"
                }}
                _hover={{ background: 'purple.800'}}
                _active={{ background: 'purple.500'}}
                isLoading={buttonIsLoading}
                loadingText="Enviando..."
              >Enviar</Button>
              </Flex>

              {error != null && (
                <Text color="red.200" mt="4">{error}</Text>
              )}
            </form>
          </Flex>
        </Flex>

        <SimpleGrid
          columns={{
            sm: "1",
            md: "2"
          }}
          spacing={6}
          mt="50"
          mb="50"
        >
          <Social
            icon="/icons/github.svg"
            label="Visite meu perfil"
            link="https://github.com/luscas"
          />

          <Social
            icon="/icons/twitter.svg"
            label="Me siga no Twitter"
            link="https://twitter.com/lucasreservinha"
          />

          <Social
            icon="/icons/linkedin.svg"
            label="Conexão no Linkedin"
            link="https://linkedin.com/in/lucaswcg"
          />

          <Social
            icon="/icons/patreon.svg"
            label="Torne-se um Patreon"
            link="https://patreon.com"
          />
        </SimpleGrid>
      </Container>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Sucesso!
            </AlertDialogHeader>

            <AlertDialogBody>
              Obrigado por se interessar! Em breve estarei entrando em contato.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="purple" onClick={onClose} ml={3}>
                Entendido
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </SimpleGrid>
  );
}

export default Index;