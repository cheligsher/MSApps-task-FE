import { Box, Grid, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import ImageDetailsModal from "./Modals/ImageDetailsModal";
import { useGetPhotosQuery } from "../api/photosApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataForPage, fetchDataWithSorting } from "../api/api";

function PhotoGrid({ startIndex, imagesPerPage }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // accessing the category via Redux useSelector
  const category = useSelector((state) => state.category);
  // data is the fetched photos of the selected category
  const { data } = useGetPhotosQuery(category);
  // displayedImages displays 9 images from the start index (depending on the page)
  const displayedImages = data?.hits?.slice(
    startIndex,
    startIndex + imagesPerPage
  );
  // accessing the current page via Redux useSelector
  const currentPage = useSelector((state) => state.pagination.currentPage);
  // accessing the sortBy value via Redux useSelector
  const sortBy = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  // when an image is clicked, the selected item is set (and then accessed by the modal), and the modal is opened
  const handleImageClick = (item) => {
    setSelectedItem(item);
    open();
  };

  // useEffect to fetch the data for the current page
  useEffect(() => {
    fetchDataForPage(currentPage, dispatch);
  }, [currentPage, dispatch]);

  // useEffect to fetch the sorted data for the category
  useEffect(() => {
    fetchDataWithSorting(category, sortBy, dispatch);
  }, [sortBy, dispatch]);

  return (
    <>
      <Box mx="auto" w={"70%"} ta="center">
        <Grid mx={5} justify="center" align="center" ta="center">
          {/* if there are elements available, they will be mapped out and their relevant properties used */}
          {displayedImages &&
            displayedImages.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <Grid.Col
                    key={item.id}
                    span={4}
                    onClick={() => handleImageClick(item)}
                    mx="auto"
                  >
                    <Image
                      radius={"md"}
                      src={item.previewURL}
                      h={200}
                      w={200}
                      mx="auto"
                    />
                  </Grid.Col>
                </React.Fragment>
              );
            })}
        </Grid>
      </Box>

      {selectedItem && (
        <ImageDetailsModal opened={opened} close={close} item={selectedItem} />
      )}
    </>
  );
}

export default PhotoGrid;

{
  /* {isLoading && <Grid>
            <Grid.Col span={4}><Skeleton height={100} radius="xl"/></Grid.Col>
            <Grid.Col span={4}><Skeleton height={100} radius="xl"/></Grid.Col>
            <Grid.Col span={4}><Skeleton height={100} radius="xl"/></Grid.Col>
            </Grid>} */
}
