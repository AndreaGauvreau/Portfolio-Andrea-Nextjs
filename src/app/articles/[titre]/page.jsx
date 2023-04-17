'use client'
import {Box, Heading, Text} from '@chakra-ui/react'
import {usePostByTitle} from '@/commons/hook/post.jsx'

export default function Page({params}) {
  const titre = params?.titre

  const {isLoading, error, data: post} = usePostByTitle(titre)

  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error.message}`

  return (
    <>
      <Box bg={'red'} h={'200px'} w={'200px'}>
        <Heading>{post?.auteur}</Heading>
        <Text>{post?.titre}</Text>
      </Box>
    </>
  )
}
