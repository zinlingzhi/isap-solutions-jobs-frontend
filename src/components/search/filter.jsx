import * as React from "react";

// components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

export default function FilterSearch() {
  return (
    <Paper square elevation={0} sx={{ px: 2 }}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        sx={{ py: 2 }}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ width: 320 }}
          >
            <Grid item>
              <Typography
                sx={{ fontSize: 18, fontWeight: 800, color: "#3F3F46" }}
              >
                Filter your search
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="text">
                <Typography
                  sx={{ fontSize: 14, fontWeight: 800, color: "#A3A3A3" }}
                >
                  Clear all
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Divider width="100%" sx={{ my: 1 }} />

        <Grid item sx={{ my: 1 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 800, color: "#3F3F46" }}>
            Job Type
          </Typography>
        </Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Permanent (19,595)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Temporary (616)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Contract (3,236)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Full-time (23,389)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Part-time (146)"
            />
          </FormGroup>
        </Grid>

        <Divider width="100%" sx={{ my: 1 }} />

        <Grid item sx={{ my: 1 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 800, color: "#3F3F46" }}>
            Local
          </Typography>
        </Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Remote (19,595)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Local (616)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Remote only (3,236)"
            />
          </FormGroup>
        </Grid>

        <Divider width="100%" sx={{ my: 1 }} />

        <Grid item sx={{ my: 1 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 800, color: "#3F3F46" }}>
            Roles
          </Typography>
        </Grid>
        <Grid item>
          <Autocomplete
            sx={{ width: 300 }}
            multiple
            id="tags-filled"
            options={roles.map((option) => option.title)}
            defaultValue={[roles[0].title]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </Grid>

        <Divider width="100%" sx={{ my: 1 }} />

        <Grid item sx={{ my: 1 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 800, color: "#3F3F46" }}>
            Skills
          </Typography>
        </Grid>
        <Grid item>
          <Autocomplete
            sx={{ width: 300 }}
            multiple
            id="tags-filled"
            options={skills.map((option) => option.title)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                placeholder="Type in your skills"
              />
            )}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

// dummy roles
const roles = [
  { title: "Analyst" },
  { title: "Data Analyst" },
  { title: "iOS Developer" },
  { title: "Software Engineer" },
  { title: "Q&A Engineer" },
  { title: "Visual Designer" },
];

// dummy skills
const skills = [
  { title: "Analyst" },
  { title: "Data Analyst" },
  { title: "iOS Developer" },
  { title: "Software Engineer" },
  { title: "Q&A Engineer" },
  { title: "Visual Designer" },
];
