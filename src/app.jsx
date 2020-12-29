import './app.css';
import Searchbar from './components/searchbar';
import './app.css';
import { useCallback, useRef, useState } from 'react';
import VideoCardList from './components/videoCardList';
const App = () => {
  const [inputRef, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [url, setUrl] = useState('');
  const handleSearch = useCallback(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputRef}&key=AIzaSyDUlYCYuySGyMKKWeU3GDtEguJ17i-3dBc`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setItems(JSON.parse(result).items);
      })
      .catch((error) => console.log('error', error));
  });
  const handleInput = useCallback((e) => {
    setInput(e.target.value);
  });
  const handleUrl = (e) => {
    setUrl(e);
  };
  return (
    <div className='Container'>
      <Searchbar
        onHandleInput={handleInput}
        onHandleSearch={handleSearch}
        onHandleClick={handleUrl}
      />
      <VideoCardList items={items} onHandleClick={handleUrl} url={url} />
    </div>
  );
};

export default App;
