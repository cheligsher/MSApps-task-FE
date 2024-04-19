import React, { useState } from "react";
import Buttons from "./Buttons/Buttons";
import { Box } from "@mantine/core";
import SelectionModal from "./Modals/SelectionModal";
import { useDisclosure } from "@mantine/hooks";
import PhotoGrid from "./PhotoGrid";

function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 9;

  // handles the increase of the start index when the next button is clicked
  const handleNext = () => {
    setStartIndex(startIndex + imagesPerPage);
  };

  // handles the decrease of the start index when the prev button is clicked
  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - imagesPerPage));
  };

  return (
    <Box pt={"lg"}>
      <Buttons open={open} onNext={handleNext} onPrev={handlePrev} />
      <SelectionModal opened={opened} close={close} />
      <PhotoGrid startIndex={startIndex} imagesPerPage={imagesPerPage} />
    </Box>
  );
}

export default Home;
