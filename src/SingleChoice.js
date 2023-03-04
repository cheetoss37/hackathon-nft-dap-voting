import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const SingleChoice = ({ optionList, onChangeOption }) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => onChangeOption(e.target.value)}
      >
        {optionList?.map((item, index) => (
          <FormControlLabel
            key={index}
            value={index}
            control={<Radio />}
            label={item.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SingleChoice;
