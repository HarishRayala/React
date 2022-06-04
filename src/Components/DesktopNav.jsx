import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

const DesktopNav = () => {
  return (
    <div>
      DesktopNav
      <Flex>
        <HStack spacing="700px">
          <Box>
            <Tabs>
              <TabList>
                <HStack spacing="10px">
                  <Link fontWeight="bold">Logo</Link>
                  <Menu isLazy>
                    <MenuButton>Inspiration</MenuButton>
                    <MenuList gap="10px">
                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem>Explore design work</MenuItem>
                      <MenuItem>Trending Design to inspire you</MenuItem>
                      <MenuItem>New and Note worthy</MenuItem>
                      <MenuItem>Up Coming DEsigners</MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu isLazy>
                    <MenuButton>Find Work</MenuButton>
                    <MenuList>
                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem>Job Board</MenuItem>
                      <MenuItem>Find your dream design job</MenuItem>
                      <MenuItem>Freelance Projects</MenuItem>
                      <MenuItem>An Exclusive list for contract work</MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton>Learn Design</MenuButton>
                  </Menu>
                  <Menu>
                    <MenuButton>Hire Designers</MenuButton>
                  </Menu>
                </HStack>
              </TabList>
            </Tabs>
          </Box>
          <Box gap="20px">
            <Link>Sign in</Link>
            <Button backgroundColor="#ed64a6">SignUp</Button>
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};

export default DesktopNav;
