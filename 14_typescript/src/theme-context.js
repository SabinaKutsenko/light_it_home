import React from 'react';
export const themes = {
	light: {
		footerText: 'Secret information',
		background: '#23484a',
	},
	dark: {
		footerText: '2019 - front-end labs Light IT',
		background: '#00b3be',
	},
};

export const ThemeContext = React.createContext(
	themes.dark // default value
);
