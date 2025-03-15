import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { Race, Standing } from './types';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const BASE_URL = 'http://ergast.com/api/f1';

app.get('/api/latest-race', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/current/last/results.json`);
    const race: Race = response.data.MRData.RaceTable.Races[0];
    res.json(race);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch race data' });
  }
});

app.get('/api/driver-standings', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/current/driverStandings.json`);
    const standings: Standing[] = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    res.json(standings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch driver standings' });
  }
});

app.get('/api/constructor-standings', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/current/constructorStandings.json`);
    const standings: Standing[] = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    res.json(standings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch constructor standings' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
