import React, { useState } from "react";
import app from "./firebase";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { Box, Button, InputBase, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const TestConnectFirebase = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf("/") + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
  }

  function writeUserData(userId, name, email) {
    const db = getDatabase(app);
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
    });
  }

  const getUser = (id) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Stack spacing={3} sx={{ mt: 4 }}>
        <Box>
          <Typography>name</Typography>
          <InputBase
            className={classes.input}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Box>
        <Box>
          <Typography>email</Typography>
          <InputBase
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            const id = uuid();
            writeUserData(id, name, email);
          }}
        >
          create
        </Button>
      </Stack>
      <Stack>
        <Button onClick={() => getUser()}>Get Data</Button>
      </Stack>
      <Box></Box>
    </div>
  );
};

export default TestConnectFirebase;

const useStyles = makeStyles((theme) => ({
  input: {
    border: "1px solid white",
  },
}));
