// Inicialize o mapa com coordenadas e zoom definidos
const map = L.map('map').setView([-15.8267, -47.9218], 13); // Exemplo: Brasília, Brasil

// Adicione uma camada de mapa usando OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Opcional: Adicionar um marcador no centro
L.marker([-15.8267, -47.9218]).addTo(map)
    .bindPopup('Brasília, DF')
    .openPopup();
