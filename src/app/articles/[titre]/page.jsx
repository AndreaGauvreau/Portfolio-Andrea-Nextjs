'use client'
import {useState, useEffect} from 'react'
import {getDocumentsByTitle} from '@/firebase'
import {Box, Heading, Text} from '@chakra-ui/react'

export default function Page({params}) {
  const titre = params?.titre

  const [post, setPost] = useState()
  getDocumentsByTitle('article', titre)
    .then(doc => {
      setPost(doc[0])
      console.log('article', doc)
    })
    .catch(error => {
      console.error(error)
    })
  return (
    <>
      <Box bg={'red'} h={'200px'} w={'200px'}>
        <Heading>{post?.auteur}</Heading>
        <Text>{post?.titre}</Text>
      </Box>
    </>
  )
}
