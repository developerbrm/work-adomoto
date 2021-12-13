import { Send } from "@mui/icons-material";
import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import swal from "sweetalert";

const ContactPage = () => {
  // Rohanjindal666@gmail.com

  const initialState = {
    name: "",
    email: "",
    phone: "",
    form: "Adomoto Lead Form",
    message: "",
  };

  const [isSendingForm, setIsSendingForm] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    console.log({ name });
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setIsSendingForm(true);

    e.preventDefault();
    fetch("https://formsubmit.co/ajax/Rohanjindal666@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        swal({
          title: "Success",
          text: data.message,
          icon: "success",
        });

        for (let key in formData) {
          setFormData((prevData) => ({ ...prevData, [key]: "" }));
        }
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      })
      .finally(() => {
        setIsSendingForm(false);
      });

    console.log({ formData });
  };

  return (
    <>
      <Header />

      <main style={{ background: "#ddd" }}>
        <form
          id="Adomoto-lead-form"
          name="Adomoto-lead-form"
          onSubmit={handleSubmit}
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
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.1`}
              sx={{ mt: ".5rem" }}
              onChange={handleOnChange}
              value={formData["name"]}
              required
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.15`}
              sx={{ mt: ".5rem" }}
              onChange={handleOnChange}
              value={formData["email"]}
              required
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.2`}
              sx={{ mt: ".5rem" }}
              onChange={handleOnChange}
              value={formData["phone"]}
              required
              name="phone"
              label="Phone"
              type="tel"
              variant="outlined"
              fullWidth
            />

            <TextField
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.25`}
              sx={{ mt: ".5rem" }}
              onChange={handleOnChange}
              value={formData["message"]}
              required
              multiline
              name="message"
              label="Message"
              type="text"
              variant="outlined"
              fullWidth
            />

            <Button
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.4`}
              variant="contained"
              type="submit"
              color="success"
              disabled={isSendingForm}
              startIcon={<Send />}
            >
              Send Message
            </Button>
          </Container>
        </form>
      </main>

      <Contact />
    </>
  );
};

export default ContactPage;
