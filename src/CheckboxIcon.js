import React, { memo } from "react";
import { SvgIcon } from "@mui/material";

const CheckboxIcon = ({ sx, ...otherProps }) => {
  return (
    <SvgIcon
      viewBox="0 0 32 32"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path
        d="M21.5 13L14.1625 20L10.5 16.5"
        stroke="#2e7d32"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke="#2e7d32"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default memo(CheckboxIcon);
