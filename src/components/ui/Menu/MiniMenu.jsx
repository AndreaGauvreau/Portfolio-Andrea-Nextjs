import {
  AddIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  EditIcon,
  PhoneIcon,
} from '@chakra-ui/icons'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Collapse,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import Link from 'next/link'

export default function MiniMenu() {
  const [showCssTools, setShowCssTools] = useState(true)

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon color={'white'} />}
        variant="outline"
        _hover={{bg: '#ffffff10'}}
      />
      <MenuList>
        <Link href="https://calendly.com/andrea-formizi/30min">
          <MenuItem icon={<PhoneIcon />}>Me contacter</MenuItem>
        </Link>
        <MenuDivider />
        <Link href="/schoolBooster">
          <MenuItem>Dernier projet</MenuItem>
        </Link>
        <MenuDivider />
        <Link href="/tools">
          <MenuItem>Tools CSS</MenuItem>
        </Link>
        <Collapse in={showCssTools}>
          <Link href="/tools/glassmorphism">
            <MenuItem pl={10}>Glassmorphism</MenuItem>
          </Link>
          <Link href="/tools/gradient">
            <MenuItem pl={10}>Gradient</MenuItem>
          </Link>
          <Link href="/tools/gradient-animation">
            <MenuItem pl={10}>Gradient Animation</MenuItem>
          </Link>
        </Collapse>
      </MenuList>
    </Menu>
  )
}
