import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from "../assets/aleksi-raisa-y-BIhyjjHv4-unsplash.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Image
        w={"full"}
        h={"full"}
        src={btcSrc}
        objectFit={["contain", "cover"]}
      />

      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "10px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.700"}
          mt={"-20"}
        >
          Xcrypto
        </Text>
      </motion.div>
    </Box>
  );
};

export default Home;
