const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get(`https://www.alphavantage.co/query`, {
            params: {
                function: 'TIME_SERIES_DAILY',
                symbol: 'AAPL',
                apikey: process.env.ALPHA_VANTAGE_API_KEY
            }
        });
        const data = response.data["Time Series (Daily)"];
        res.json(data);
    } catch (error) {
        console.error('Error al obtener datos de Alpha Vantage:', error);
        res.status(500).json({ error: 'Error al obtener datos de Alpha Vantage' });
    }
};
