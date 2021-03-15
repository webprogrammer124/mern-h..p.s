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
import SubTable from './SubTable';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Welfare({next, back}) {
  const classes = useStyles();
  const [Header, setHeader] = useState({
    MRNo: 'recID',
    TokenNo: "",
    WelfareDate: new Date(),
    Profession: "",
    Fiqa: "",
    Education: '',
    Cast: "",
    MonthlyIncome: 0,
    Guardian: "",
    OtherInfo: "",
    MaleKids: "",
    FemaleKids: "",
    OtherKids: "",
    Brothers: "",
    Sisters: "",
    NoOFFamilyMembers: "",
    IsMarried: false,
    IsAbleToPay: false,
    IsEarning: false,
    HaveGold: false,
    ReqName: '',
    ReqPhone: "",
    ReqRelationWithPatient: '',
    CreateUser: "Admin",
    ModifyUser: "Admin",
});

  const handleSubmit = () => {
    console.log(Header);
    next();
  }

  return (
    <div>
      <GlobalHeader forward={handleSubmit} back={back} title="Welfare"/>
      <div style={{ padding: 16, margin: 'auto', maxWidth: '80%', justifyContent:'center' }}>
        <Grid container spacing={2}>
          <Grid item md={4} sm={12} lg={3}>
            <TextField value={Header.MRNo} id="MRNo" fullWidth
              type="text" disabled={true}
              label="M.R. #"/>
          </Grid>
          <Grid item md={4} sm={12} lg={3}>
            <TextField value={Header.TokenNo} id="TokenNo" type="text" fullWidth
              onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
              label="TokenNo"/>
          </Grid>
          <Grid item md={4} sm={12} lg={3}>
            <TextField id="WelfareDate" label="Welfare Date" type="date"
              value={Header.WelfareDate} fullWidth
              onChange={(e) => setHeader({ ...Header, WelfareDate: e.target.value })}
              InputLabelProps={{
                shrink: true,
              }}/>
          </Grid>
          <Grid item md={4} sm={12} lg={3}>
            <FormControlLabel color="primary"
              control={<Checkbox checked={Header.IsRejected} name="Is Rejected" fullWidth
              onChange={e => setHeader({ ...Header, IsRejected: !Header.IsRejected })} />}
              label="Zakaat"
            />
            <FormControlLabel color="primary"
              control={<Checkbox checked={Header.IsRejected} name="Is Rejected" fullWidth
              onChange={e => setHeader({ ...Header, IsRejected: !Header.IsRejected })} />}
              label="Donation"
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid sm={12}>
            <Grid container spacing={2}>
              <Grid item md={4} sm={12} lg={3}>
                <TextField value={Header.Profession} id="Profession" type="text" fullWidth
                  onChange={(e) => setHeader({ ...Header, Profession: e.target.value })}
                  label="Profession"/>
              </Grid>
              <Grid item md={4} sm={12} lg={3}>
                <FormControl fullWidth>
                  <InputLabel  id="demo-simple-select-helper-label">Education</InputLabel>
                  <Select 
                    labelId="demo-simple-select-helper-label"
                    id="Education"
                    value={Header.Education}
                    onChange={(e) => setHeader({ ...Header, Education: e.target.value })}
                  >
                    <MenuItem value="matriculation">Matriculation</MenuItem>
                    <MenuItem value=" intermediate">Intermediate</MenuItem>
                    <MenuItem value="bachelors">Bachelors</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={4} sm={12} lg={3}>
                <FormControl fullWidth>
                  <InputLabel  id="demo-simple-select-helper-label">Fiqa</InputLabel>
                  <Select 
                    labelId="demo-simple-select-helper-label"
                    id="Fiqa"
                    value={Header.Fiqa}
                    onChange={(e) => setHeader({ ...Header, Fiqa: e.target.value })}
                  >
                    <MenuItem value="shia">Shia</MenuItem>
                    <MenuItem value="sunni">Sunni</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={4} sm={12} lg={3}>
                <TextField value={Header.Cast} id="Cast" type="text" fullWidth
                  onChange={(e) => setHeader({ ...Header, Cast: e.target.value })}
                  label="Cast"/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        
        <Grid container>
          <Grid sm={12}>
            <Grid container spacing={4}>
              <Grid item lg={7} sm={12}>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={12} lg={6}>
                    <TextField value={Header.ReqName} id="ReqName" type="text" fullWidth
                      onChange={(e) => setHeader({ ...Header, ReqName: e.target.value })}
                      label="Requestor Name"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <FormControl fullWidth>
                      <InputLabel  id="demo-simple-select-helper-label">Relation With Patient</InputLabel>
                      <Select 
                        labelId="demo-simple-select-helper-label"
                        id="ReqRelationWithPatient"
                        value={Header.ReqRelationWithPatient}
                        onChange={(e) => setHeader({ ...Header, ReqRelationWithPatient: e.target.value })}
                      >
                        <MenuItem value="mother">Mother</MenuItem>
                        <MenuItem value="father">Father</MenuItem>
                        <MenuItem value="daughter">Daughter</MenuItem>
                        <MenuItem value="son">Son</MenuItem>
                        <MenuItem value="self">Self</MenuItem>

                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.ReqPhone} id="ReqPhone" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, ReqPhone: e.target.value })}
                      label="Requestor Phone"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.Guardian} id="Guardian" type="text" fullWidth
                      onChange={(e) => setHeader({ ...Header, Guardian: e.target.value })}
                      label="Guardian"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.MonthlyIncome} id="MonthlyIncome" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, MonthlyIncome: e.target.value })}
                      label="Monthly Income"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.OtherInfo} id="OtherInfo" type="text" fullWidth
                      onChange={(e) => setHeader({ ...Header, OtherInfo: e.target.value })}
                      label="Other Info"/>
                  </Grid>
                  <Grid item sm={12} md={12} lg={12}>
                  <FormControlLabel color="primary"
                    control={<Checkbox checked={Header.IsMarried} name="Is Maried" fullWidth
                    onChange={e => setHeader({ ...Header, IsMarried: !Header.IsMarried })} />}
                    label="Maried"
                  />
                  <FormControlLabel color="primary"
                    control={<Checkbox checked={Header.HaveGold} name="HaveGold" fullWidth
                    onChange={e => setHeader({ ...Header, HaveGold: !Header.HaveGold })} />}
                    label="Have Gold"
                  />
                  <FormControlLabel color="primary"
                    control={<Checkbox checked={Header.IsEarning} name="IsEarning" fullWidth
                    onChange={e => setHeader({ ...Header, IsEarning: !Header.IsEarning })} />}
                    label="Is Earning"
                  />
                  <FormControlLabel color="primary"
                    control={<Checkbox checked={Header.IsAbleToPay} name="IsAbleToPay" fullWidth
                    onChange={e => setHeader({ ...Header, IsAbleToPay: !Header.IsAbleToPay })} />}
                    label="Is Able To Pay"
                  />
                </Grid>
                </Grid>
              </Grid>
              <Grid item lg={1}/>
              <Grid item lg={4} sm={12}>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={12} lg={6}>
                    <TextField value={Header.MaleKids} id="MaleKids" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, MaleKids: e.target.value })}
                      label="No of Kids(male)"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.FemaleKids} id="FemaleKids" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, FemaleKids: e.target.value })}
                      label="No of Kids(female)"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.OtherKids} id="OtherKids" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, OtherKids: e.target.value })}
                      label="Other Kids"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.Brothers} id="Brothers" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, Brothers: e.target.value })}
                      label="No of Brothers"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.Sisters} id="Sisters" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, Sisters: e.target.value })}
                      label="No f Sisters"/>
                  </Grid>
                  <Grid item md={6} sm={12}  lg={6}>
                    <TextField value={Header.NoOFFamilyMembers} id="NoOFFamilyMembers" type="number" fullWidth
                      onChange={(e) => setHeader({ ...Header, NoOFFamilyMembers: e.target.value })}
                      label="Family Members"/>
                  </Grid>
                </Grid>
              </Grid> 
            </Grid>
          </Grid>
        </Grid>
      </div>

      <SubTable/>
    </div>
    
  );
}

