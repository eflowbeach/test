import './style.css';
import {Map, View} from 'ol';

import XYZ from 'ol/source/XYZ.js';
import Stamen from 'ol/source/Stamen.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


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
    center: [0, 0],
    zoom: 2
  })
});
