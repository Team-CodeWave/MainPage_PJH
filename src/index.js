import ReactDOM from 'react-dom';
import Header from './Header';
import Top_main from './Top_main';
import Middle_main from './Middle_main';
import Middle2_main from './Middle2_main';
import Last_main from './Last_main';
import Introduce from './Introduce';


ReactDOM.render(
  <Header />, 
  document.getElementById('header-title')
);

ReactDOM.render(
  <Top_main />, 
  document.getElementById('top-main')
);

ReactDOM.render(
  <Middle_main />, 
  document.getElementById('middle-main')
);

ReactDOM.render(
  <Middle2_main />, 
  document.getElementById('middle2-main')
);

ReactDOM.render(
  <Last_main />, 
  document.getElementById('last-main')
);

ReactDOM.render(
  <Introduce />, 
  document.getElementById('introduce')
);