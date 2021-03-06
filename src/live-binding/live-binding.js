import Component from 'can-component';
import CanMap from 'can-map';
import 'can-map-define';
import './live-binding.less!';
import view from './live-binding.stache!';
import Devices from '../models/devices';

export const ViewModel = CanMap.extend({
	define: {
		message: {
			value: 'This is the live-binding component'
		}
	}
});

export default Component.extend({
	tag: 'live-binding',
	viewModel: ViewModel,
	view
});
