const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest`, {
            headers: {
                'apikey': process.env.EXCHANGE_RATES_API_KEY
            },
            params: {
                base: 'USD',
                symbols: 'EUR'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos de Exchange Rates API:', error);
        res.status(500).json({ error: 'Error al obtener datos de Exchange Rates API' });
    }
};
