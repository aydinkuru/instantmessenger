import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
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
            <Text></Text>
          </Button>
        </Tooltip>
      </Box>
      ;
    </>
  );
};

export default SideDrawer;
