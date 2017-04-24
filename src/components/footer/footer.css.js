import variables from '../../styles/variables.css.js';
import _ from 'lodash';

const list = {
  listStyleType: "none",
  margin: "0",
  padding: "0",
};

const commonPadding = {
  padding: "0 10px"
}

const sharedStyles = {
  footer: {
    paddingTop: "35px",
    paddingBottom: "35px",
    display: "flex",
    backgroundColor: variables.footerBgColor,
  },

  footerNavList: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    display: "flex",
  },

  footerSocialList: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "space-between",
  },

  footerNavSplit: {
    padding: "0 10px",
    color: variables.grayAccent,
  },

  footerSocialItem: {
    padding: "0 10px",
    textAlign: "center",
  },

  footerNavWrapper: commonPadding,
  footerLogoWrapper: commonPadding,

  footerNavLink: {
    color: variables.primaryFontColor,
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textDecoration: "none",
  },

  footerSocialLink: {
    color: variables.grayAccent,
    backgroundColor: variables.accentBgColor,
    width: "45px",
    height: "45px",
    borderRadius: "100%",
    display: "block",
    lineHeight: "45px",
  },
};

const desktops = {
  mediaName: "desktops",
  styles: {
    footer: {
      flexFlow: "row wrap",
      justifyContent: "space-around",
      alignItems: "center",
    },

    footerLogo: {
      height: "40px",
      marginLeft: "0",
    },

    footerNavList: {
      justifyContent: "center",
    },

    footerNavSplit: {
      padding: "0 30px",
    }
  }
};

const handsetsAndTablets = {
  mediaName: 'handsetsAndTablets',
  styles: {
    footer: {
      flexFlow: "column wrap",
      justifyContent: "center",
    },

    footerLogoWrapper: {
      display: "none",
    },

    footerNavWrapper: {
      order: "2",
    },

    footerSocialWrapper: {
      order: "1",
      marginBottom: "40px",
    },

    footerNavList: {
      justifyContent: "center",
      flexFlow: "row wrap",
      margin: "0",
    },

    footerSocialList: {
      justifyContent: "center",
      padding: "0",
      margin: "0",
    },

    footerNavItem: {
      padding: "0",
    },

    footerNavLink: {
      fontSize: "12px"
    },
  }
};

const combineStyling = (mediaTypeClasses) => {
  const mediaQuery = variables.mediaSizes[`${mediaTypeClasses.mediaName}`].toString();

  for(let cssClass in mediaTypeClasses.styles) {
    const className = cssClass.toString()
    if(!_.hasIn(sharedStyles, cssClass)) {
      sharedStyles[`${className}`] = {};
    }

    sharedStyles[`${className}`][`${mediaQuery}`] = mediaTypeClasses.styles[`${className}`];
  }
};

export const componentStyles = () => {
  combineStyling(desktops);
  combineStyling(handsetsAndTablets);
  return sharedStyles;
}
