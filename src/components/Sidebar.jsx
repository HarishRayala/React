import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'

const Sidebar = () => {
    const {isOpen, onOpen, onClose}= useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>Sidebar
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>
        
          <DrawerBody lineHeight='35px'>

            <Box>Home</Box>
            <Box>Trending</Box>
            <Box>Explore</Box>
            <Box>Favourites</Box>
            <Box>Settings</Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Sidebar