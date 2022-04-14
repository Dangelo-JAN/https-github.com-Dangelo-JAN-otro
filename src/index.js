import './index.css';
// import TVMazeAPI from './modules/TVMazeAPI';
import PageManager from './modules/pageManager';

const pageManager = new PageManager();

const appManager = async () => {
  await pageManager.getShows();
  await pageManager.paintToHomePage();
};

appManager();
// pageManager.addCard();