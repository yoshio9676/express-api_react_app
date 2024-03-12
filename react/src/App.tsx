import Header from './components/common/Header'
import AppRoute from './routes/AppRoute'
import { styled } from '@mui/material/styles';

const RootDiv = styled('div')({
  marginTop: '50px'
});

function App() {

  return (
    <>
    <Header/>
    <RootDiv>
      <AppRoute/>
    </RootDiv>
    </>
  )
}

export default App
