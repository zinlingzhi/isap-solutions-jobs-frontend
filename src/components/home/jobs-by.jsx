import * as React from "react";

// components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function JobsByShort() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid container direction="column" sx={{ px: 5, py: 3 }}>
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={2}
            sx={{ borderRadius: 0, borderBottom: "2px solid #3F3F46" }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                fontSize: 18,
                fontWeight: 800,
                color: "#3F3F46",
              }}
            >
              Jobs by role
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={2}
            sx={{ borderRadius: 0, borderBottom: "2px solid #A3A3A3" }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                fontSize: 18,
                fontWeight: 500,
                color: "#A3A3A3",
              }}
            >
              Jobs by skill
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={2}
            sx={{ borderRadius: 0, borderBottom: "2px solid #A3A3A3" }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                fontSize: 18,
                fontWeight: 500,
                color: "#A3A3A3",
              }}
            >
              Jobs by sector
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={2}
            sx={{ borderRadius: 0, borderBottom: "2px solid #A3A3A3" }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                fontSize: 18,
                fontWeight: 500,
                color: "#A3A3A3",
              }}
            >
              Jobs by location
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={2}
            sx={{ borderRadius: 0, borderBottom: "2px solid #A3A3A3" }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                fontSize: 18,
                fontWeight: 500,
                color: "#A3A3A3",
              }}
            >
              Jobs by company
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={2}
            sx={{ borderRadius: 0, borderBottom: "2px solid #A3A3A3" }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                fontSize: 18,
                fontWeight: 500,
                color: "#A3A3A3",
              }}
            >
              Popular searches
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ paddingTop: isTablet ? 4 : 0 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Analyst (1,653)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Android developer (75)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Business analyst (552)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Business intelligence (1,522)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Data analyst (491)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Entry level IT (37)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Graduate IT (34)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Head of IT (54)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  iOS developer (64)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT director (25)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT helpdesk (386)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT manager (499)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT project manager (525)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT sales (414)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT support (719)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT technician (689)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  IT trainer (5)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Mobile developer (111)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Network engineer (167)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  PHP developer (99)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Programme manager (241)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Project management (2,605)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Project support (2,075)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  SAP consultant (36)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Security manager (87)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Software developer (4,774)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Software engineer (4,782)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Software testing (1,468)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Test analyst (108)
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                >
                  Test manager (44)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
