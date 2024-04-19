import { Modal, Text } from "@mantine/core";
import React from "react";

// this modal shows details about the image that was clicked on
function ImageDetailsModal({ opened, close, item }) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      title={"More about this image:"}
    >
      <Text>
        <Text span fw={500}>
          Comments:{" "}
        </Text>
        {/* the selected "item" is coming from the parent component where the elements are mapped out and displayed */}
        {item.comments}
      </Text>
      <Text>
        <Text span fw={500}>
          Collections:{" "}
        </Text>
        {item.collections}
      </Text>
      <Text>
        <Text span fw={500}>
          Downloads:{" "}
        </Text>
        {item.downloads}
      </Text>
      <Text>
        <Text span fw={500}>
          Views:{" "}
        </Text>
        {item.views}
      </Text>
      <Text>
        <Text span fw={500}>
          Likes:{" "}
        </Text>
        {item.likes}
      </Text>
    </Modal>
  );
}

export default ImageDetailsModal;
