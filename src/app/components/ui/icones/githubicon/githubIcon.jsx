import {Box} from '@chakra-ui/react'
import {motion} from 'framer-motion'

export const GithIcon = ({color, color1, color2, width, wait}) => {
  return (
    <Box w={'100%'} h={'100%'}>
      <svg
        width={width}
        height={width}
        viewBox="0 0 1046 1023"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="icone-github-andrea 1">
          <motion.path
            id="Vector"
            d="M465.783 27.786C241.848 52.127 61.726 232.25 37.385 451.316C13.045 680.119 144.485 884.581 344.079 962.472C358.683 967.34 373.288 957.604 373.288 938.132V860.24C373.288 860.24 353.815 865.108 329.474 865.108C261.32 865.108 232.111 806.69 227.244 772.613C222.375 753.14 212.639 738.536 198.034 723.931C183.43 719.063 178.562 719.063 178.562 714.195C178.562 704.459 193.166 704.459 198.034 704.459C227.244 704.459 251.584 738.536 261.32 753.14C285.661 792.086 314.87 801.822 329.474 801.822C348.947 801.822 363.551 796.954 373.288 792.086C378.156 758.008 392.76 723.931 421.969 704.459C310.002 680.118 227.243 616.832 227.243 509.732C227.243 456.182 251.583 402.633 285.661 363.688C280.793 353.952 275.924 329.611 275.924 295.534C275.924 276.061 275.924 251.72 285.661 232.248C285.661 222.512 295.397 217.643 300.265 217.643H305.133C329.474 222.511 378.156 237.116 421.969 280.929C451.178 271.193 485.255 266.325 519.332 266.325C553.409 266.325 587.486 271.193 616.695 280.929C660.509 237.116 714.058 222.511 738.399 217.643H743.267C753.004 217.643 757.872 222.511 762.74 232.248V295.534C762.74 334.479 757.872 353.952 753.004 363.688C787.081 402.633 811.422 451.315 811.422 509.733C811.422 616.832 728.662 680.118 616.695 704.459C645.905 728.799 665.377 772.613 665.377 816.426V943C665.377 957.605 679.981 972.21 699.454 967.341C879.576 894.319 1006.15 719.065 1006.15 514.603C1006.15 222.513 757.872 -6.28999 465.783 27.787V27.786Z"
            fill={color}
            strokeWidth="20"
            stroke="white"
            strokeLinecap="round"
            initial={{pathLength: 0, opacity: 0}}
            animate={{pathLength: 1, opacity: 1}}
            transition={{duration: 1.2, delay: wait}}
          />
          <motion.path
            id="Vector_2"
            d="M652.76 464.265L835.865 516.879L824.92 554.969L641.815 502.355L652.76 464.265ZM630.662 541.168L813.767 593.782L802.822 631.872L619.717 579.257L630.662 541.168Z"
            fill={color1}
            initial={{rotate: 90, scale: 0}}
            animate={{rotate: 0, scale: 1}}
            transition={{duration: 1.2, delay: wait}}
          />
          <motion.path
            id="Vector_3"
            d="M197.444 511.926L380.49 459.106L390.94 495.323L207.895 548.143L197.444 511.926ZM218.544 585.048L401.59 532.228L412.04 568.445L228.995 621.265L218.544 585.048Z"
            fill={color2}
            initial={{rotate: -90, scale: 0}}
            animate={{rotate: 0, scale: 1}}
            transition={{duration: 1.2, delay: wait}}
          />
        </g>
      </svg>
    </Box>
  )
}
