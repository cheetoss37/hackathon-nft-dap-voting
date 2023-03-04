import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";

const MultiChoice = ({ optionList, onChangeOption }) => {
  const [value, setValue] = useState([]);
  const handleChangeOptionList = (isChecked, index) => {
    if (isChecked) {
      setValue([...value, index]);
    } else {
      let cloneValue = [...value];
      cloneValue = cloneValue.filter(function (item) {
        return item !== index;
      });
      setValue([...cloneValue]);
    }
  };

  useEffect(() => {
    onChangeOption(value);
  }, [value]);

  return (
    <FormGroup>
      {optionList?.map((item, index) => (
        <FormControlLabel
          key={index}
          control={<Checkbox />}
          label={item.value}
          onChange={(e) => handleChangeOptionList(e.target.checked, index)}
        />
      ))}
    </FormGroup>
  );
};

export default MultiChoice;
