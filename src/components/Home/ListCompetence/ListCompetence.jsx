import {colorsDD} from '@/components/ui/colors/colors'
import Gradient from '@/components/ui/GradientBgElems/Gradient'
import {competencesDatas, useGetDataCompetences} from '@/db/data-projets'
import {Badge, Box, Button, Flex, Heading, Text} from '@chakra-ui/react'
import React, {useState} from 'react'
import CanvaGlobe from './3dmap/CanvaGlobe'

export default function ListCompetence({loadingApi, setLoadingApi}) {
  const [selectedCountry, setSelectedCountry] = useState('Paris')
  const {data, loading, error} = useGetDataCompetences(selectedCountry)

  const onClickCountry = country => {
    setSelectedCountry(country.id)
  }

  return (
    <Flex h={{base: '100vh', lg: '120vh'}} position="relative" bg={'#00000090'}>
      <Gradient versionG={4} />
      <Box
        display={{base: 'none', lg: 'inline'}}
        h={{base: '80vw', md: '50vh', lg: '120vh'}}
        w="100vw"
        position="absolute"
        left={{base: '0%', lg: '-40%'}}
      >
        {loadingApi.egg === false ? (
          ''
        ) : (
          <CanvaGlobe
            onClickCountry={onClickCountry}
            selectedCountry={selectedCountry}
            data={data}
            setLoadingApi={setLoadingApi}
            loadingApi={loadingApi}
          />
        )}
      </Box>
      <Flex
        flexDirection={{base: 'column', lg: 'row'}}
        w={'100vw'}
        mt={{base: 0, lg: 0}}
      >
        <Flex w={'40%'}></Flex>
        <Flex
          w={{base: '100%', lg: '60%'}}
          px={10}
          ml={{base: 'auto', lg: 0}}
          mr={{base: 'auto', lg: 0}}
          h={{base: '100vh', lg: 'auto'}}
          maxW={'600px'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          flexDirection="column"
          color={'white'}
          gap={5}
        >
          <Heading fontSize={'clamp(27.0px, 21.09px + 1.48vw, 40.00px)'}>
            Le tour du monde de mes compétences
          </Heading>
          <Box display={{base: 'none', lg: 'inline'}}>
            {loading && <div>Chargement...</div>}
            {!data && (
              <>
                <Text>Clique sur l'un des nombreux pays </Text>
              </>
            )}
          </Box>
          <Flex
            gap={2}
            flexWrap={'nowrap'}
            overflowX={'scroll'}
            maxW={'80vw'}
            alignItems="center"
          >
            {competencesDatas?.map(e => (
              <Button
                onClick={() => setSelectedCountry(e?.id)}
                bg={selectedCountry === e.id ? '#ffffff' : '#ffffff20'}
                size="lg"
                fontSize={{base: '12px', lg: '20px'}}
              >
                {e?.emoji}
              </Button>
            ))}
          </Flex>
          {data && (
            <>
              <Flex flexDirection={'row'} justifyContent="center" gap={5}>
                <Badge
                  bgColor={colorsDD.green20}
                  p={2}
                  fontSize={15}
                  borderRadius={5}
                  color={colorsDD.green}
                >
                  {data.competences}
                </Badge>
                <Badge
                  bgColor={colorsDD.pink20}
                  p={2}
                  fontSize={15}
                  borderRadius={5}
                  color={colorsDD.pink}
                >
                  {data.pays}
                </Badge>
              </Flex>

              <Text>{data.description}</Text>
              <Text>{data.montravail}</Text>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
