import {Box} from '@chakra-ui/react'
import {motion} from 'framer-motion'

export const YoutubeIcon = ({color, color1, color2, width, wait}) => {
  return (
    <Box w={'100%'} h={'100%'}>
      <svg
        width={width}
        height={width}
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M25.5 6.79999C18.3838 6.79999 9.14746 8.583 9.14746 8.583L9.12422 8.60956C5.88313 9.12791 3.4 11.9129 3.4 15.3V35.7033C3.40316 37.3209 3.98288 38.8844 5.03506 40.1131C6.08723 41.3417 7.54295 42.1551 9.14082 42.407L9.14746 42.417C9.14746 42.417 18.3838 44.2033 25.5 44.2033C32.6162 44.2033 41.8525 42.417 41.8525 42.417L41.8559 42.4137C43.4555 42.1622 44.9129 41.3483 45.9658 40.1181C47.0188 38.888 47.5983 37.3225 47.6 35.7033V15.3C47.5976 13.6818 47.0183 12.1175 45.966 10.8882C44.9138 9.65881 43.4576 8.84501 41.8592 8.59296L41.8525 8.583C41.8525 8.583 32.6162 6.79999 25.5 6.79999ZM20.4 17.6773L34 25.5L20.4 33.3226V17.6773Z"
          fill={color}
          id="Vector"
          initial={{rotate: 90, scale: 0}}
          animate={{rotate: 0, scale: 1}}
          transition={{duration: 1.2, delay: wait}}
        />
        <motion.path
          d="M35 26L20 34.6603V17.3397L35 26Z"
          fill={color1}
          id="Vector_2"
          initial={{rotate: 90, scale: 0}}
          animate={{rotate: 0, scale: 1}}
          transition={{duration: 1.2, delay: wait}}
        />
        <motion.path
          d="M37 26L22 34.6603V17.3397L37 26Z"
          fill={color2}
          id="Vector_3"
          initial={{rotate: 90, scale: 0}}
          animate={{rotate: 0, scale: 1}}
          transition={{duration: 1.2, delay: wait}}
        />
      </svg>
    </Box>
  )
}
