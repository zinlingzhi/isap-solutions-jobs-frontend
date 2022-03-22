import * as React from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// icons and logos
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VideoCamera from "@mui/icons-material/Videocam";
import UploadResume from "@mui/icons-material/Upload";
import ThankYou from "./thank-you";

const Input = styled("input")({
  display: "none",
});

export default function RegisterCVMain() {
  // textfield controllers
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");

  const [education, setEducation] = React.useState("");
  const [employment, setEmployment] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [personality, setPersonality] = React.useState("");

  // move to another page
  const [isCVSent, setCVSent] = React.useState(false);

  // uploaded files
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedResume, setSelectedResume] = React.useState(null);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  // preview image
  const [imageUrl, setImageUrl] = React.useState(null);

  // executes on load
  React.useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // on save button click
  async function sendCV() {
    console.log(selectedVideo);
    // axios call & body
    const body = {
      image: await toBase64(selectedImage),
      pdffile: await toBase64(selectedResume),
      name: firstName,
      lastname: lastName,
      dateofbirth: birth,
      Mail: email,
      "Mobile Number": phonenumber,
      role: "iOS Developer",
      postcode: postcode,
      city: city,
      address: address,
      Qualification: education,
      Employment: employment,
      Skills: skills,
      Personality: personality,
    };

    console.log(body);

    axios
      .post(`https://flasksingintest.azurewebsites.net/saveResume`, body)
      .then((res) => {
        console.log(res);
      });

    setCVSent(true);
  }

  return (
    <Box>
      {isCVSent ? (
        <ThankYou />
      ) : (
        <>
          <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ paddingTop: 15 }}
          >
            <Grid item>
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#3F3F46",
                  marginBottom: 2,
                }}
              >
                Register your CV
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={8} sm={2} md={2} lg={1.5} xl={1.5}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: "#A3A3A3" }}
                  >
                    Your Photo*
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: "#E5E5E5",
                    px: imageUrl !== null ? 0 : 5,
                    py: imageUrl !== null ? 0 : 5,
                  }}
                >
                  {imageUrl === null ? (
                    <label htmlFor="photo-file-upload">
                      <Input
                        accept="image/*"
                        id="photo-file-upload"
                        type="file"
                        onChange={(e) => setSelectedImage(e.target.files[0])}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera sx={{ color: "#A3A3A3", fontSize: 40 }} />
                      </IconButton>
                    </label>
                  ) : (
                    <img src={imageUrl} alt={selectedImage.name} width={140} />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={3} xl={3}>
              <TextField
                onChange={(event) => setFirstName(event.target.value)}
                required
                fullWidth
                id="firstname-required"
                label="First Name"
                variant="standard"
              />
              <TextField
                onChange={(event) => setLastName(event.target.value)}
                required
                fullWidth
                id="lastname-required"
                label="Last Name"
                variant="standard"
              />
              <TextField
                onChange={(event) => setBirth(event.target.value)}
                fullWidth
                id="dateofbirth"
                label="Date of Birth"
                variant="standard"
              />
              <TextField
                onChange={(event) => setEmail(event.target.value)}
                required
                fullWidth
                id="email-required"
                label="Email"
                variant="standard"
              />
            </Grid>
            <Grid item xs={8} sm={10} md={8} lg={3} xl={3}>
              <TextField
                onChange={(event) => setPostcode(event.target.value)}
                required
                fullWidth
                id="postcode-required"
                label="Postcode"
                variant="standard"
              />
              <TextField
                onChange={(event) => setCity(event.target.value)}
                required
                fullWidth
                id="city-required"
                label="City/Locality"
                variant="standard"
              />
              <TextField
                onChange={(event) => setAddress(event.target.value)}
                fullWidth
                id="address"
                label="Address"
                variant="standard"
              />
              <TextField
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
                fullWidth
                id="phonenumber-required"
                label="Phone Number"
                variant="standard"
              />
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="center" spacing={2}>
            <Grid item>
              <label htmlFor="upload-cv-file">
                <Input
                  accept="application/pdf"
                  type="file"
                  id="upload-cv-file"
                  onChange={(e) => setSelectedResume(e.target.files[0])}
                />
                <Button
                  component="span"
                  startIcon={<UploadResume />}
                  variant="contained"
                  disableElevation
                  sx={{
                    marginTop: 4,
                    marginBottom: 2,
                    borderRadius: 0,

                    height: 40,
                    backgroundColor: "#1D4ED8",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#1D4ED8",
                    },
                    fontSize: 16,
                  }}
                >
                  Upload your CV
                </Button>
              </label>
            </Grid>
            <Grid item>
              <label htmlFor="upload-video-file">
                <Input
                  accept="video/*"
                  type="file"
                  id="upload-video-file"
                  onChange={(e) => setSelectedVideo(e.target.files[0])}
                />
                <Button
                  component="span"
                  startIcon={<VideoCamera />}
                  variant="contained"
                  disableElevation
                  sx={{
                    marginTop: 4,
                    marginBottom: 2,
                    borderRadius: 0,
                    height: 40,
                    backgroundColor: "#3F3F46",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#3F3F46",
                    },
                    fontSize: 16,
                  }}
                >
                  Upload Video Intro
                </Button>
              </label>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="center">
            <Grid item xs={7}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#3F3F46",
                      marginTop: 2,
                    }}
                  >
                    Education
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={5}>
                      <TextField
                        onChange={(event) => setEducation(event.target.value)}
                        required
                        fullWidth
                        id="edname-required"
                        label="Name of educational institution"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        required
                        fullWidth
                        id="voc-required"
                        label="Vocation"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={1.5}>
                      <TextField
                        required
                        fullWidth
                        id="st-required"
                        label="Start"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={1.5}>
                      <TextField
                        required
                        fullWidth
                        id="fn-required"
                        label="Finished"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      marginTop: 4,
                      marginBottom: 2,
                      borderRadius: 0,
                      width: 90,
                      height: 40,
                      backgroundColor: "#D4D4D4",
                      textTransform: "none",
                      ":hover": {
                        backgroundColor: "#D4D4D4",
                      },
                      fontSize: 16,
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#3F3F46",
                      marginTop: 2,
                    }}
                  >
                    Employment
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={5}>
                      <TextField
                        onChange={(event) => setEmployment(event.target.value)}
                        required
                        fullWidth
                        id="edname-required"
                        label="Name of the organization"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        required
                        fullWidth
                        id="ps-required"
                        label="Position"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={1.5}>
                      <TextField
                        required
                        fullWidth
                        id="st-required"
                        label="Start"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={1.5}>
                      <TextField
                        required
                        fullWidth
                        id="fn-required"
                        label="Finished"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      marginTop: 4,
                      marginBottom: 2,
                      borderRadius: 0,
                      width: 90,
                      height: 40,
                      backgroundColor: "#D4D4D4",
                      textTransform: "none",
                      ":hover": {
                        backgroundColor: "#D4D4D4",
                      },
                      fontSize: 16,
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#3F3F46",
                      marginTop: 2,
                    }}
                  >
                    Skills
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item sx={{ width: 940 }}>
                      <TextField
                        onChange={(event) => setSkills(event.target.value)}
                        required
                        fullWidth
                        id="skills-required"
                        label="Indicate your skills"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#3F3F46",
                      marginTop: 4,
                    }}
                  >
                    Personality
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={6}>
                      <TextField
                        onChange={(event) => setPersonality(event.target.value)}
                        required
                        fullWidth
                        id="personal-required"
                        label="Characteristic"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="voc-required"
                        label="Hobby"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="st-required"
                        label="Bad Habbits"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="ac-required"
                        label="Achievements"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="center">
            <Button
              onClick={sendCV}
              variant="contained"
              disableElevation
              sx={{
                my: 10,
                borderRadius: 0,
                width: 260,
                height: 40,
                backgroundColor: "#1D4ED8",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#1D4ED8",
                },
                fontSize: 16,
              }}
            >
              Save
            </Button>
          </Grid>
        </>
      )}
    </Box>
  );
}
