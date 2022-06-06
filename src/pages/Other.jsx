import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Other = () => {
  return (
    <Container>
      <FormControl sx={{ mt: "47px" }}>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            value="female"
            size="small"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio size="small" />}
            label="Male"
          />
          <FormControlLabel
            value="other"
            control={
              <Radio
                sx={{
                  color: '#ccc',
                  "&.Mui-checked": {
                    color: '#444',
                  },
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }}
              />
            }
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default Other;
