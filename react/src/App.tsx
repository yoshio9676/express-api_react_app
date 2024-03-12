import Header from './components/common/Header'
import MainWithSideBar from './components/content/MainWithSideBar';
import AppRoute from './routes/AppRoute'
import { styled } from '@mui/material/styles';

const RootDiv = styled('div')({
  marginTop: '500px'
});

function App() {

  return (
    <>
    <Header/>
    <MainWithSideBar/>
    </> 
  )
}

export default App
