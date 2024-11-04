document.addEventListener("DOMContentLoaded", function () {
    // Obtener datos de precios de acciones
    async function fetchStockData() {
        try {
            const response = await fetch('/api/stock');
            const data = await response.json();
            const latestDate = Object.keys(data)[0];
            const latestData = data[latestDate];

            document.getElementById("stock-price").textContent = `Precio de Acción (AAPL): $${latestData['4. close']}`;
            document.getElementById("stock-change").textContent = `Cambio Diario: ${latestData['4. close'] - latestData['1. open']} USD`;
        } catch (error) {
            console.error("Error al obtener datos de acciones:", error);
        }
    }

    // Obtener datos de tasa de cambio
    async function fetchExchangeRate() {
        try {
            const response = await fetch('/api/exchange-rate');
            const data = await response.json();

            document.getElementById("exchange-rate-value").textContent = `Tasa USD a EUR: ${data.rates.EUR}`;
            document.getElementById("exchange-rate-date").textContent = `Última Actualización: ${data.date}`;
        } catch (error) {
            console.error("Error al obtener tasa de cambio:", error);
        }
    }

    // Llamadas a las funciones
    fetchStockData();
    fetchExchangeRate();
});
