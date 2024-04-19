import React from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { Grid } from "@mantine/core";
import SelectCategoryButton from "./SelectCategoryButton";

function Buttons({ open, onNext, onPrev }) {
  return (
    // a Mantine grid to display the 3 buttons
    <Grid justify="space-between" align="center" ta="center" mb={"lg"}>
      <Grid.Col span={3}>
        <PrevButton onPrev={onPrev} />
      </Grid.Col>
      <Grid.Col span={3}>
        <SelectCategoryButton open={open} />
      </Grid.Col>
      <Grid.Col span={3}>
        <NextButton onNext={onNext} />
      </Grid.Col>
    </Grid>
  );
}

export default Buttons;
