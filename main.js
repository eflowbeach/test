import './style.css';
import {Map, View} from 'ol';

import XYZ from 'ol/source/XYZ.js';
import Stamen from 'ol/source/Stamen.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import Chart from 'chart.js/auto';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        attributions:
          'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
        url:
          'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      })
    })
    //,
    // new TileLayer({
    //   source: new OSM()
    // }),
    // new TileLayer({
    //   source: new Stamen({
    //     layer: 'watercolor',
    //   }),
    // })
  ],
  view: new View({
    center: fromLonLat([-90, 45]),
    zoom: 8
  })
});


const ctx = document.getElementById("myChart");
console.log(ctx);
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive:false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

