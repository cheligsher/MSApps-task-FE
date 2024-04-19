import { Button } from "@mantine/core";
import React from "react";

function SelectCategoryButton({ open }) {
  return (
    <>
      <Button onClick={open}>Select Category</Button>
    </>
  );
}

export default SelectCategoryButton;
