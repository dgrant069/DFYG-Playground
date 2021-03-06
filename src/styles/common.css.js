import variables from '../../styles/variables.css.js';

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

.test {
  font-size: 30px;
}

.app {
  background-color: var(--white-bg);
  min-height: 100vh;
}

.main {
  min-height: 70vh;
}

@media (--handsets-n-tablets) {
  .appPadding {
    padding-left: var(--handset-spacing);
    padding-right: var(--handset-spacing);
  }

  .main {
    overflow-x: hidden;
  }
}

@media (--desktops) {
  .appPadding {
    padding-left: var(--desktop-spacing);
    padding-right: var(--desktop-spacing);
  }
}
