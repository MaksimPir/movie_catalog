import 'shared/styles/globals.scss';
import AppRouter from 'pages';
import { withProviders } from './providers';
import {Navbar} from 'widgets/navbar';
import { Footer } from 'widgets/footer';
import { LoadingForm } from 'widgets/loadingForm';

const App=()=> {

  return (
    <>
      <div id='main'></div>
      <Navbar/>      
      <AppRouter/>
      <Footer/>
    </>
   
  );
}

export default withProviders(App);
