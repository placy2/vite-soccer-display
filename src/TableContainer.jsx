import { useState } from 'react'
import { Button, Container, Typography, Card } from "@mui/material";
import MUIDataTable from "mui-datatables"
import { useQuery } from "@tanstack/react-query"
import LeaguesSelector from "./LeaguesSelector"

// TODO strip out react query, way too overengineered for data updates and I only need one sided fetching once
const fetchAllLeagues = async () => {
  const response = await fetch("https://api-football-standings.azharimm.dev/leagues/");
  
  return response.json();
}




function TableContainer() {
  const [selectedLeagueId, setSelectedLeagueId] = useState(0);
  console.log(selectedLeagueId)

  const { isLoading, isError, data, error } = useQuery({ queryKey: ['leagues'], queryFn: fetchAllLeagues, enabled: true })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <Container maxWidth="lg">
      <Card variant="contained" align="center">
        <Typography variant="body1" my={3}>   
          Idea: simple page using nice css library - pulls data from soccer API <a href="https://api-football-standings.azharimm.dev/">linked here</a> and displays the leagues in a nicely paginated table.
          Afterwards, explore clicking into the leagues to pull data from the other endpoints documented here: <a href="https://github.com/azharimm/football-standings-api">Github</a>.
        </Typography>
        <Typography variant="body2" my={3}>
          Data dump - once fetching all leagues info, build tab system.
          Current tab should have a league id and pull more specific info in when selected.
        </Typography>
        <LeaguesSelector leaguesResp={data} selectLeagueFunc={setSelectedLeagueId}></LeaguesSelector>
      </Card>
    </Container>
  )
}

export default TableContainer