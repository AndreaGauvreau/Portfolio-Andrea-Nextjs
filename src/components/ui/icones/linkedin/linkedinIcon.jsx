import {Box} from '@chakra-ui/react'
import {motion} from 'framer-motion'

export const LinkdinIcon = ({color, color1, color2, width, wait}) => {
  return (
    <Box w={'100%'} h={'100%'}>
      <svg
        width={width}
        height={width}
        viewBox="0 0 898 885"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M897.4 884.1H706.5V594.2C706.5 525.1 705.2 436.2 607.3 436.2C507.9 436.2 492.6 511.5 492.6 589.2V884H301.8V288H485V369.4H487.6C513.1 322.5 575.4 273.2 668.3 273.2C861.7 273.2 897.4 396.6 897.4 557.1C897.4 557.2 897.4 884.1 897.4 884.1Z"
          fill={color}
          strokeWidth="20"
          stroke="white"
          strokeLinecap="round"
          initial={{pathLength: 0.0, opacity: 0}}
          animate={{pathLength: 1, opacity: 1}}
          transition={{duration: 1.2, delay: wait}}
        />
        <motion.path
          d="M99.3 198.5C44.4 198.5 0 154 0 99.2C0 44.4 44.5 0 99.3 0C154 0 198.5 44.5 198.5 99.2C198.5 154 154 198.5 99.3 198.5Z"
          fill={color1}
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 1.2, delay: wait}}
        />
        <motion.path
          d="M198.5 288.5H0V884.1H198.5V288.5Z"
          fill={color2}
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 1.2, delay: wait}}
        />
      </svg>
    </Box>
  )
}
