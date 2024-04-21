import React from 'react';
import { render } from "react-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';
import DestinationScreen from './DestinationScreen';
import { BrowserRouter } from "react-router-dom";

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
);