import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const Admin = () => {
  const [proposalTitle, setProposalTitle] = useState("");
  const [proposalDesc, setProposalDesc] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [selectionType, setSelectionType] = useState("");

  const [numOfTokenUsed, setNumOfTokenUsed] = useState("");
  const [threshold, setThreshold] = useState("");
  const [maxNumberVote, setMaxNumberVote] = useState("");

  const DEFAULT_OPTIONS = [
    { id: 1, value: "" },
    { id: 2, value: "" },
  ];

  const [optionsArray, setOptionsArray] = useState(DEFAULT_OPTIONS);

  const handleAddNewOptions = () => {
    const newOptions = {
      id: DEFAULT_OPTIONS.length + 1,
      value: "",
    };
    const clonedData = [...optionsArray];
    clonedData.push(newOptions);

    setOptionsArray(clonedData);
  };

  const handleChangeOptionsName = (e, index) => {
    const clonedData = [...optionsArray];

    clonedData[index].value = e.target.value;

    setOptionsArray(clonedData);
  };

  const handleSelectionType = (event) => {
    setSelectionType(event.target.value);
  };

  const handleChangeTitle = (e) => {
    setProposalTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setProposalDesc(e.target.value);
  };

  const handleChangeTokenAddress = (e) => {
    setTokenAddress(e.target.value);
  };

  const handleChangeStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const handleChangeEndTime = (e) => {
    setEndTime(e.target.value);
  };

  const handleChangeNumOfToken = (e) => {
    setNumOfTokenUsed(e.target.value);
  };

  const handleChangeThreshold = (e) => {
    setThreshold(e.target.value);
  };

  const handleChangeMaxNumber = (e) => {
    setMaxNumberVote(e.target.value);
  };

  const handleCreateProposal = () => {
    try {
      console.log("execute function");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: 2,
          mb: 2,
          background: "#fff",
          padding: 4,
          borderRadius: 8,
        }}
      >
        <Typography variant="h5">Create Proposal</Typography>

        <Box sx={{ display: "flex" }}>
          <Box>
            <TextField
              sx={{ mb: 2, mt: 2, width: 400 }}
              required
              id="decision-title"
              label="Decision Title"
              value={proposalTitle}
              onChange={handleChangeTitle}
            />

            <TextField
              sx={{ mb: 2, width: 400 }}
              required
              id="decision-desc"
              label="Description"
              value={proposalDesc}
              onChange={handleChangeDesc}
            />

            <TextField
              sx={{ mb: 2, width: 400 }}
              required
              id="token-address"
              label="Token Address"
              value={tokenAddress}
              onChange={handleChangeTokenAddress}
            />

            <TextField
              sx={{ mb: 2, width: 400 }}
              required
              id="start-time"
              label="Start Time"
              value={startTime}
              onChange={handleChangeStartTime}
            />

            <TextField
              sx={{ mb: 2, width: 400 }}
              required
              id="end-time"
              label="End Time"
              value={endTime}
              onChange={handleChangeEndTime}
            />
          </Box>

          <Box>
            <Box>
              <Typography sx={{ mb: 2, mt: 2 }}>Options Field</Typography>
              {optionsArray.map((item, idx) => {
                return (
                  <TextField
                    id={`option-text-${idx}`}
                    key={idx}
                    label={`Options ${idx + 1}`}
                    sx={{ mb: 2, width: 400 }}
                    value={item.value}
                    onChange={(e) => {
                      handleChangeOptionsName(e, idx);
                    }}
                  />
                );
              })}
              <Button
                variant="contained"
                sx={{ fontSize: 24, padding: 0, mb: 2 }}
                onClick={handleAddNewOptions}
              >
                +
              </Button>
            </Box>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="selection-type">Selection</InputLabel>
              <Select
                labelId="proposal-selection-type"
                id="selection-type"
                value={selectionType}
                label="Selection"
                onChange={handleSelectionType}
              >
                <MenuItem value={1}>Single</MenuItem>
                <MenuItem value={2}>Polling</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="number-of-tokens"
              label="Number of tokens used to each option"
              type="number"
              sx={{ mb: 2, width: 400 }}
              value={numOfTokenUsed}
              onChange={handleChangeNumOfToken}
            />
            <TextField
              id="threshold-value"
              label="Threshold value for each value"
              type="number"
              sx={{ mb: 2, width: 400 }}
              value={threshold}
              onChange={handleChangeThreshold}
            />
            <TextField
              id="max-number-vote"
              label="Max number of options each participant can vote"
              type="number"
              sx={{ mb: 2, width: 400 }}
              value={maxNumberVote}
              onChange={handleChangeMaxNumber}
            />
          </Box>
        </Box>
        <Button variant="contained" onClick={handleCreateProposal}>
          Create Proposal
        </Button>
      </Box>
    </Box>
  );
};

export default Admin;
