import 'shared/styles/globals.scss';
import AppRouter from 'pages';
import { withProviders } from './providers';
import {Navbar} from 'widgets/navbar';

const App=()=> {

  return (
    <>
      <Navbar/>
      <AppRouter/>
    </>
   
  );
}

export default withProviders(App);
