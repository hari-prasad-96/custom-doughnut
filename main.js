// This demo uses the Chartjs javascript library
// Simple yet flexible JavaScript charting for designers & developers
// Webite: https://www.chartjs.org
// CDN: https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js

const percent = 30;
const color = '#d4af37';
const canvas = 'chartCanvas';
const container = 'chartContainer';

const percentValue = percent; // Sets the single percentage value
const colorYellow = color, // Sets the chart color
    animationTime = '1400'; // Sets speed/duration of the animation

const chartCanvas = document.getElementById(canvas), // Sets canvas element by ID
    chartContainer = document.getElementById(container) // Sets container element ID
    // divElement = document.createElement('div'), // Create element to hold and show percentage value in the center on the chart
    // domString = '<div class="chart__value"><p>' + percentValue + '</p></div>'; // String holding markup for above created element

// Create a new Chart object
const doughnutChart = new Chart(chartCanvas, {
    type: 'doughnut', // Set the chart to be a doughnut chart type
    data: {
        labels: ["SOLD", "UNSOLD", ],
        datasets: [{
            data: [percentValue, 100 - percentValue], // Set the value shown in the chart as a percentage (out of 100)
            backgroundColor: [colorYellow, "#F5F5F5"], // The background color of the filled chart
            borderColor: ['#d4af37'],
            borderWidth: 1, // Width of border around the chart

        }]
    },
    options: {
        cutoutPercentage: 73, // The percentage of the middle cut out of the chart
        responsive: true, // Set the chart to not be responsive
        tooltips: {
            enabled: true // Hide tooltips
        },
        hover: { mode: null },
    }
});

Chart.defaults.global.animation.duration = animationTime; // Set the animation duration

divElement.innerHTML = domString; // Parse the HTML set in the domString to the innerHTML of the divElement
chartContainer.appendChild(divElement.firstChild); // Append the divElement within the chartContainer as it's child