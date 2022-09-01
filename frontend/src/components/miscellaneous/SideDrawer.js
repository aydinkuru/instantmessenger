import { Box, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, Tooltip } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box>
        <Tooltip label="Search Users to chat" hasArrow placemenet="bottom-end">
          <Button variant="ghost">
            <i class="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="2x1" fontFamily="Work sans">
          Instant Messenger
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2x1" m={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" name={user.name} />
            </MenuButton>
          </Menu>
        </div>
      </Box>
      ;
    </>
  );
};

export default SideDrawer;
