/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
	  extend: {
		colors: {
			darkBlue: '#05386B',
			darkGreen: '#379683',
			green: '#5CDB95',
			lightGreen: '#8EE4AF',
			pastelWhite: '#EDF5E1'
		},
		container: {
			width: "100%",
			padding: "10rem"
		}
	  },
	},
	plugins: [],
  };