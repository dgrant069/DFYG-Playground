/* All @custom stuff MUST go in this file to work. Might as put variables here too... */
/* Media Query Variables */
const mediaSizes = {
	handsets: '@media (max-width: 768px)',
	tablets: '@media (min:width: 768px) and (max-width: 1025px)',
	handsetsAndTablets: '@media (max-width: 1025px)',
	tabletsAndDesktops: '@media (min-width: 768px)',
	desktops: '@media (min-width: 1025px)',
}

const mediaQueries = (mediaQuery, classes = {}) => {
	return media(mediaSizes.mediaQuery, classes)
}

/* Custom @custom-properties */
/*@custom-selector :--heading h1, h2, h3, h4, h5, h6;*/

/* App Styling Variables */
export default {
	mediaSizes /*-- Commented names are from styleguide --*/,
	// mediaQueries,
	/* Brand Colors */ /* Background Colors*/
	primaryBgColor: '#999967',
	// --secondary-bg-color: #CCCCCC;
	secondaryBgColorDark: '#666666',
	accentBgColor: '#CCCC9A',
	footerBgColor: '#666666',
	blackBg: '#000',
	// --white-bg: #fff;

	/* Font Colors */
	primaryFontColor: '#fff',
	// --secondary-font-color: #efefef;
	// --tertiary-font-color: #004489; /*--pinkish-grey: #cccccc;*/

	/* Theme Colors */
	grayAccent: '#4d555c',
	// --aqua-accent: #96C0CE;

	/* Font Sizes */
	// --font-major-headings: 36px;
	// --font-secondary-headings: 20px;
	// --font-tertiary-headings: 14px;
	// --font-main-text: 14px;
	// --font-small: 12px;
	// --font-xtra-small: 10px;
	// --font-menu-icon: 40px;

	/* Spacing */
	// --handset-spacing: 20px;
	// --tablet-spacing: 40px;
	// --desktop-spacing: 80px;
}
