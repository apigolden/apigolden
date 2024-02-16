const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3021;

// Route 1: Handle '/aile'
app.get('/aile', async (req, res) => {
  try {
    const tc = req.query.tc;

    if (!tc) {
      return res.status(400).json({ error: 'tc parameter is required' });
    }

    const apiUrl = `https://rezidans.co/api/aile/api.php?tc=${tc}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const responseData = response.data;
      res.json(responseData);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route 2: Handle '/gsm'
app.get('/gsm', async (req, res) => {
  try {
    const gsmNumber = req.query.gsm;

    if (!gsmNumber) {
      return res.status(400).json({ error: 'GSM parameter is required' });
    }

    const apiUrl = `https://rezidans.co/api/gsm/api.php?gsm=${gsmNumber}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const responseData = response.data;
      res.json(responseData);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route 3: Handle '/sülale'
app.get('/sulale', async (req, res) => {
  try {
    const tc = req.query.tc;

    if (!tc) {
      return res.status(400).json({ error: 'tc parameter is required' });
    }

    const apiUrl = `https://rezidans.co/api/sülale/api.php?tc=${tc}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const responseData = response.data;
      res.json(responseData);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route 4: Handle '/tcpro'
app.get('/tcpro', async (req, res) => {
  try {
    const tc = req.query.tc;

    if (!tc) {
      return res.status(400).json({ error: 'tc parameter is required' });
    }

    const apiUrl = `https://rezidans.co/api/tc/api.php?tc=${tc}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const responseData = response.data;
      res.json(responseData);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route 5: Handle '/tcgsm'
app.get('/tcgsm', async (req, res) => {
  try {
    const tc = req.query.tc;

    if (!tc) {
      return res.status(400).json({ error: 'tc parameter is required' });
    }

    const apiUrl = `https://rezidans.co/api/gsm/apii.php?tc=${tc}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const responseData = response.data;
      res.json(responseData);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
