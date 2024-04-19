import { Button } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../../features/paginationSlice";

function NextButton({ onNext }) {
  const dispatch = useDispatch();
  // using Redux selector to access the current page (which is set on the click of the "prev" or "next" button)
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const handleNextPage = () => {
    // dispatch to modify the current page
    dispatch(nextPage());
    // onNext deals with the index change of images when pages are changed
    onNext();
  };
  return (
    <>
      <Button color="cyan" onClick={handleNextPage} disabled={currentPage >= 3}>
        Next
      </Button>
    </>
  );
}

export default NextButton;
