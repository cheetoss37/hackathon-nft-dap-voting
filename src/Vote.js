import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CheckboxIcon from "./CheckboxIcon";
import MultiChoice from "./MultiChoice";
import SingleChoice from "./SingleChoice";

const Vote = () => {
  const classes = useStyles();

  const handleVote = () => {
    alert("voted");
  };

  const handleChangeOption = (value) => {
    console.log(value);
  };

  return (
    <Container
      sx={{
        maxHeight: "calc(100vh - 96px)",
        overflowY: "scroll",
        py: 5,
      }}
    >
      <Stack spacing={5} className={classes.wrapper}>
        {MOCK_DATA?.map((item, index) =>
          item.isMulti ? (
            <Box key={index}>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="caption">{item.desc}</Typography>
              {item.isVoted ? (
                <Stack direction="row" alignItems="center" spacing={1} mt={4}>
                  <CheckboxIcon />
                  <Typography color="success.main">You Voted</Typography>
                </Stack>
              ) : (
                <>
                  <Stack>
                    <MultiChoice
                      optionList={item.options}
                      onChangeOption={handleChangeOption}
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleVote()}
                    className={classes.button}
                  >
                    <Typography>Vote</Typography>
                  </Button>
                </>
              )}
            </Box>
          ) : (
            <Box key={index}>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="caption">{item.desc}</Typography>
              {item.isVoted ? (
                <Stack direction="row" alignItems="center" spacing={1} mt={4}>
                  <CheckboxIcon />
                  <Typography color="success.main">You Voted</Typography>
                </Stack>
              ) : (
                <>
                  <Stack>
                    <SingleChoice
                      optionList={item.options}
                      onChangeOption={handleChangeOption}
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleVote()}
                    className={classes.button}
                  >
                    <Typography>Vote</Typography>
                  </Button>
                </>
              )}
            </Box>
          )
        )}
      </Stack>
    </Container>
  );
};

const MOCK_DATA = [
  {
    isVoted: true,
    title: "Approval for  Evermoon invesment 💎!",
    desc: "Evermoon has passed IC voting with the unanimous 100% approval rate. This vote will automatically be approved in x days unless the community reject the investment.",
    options: [
      {
        key: "1",
        value: "option A",
      },
      {
        key: "2",
        value: "option B",
      },
      {
        key: "1",
        value: "option C",
      },
    ],
  },
  {
    isMulti: true,
    title: "Approval for  Evermoon invesment 💎!",
    desc: "Evermoon has passed IC voting with the unanimous 100% approval rate. This vote will automatically be approved in x days unless the community reject the investment.",
    options: [
      {
        key: "1",
        value: "option A",
      },
      {
        key: "2",
        value: "option B",
      },
      {
        key: "1",
        value: "option C",
      },
    ],
  },
  {
    isMulti: true,
    title: "Approval for  Evermoon invesment 💎!",
    desc: "Evermoon has passed IC voting with the unanimous 100% approval rate. This vote will automatically be approved in x days unless the community reject the investment.",
    options: [
      {
        key: "1",
        value: "option A",
      },
      {
        key: "2",
        value: "option B",
      },
      {
        key: "1",
        value: "option C",
      },
    ],
  },
  {
    title: "Approval for  Evermoon invesment 💎!",
    desc: "Evermoon has passed IC voting with the unanimous 100% approval rate. This vote will automatically be approved in x days unless the community reject the investment.",
    options: [
      {
        key: "1",
        value: "option A",
      },
      {
        key: "2",
        value: "option B",
      },
      {
        key: "1",
        value: "option C",
      },
    ],
  },
  {
    title: "Approval for  Evermoon invesment 💎!",
    desc: "Evermoon has passed IC voting with the unanimous 100% approval rate. This vote will automatically be approved in x days unless the community reject the investment.",
    options: [
      {
        key: "1",
        value: "option A",
      },
      {
        key: "2",
        value: "option B",
      },
      {
        key: "1",
        value: "option C",
      },
    ],
  },
  {
    isVoted: true,
    title: "Approval for  Evermoon invesment 💎!",
    desc: "Evermoon has passed IC voting with the unanimous 100% approval rate. This vote will automatically be approved in x days unless the community reject the investment.",
    options: [
      {
        key: "1",
        value: "option A",
      },
      {
        key: "2",
        value: "option B",
      },
      {
        key: "1",
        value: "option C",
      },
    ],
  },
  {
    title: "Approval for  Evermoon invesment 💎!",
    desc: "Evermoon has passed IC voting with the unanimous 100% approval rate. This vote will automatically be approved in x days unless the community reject the investment.",
    options: [
      {
        key: "1",
        value: "option A",
      },
      {
        key: "2",
        value: "option B",
      },
      {
        key: "1",
        value: "option C",
      },
    ],
  },
];

export default Vote;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 24,
    maxHeight: "100%",
    overflowY: "scroll",
  },
  button: {
    "&$button": {
      textTransform: "capitalize",
    },
  },
}));
