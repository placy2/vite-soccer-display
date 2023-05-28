import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { ButtonGroup } from '@mui/material'
import TableContainer from './TableContainer'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="false">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom align="center">
          Displaying Soccer Stats with Vite, React, and Material UI
        </Typography>
        <Card variant="contained" align="center">
          <ButtonGroup variant="contained">
          <Button variant="outlined" 
                  onClick={() => setCount((count) => count + 1)}>
            Counter: press to increment counter
          </Button>
          <Button variant="outlined"
                  onClick={() => setCount((count) => 0)}>
            Reset Count
          </Button>
          </ButtonGroup>
          <Typography variant="h1" my={4}> {count} </Typography>
        </Card>
        <QueryClientProvider client={queryClient}>
          <TableContainer/>
        </QueryClientProvider>
      </Box>
    </Container>
  )
}

export default App
