import { Button, Flex, Group, Modal, Radio, Select } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../features/categorySlice";
import { setSorting } from "../../features/sortingSlice";

function SelectionModal({ opened, close }) {
  const [value, setValue] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const dispatch = useDispatch();

  // handleChange deals with setting the new value for the Select
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // handleRadioChange deals with setting the new value for the Radio
  const handleRadioChange = (newValue) => {
    setRadioValue(newValue);
  };

  // once the search button is clicked, the category and sorting values are updated using dispatch
  const onSearch = () => {
    dispatch(setCategory(value));
    if (radioValue) {
      dispatch(setSorting(radioValue));
    }
    close();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title="Select the category that you want to see"
      >
        <Select
          data={[
            "Animals",
            "Dogs",
            "Sport",
            "Parks",
            "Oceans",
            "Work",
            "Color",
            "Technology",
            "Food",
          ]}
          value={value}
          label="Choose the category you'd like to search for and then click search "
          placeholder="Choose here..."
          onChange={handleChange}
        />
        <Radio.Group
          mt="md"
          value={radioValue}
          onChange={handleRadioChange}
          name="sortingRadio"
          label="Choose an option below if you would like the images sorted"
          description="If no option is chosen, no sorting will be done"
        >
          <Group mt="xs">
            <Radio value="id" label="Sort by photo ID" />
            <Radio value="date" label="Sort by date" disabled/>
          </Group>
        </Radio.Group>

        <Flex justify="flex-end">
          <Button mt={"lg"} disabled={!value && !radioValue} onClick={onSearch}>
            Save
          </Button>
        </Flex>
      </Modal>
    </>
  );
}

export default SelectionModal;
