import 'shared/styles/globals.scss';
import AppRouter from 'pages';
import { withProviders } from './providers';
import {Navbar} from 'widgets/navbar';
import { Footer } from 'widgets/footer';

const App=()=> {

  return (
    <>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </>
   
  );
}

export default withProviders(App);
