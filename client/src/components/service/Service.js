import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import GlobalHeader from '../GlobalHeader';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Service({next, back}) {
  const classes = useStyles();
  const [Header, setHeader] = useState({
    TokenNo: "",
    ServiceDate: new Date(),
    MRNo: 'recID',
    Ward: "",
    Amount: "",
    TotalAmount: "",
    PatientContribution: "",
    Remarks: "",
    CreatedUser: "Admin",
    ModifyUser: "Admin"
});

  const handleSubmit = () => {
    console.log(Header);
    next();
  }
  return (
    <div>
      <GlobalHeader forward={handleSubmit} back={back} title="Service"/>
      <div style={{ padding: 16, margin: 'auto', maxWidth: '80%', justifyContent:'center' }}>
      
        <Grid container>
          <Grid sm={12}>
            <Grid container spacing={4}>
              <Grid item lg={7} sm={12}>
                <Grid container spacing={2}>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField value={Header.MRNo} id="MRNo" fullWidth
                      type="text" disabled={true}
                      label="M.R. #"/>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField value={Header.TokenNo} id="TokenNo" type="text" fullWidth
                      onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
                      label="Token No"/>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField id="ServiceDate" label="Service Date" type="date"
                      value={Header.ServiceDate} fullWidth
                      onChange={(e) => setHeader({ ...Header, ServiceDate: e.target.value })}
                      InputLabelProps={{
                        shrink: true,
                      }}/>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <FormControl fullWidth>
                      <InputLabel  id="demo-simple-select-helper-label">Gender</InputLabel>
                      <Select 
                        labelId="demo-simple-select-helper-label"
                        id="Gender"
                        value={Header.Gender}
                        onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <FormControl fullWidth>
                      <InputLabel  id="demo-simple-select-helper-label">Ward</InputLabel>
                      <Select 
                        labelId="demo-simple-select-helper-label"
                        id="Ward"
                        value={Header.Ward}
                        onChange={(e) => setHeader({ ...Header, Ward: e.target.value })}
                      >
                        <MenuItem value="Ward #1">Ward #1</MenuItem>
                        <MenuItem value=" Ward #2">Ward #2</MenuItem>
                        <MenuItem value="Ward #3">Ward #3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField value={Header.Amount} id="Amount" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, Amount: e.target.value })}
                      label="Amount"/>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField value={Header.TotalAmount} id="TotalAmount" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, TotalAmount: e.target.value })}
                      label="Total Amount"/>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField value={Header.PatientContribution} id="PatientContribution" type="text" fullWidth
                      onChange={(e) => setHeader({ ...Header, PatientContribution: e.target.value })}
                      label="Patient Contribution"/>
                  </Grid>
                  <Grid item md={8} sm={12} lg={6}>
                    <TextField value={Header.Remarks} id="Remarks" type="text" fullWidth
                      onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                      label="Remarks"/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={1}/>
              <Grid item lg={4} sm={12}>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={12} lg={6}>
                    <TextField value={Header.TokenNo} id="TokenNo" type="text" fullWidth
                      // onChange={(e) => setHeader({ ...Header, MaleKids: e.target.value })}
                      label="Token No" disabled={true}/>
                  </Grid>
                </Grid>
              </Grid> 
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

