import logo from './logo.svg';
import Layout from './components/layout/Layout';
import { ResetCSS } from './globals/resetCSS';
import Profile from './components/Profile/Profile'
function App() {
  return (
    <main>
      <ResetCSS></ResetCSS>
      <Layout></Layout>
      <Profile></Profile>
    </main>
  );
}

export default App;
