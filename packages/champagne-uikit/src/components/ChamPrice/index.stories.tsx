import React from "react";
import { ChamPrice, ChamPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/ChamPrice",
  component: ChamPrice,
};

const Template: React.FC<ChamPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <ChamPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  chamPriceUsd: 20.0,
};
