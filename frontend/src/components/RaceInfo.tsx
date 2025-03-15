import React, { useEffect, useState } from 'react';
import { 
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Divider
} from '@mui/material';
import { Race, Standing } from '@shared/types';
import CircuitMap from './CircuitMap';


const RaceInfo: React.FC = () => {
  const [raceData, setRaceData] = useState<Race | null>(null);
  const [driverStandings, setDriverStandings] = useState<Standing[]>([]);
  const [constructorStandings, setConstructorStandings] = useState<Standing[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [raceRes, driverRes, constructorRes] = await Promise.all([
          fetch('http://localhost:3001/api/latest-race'),
          fetch('http://localhost:3001/api/driver-standings'),
          fetch('http://localhost:3001/api/constructor-standings')
        ]);

        const race = await raceRes.json();
        const drivers = await driverRes.json();
        const constructors = await constructorRes.json();

        setRaceData(race);
        setDriverStandings(drivers);
        setConstructorStandings(constructors);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Main Content - Latest Race (85%) */}
      <Box sx={{ flexGrow: 1, width: '85%', p: 3 }}>
        <Paper sx={{ p: 3, mb: 3, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
            <Box>
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
                    {raceData?.raceName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    Circuit: {raceData?.Circuit.circuitName}
                </Typography>
            </Box>
            {raceData && (
                <CircuitMap 
                    lat={raceData.Circuit.Location.lat}
                    long={raceData.Circuit.Location.long}
                    circuitName={raceData.Circuit.circuitName}
                />
            )}
        </Box>
          
          <TableContainer sx={{ mt: 3 }}>
            <Table size="medium">
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell sx={{ color: 'white' }}>Position</TableCell>
                  <TableCell sx={{ color: 'white' }}>Driver</TableCell>
                  <TableCell sx={{ color: 'white' }}>Team</TableCell>
                  <TableCell sx={{ color: 'white' }} align="right">Points</TableCell>
                  <TableCell sx={{ color: 'white' }}>Fastest Lap</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {raceData?.Results.map((result) => (
                  <TableRow 
                    key={result.position}
                    sx={{
                      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
                    }}
                  >
                    <TableCell sx={{ 
                      fontWeight: 'bold',
                      color: result.position === '1' ? '#FFD700' :
                             result.position === '2' ? '#C0C0C0' :
                             result.position === '3' ? '#CD7F32' : 'inherit'
                    }}>
                      {result.position}
                    </TableCell>
                    <TableCell>{`${result.Driver.givenName} ${result.Driver.familyName}`}</TableCell>
                    <TableCell>{result.Constructor.name}</TableCell>
                    <TableCell align="right">{result.points}</TableCell>
                    <TableCell>{result.FastestLap?.Time?.time || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
  
      {/* Right Sidebar - Season Statistics (15%) */}
      <Box sx={{ 
        width: '15%', 
        bgcolor: 'background.paper',
        borderLeft: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        p: 2,
        overflow: 'auto'
      }}>
        {/* Driver Championship */}
        <Typography variant="h6" gutterBottom sx={{ 
          color: 'primary.main',
          fontWeight: 'bold' 
        }}>
          Driver Championship
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ bgcolor: 'transparent' }}>
          <Table size="small">
            <TableBody>
              {driverStandings.slice(0, 10).map((standing) => (
                <TableRow 
                  key={standing.position}
                  sx={{ 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                    borderLeft: '3px solid',
                    borderLeftColor: standing.position === '1' ? '#FFD700' :
                                   standing.position === '2' ? '#C0C0C0' :
                                   standing.position === '3' ? '#CD7F32' : 'transparent'
                  }}
                >
                  <TableCell sx={{ py: 1, width: '30px' }}>{standing.position}</TableCell>
                  <TableCell sx={{ py: 1 }}>
                    <Typography variant="body2" noWrap>
                      {standing.Driver?.code || `${standing.Driver?.familyName}`}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ py: 1 }} align="right">{standing.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
  
        {/* Constructor Championship */}
        <Typography variant="h6" gutterBottom sx={{ 
          color: 'primary.main',
          fontWeight: 'bold' 
        }}>
          Constructor Championship
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ bgcolor: 'transparent' }}>
          <Table size="small">
            <TableBody>
              {constructorStandings.map((standing) => (
                <TableRow 
                  key={standing.position}
                  sx={{ 
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                    borderLeft: '3px solid',
                    borderLeftColor: standing.position === '1' ? '#FFD700' :
                                   standing.position === '2' ? '#C0C0C0' :
                                   standing.position === '3' ? '#CD7F32' : 'transparent'
                  }}
                >
                  <TableCell sx={{ py: 1, width: '30px' }}>{standing.position}</TableCell>
                  <TableCell sx={{ py: 1 }}>
                    <Typography variant="body2" noWrap>
                      {standing.Constructor?.name}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ py: 1 }} align="right">{standing.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default RaceInfo;