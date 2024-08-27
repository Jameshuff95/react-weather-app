import Header from './Components/Header'
import Main from './Components/Main'
import './styles/components/App.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import WeatherContext from './context/theme.context';
import { useContext } from 'react';

function App() {
  const dark = useContext(WeatherContext);

  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
