const water = document.getElementById('water');
const wave = document.getElementById('wave');
const slider = document.getElementById('percentageSlider');
const percentageDisplay = document.getElementById('percentageDisplay');

function updateWaterLevel(percentage) {
    // Atualiza o nível da água
    water.style.height = `${percentage}%`;

    // Ajusta a posição da onda para acompanhar a altura da água
    const waveHeight = 100 - percentage;
    wave.style.transform = `translateY(${waveHeight}%)`;

    // Atualiza a exibição da porcentagem
    percentageDisplay.textContent = `${percentage}%`;
}

// Event listener for slider input
slider.addEventListener('input', function () {
    updateWaterLevel(slider.value);
});

// Set initial water level
updateWaterLevel(slider.value);
