import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import Contact from "../../components/Contact";
import Header from "../../components/Header";

const index = () => {
  // fetch("https://formsubmit.co/ajax/your@email.com", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "FormSubmit",
  //     message: "I'm from Devro LABS",
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  return (
    <>
      <Header />

      <main>
        <form
          action="https://formsubmit.co/developerbrm@gmail.com"
          method="POST"
        >
          <Container
            maxWidth="800px"
            sx={{
              maxWidth: "500px",
              height: "70vh",
              display: "grid",
              gap: ".5rem",
              placeContent: "center",
              // mt: "5rem",
              // mx: "auto",
            }}
          >
            <Typography variant="h4" sx={{ color: "#111" }} align="center">
              Please fill out the form
            </Typography>

            <TextField
              required
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              name="phone"
              label="Phone"
              type="tel"
              variant="outlined"
              fullWidth
            />

            <TextField
              required
              multiline
              name="message"
              label="Message"
              type="text"
              variant="outlined"
              fullWidth
            />

            <Button variant="contained" type="submit" color="success">
              Send Message
            </Button>
          </Container>
        </form>
      </main>
      {/* <Contact /> */}
    </>
  );
};

export default index;
