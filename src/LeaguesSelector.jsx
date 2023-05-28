import { Card, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

// 'league' data format:
// string 'id' (ex. 'arg.1')
// string 'name'
// string dash-separated 'slug' (id name?)
// string 'abbr' (ex. 'Prim A')
// logos
  // light: img url
  // dark: img url



function LeaguesSelector({ leaguesResp, selectLeagueFunc }) {
  if(leaguesResp == undefined) return <h1>No data yet</h1>

  console.log(leaguesResp);
  const [selected, setSelected] = useState(0)
  const handleChange = (event) => {
    console.log('1');
    setSelected(event.target.value)
    console.log('2');
    // selectLeagueFunc(event.target.value)
    console.log('3')
  }
  const leagues = leaguesResp.data;

  const leagueMenuItems = leagues.map(league => <MenuItem key={league.id} value={league.id}>{league.name}</MenuItem>)
  var id = leagues[selected].id

  
  return (
    // Dropdown with all league names (needs to know id as well)
    // TODO add logos to dropdown if possible to thumbnail effectively
    <Card>
      <InputLabel>League</InputLabel>
      <Select value={id} label="League" onChange={handleChange}>
        {leagueMenuItems}
      </Select>
    </Card>

  )
}

export default LeaguesSelector;