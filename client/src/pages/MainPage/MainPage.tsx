import { withNotification } from 'app/providers/with-notification';
import { useAppDispatch, useAppSelector } from 'app/store/models';
import { FilmCard, fetchFilms } from 'entities/film/model';
import { useEffect } from 'react';
import { Catalog } from 'widgets/catalog';


const MainPage = () => {
    const {user}=useAppSelector(state=>state.auth)

    return (
        <>
        <div>
            <h1>
                {'PseudoTube'}
            </h1>
        </div>
           
            <div>
                {user.email}
            </div>
            <Catalog/>
        </>
    );
};

export default withNotification(MainPage);