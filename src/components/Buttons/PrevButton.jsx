import { Button } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevPage } from "../../features/paginationSlice";

function PrevButton({ onPrev }) {
  // using Redux selector to access the current page (which is set on the click of the "prev" or "next" button)
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    // dispatch to modify the current page
    dispatch(prevPage());
    // onPrev deals with the index change of images when pages are changed
    onPrev();
  };

  return (
    <>
      <Button
        color="cyan"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
    </>
  );
}

export default PrevButton;
