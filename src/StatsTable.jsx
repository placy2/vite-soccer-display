import { Button, Container, Typography, Card } from "@mui/material";
import { useQuery } from "@tanstack/react-query"


const fetchAllLeagues = async () => {
  const response = await fetch("https://api-football-standings.azharimm.dev/leagues/");
  
  return response.json();
}


function StatsTable() {

  const { data } = useQuery({ queryKey: ['leagues'], queryFn: fetchAllLeagues })
  console.log(data);

  return (
    <Container maxWidth="lg">
      <Card variant="contained" align="center">
        <Button variant="contained">Press to Fetch Soccer Data</Button>
        <Typography variant="body1" my={3}>   
          Idea: simple page using nice css library - pulls data from soccer API <a href="https://api-football-standings.azharimm.dev/">linked here</a> and displays the leagues in a nicely paginated table.
          Afterwards, explore clicking into the leagues to pull data from the other endpoints documented here: <a href="https://github.com/azharimm/football-standings-api">Github</a>.
        </Typography>
        <Typography variant="body2" my={3}>
          Data dump - once fetching all leagues info, build tab system.
          Current tab should have a league id and pull more specific info in when selected.
        </Typography>
      </Card>
    </Container>
  )
}

export default StatsTable