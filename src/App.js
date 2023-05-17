import './App.css'
import './FileUpload.css'
import './Ticker.css'
import { Box } from '@chakra-ui/react'
import { NavBar } from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import { DefinedRoutes } from './components/Routes'
import { Ticker } from './components/Ticker'

function App() {
    return (
        <Router>
            <Box className="overlay">
                <Box className="App">
                    <Ticker />
                    <NavBar />
                    <DefinedRoutes />
                </Box>
                <Box className="moving-background" />
            </Box>
        </Router>
    )
}

export default App
