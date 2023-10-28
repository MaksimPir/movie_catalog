import { FC } from 'react';
import { IMainSectionProps } from './types';
import './style.scss'
import { Rate } from 'antd';
export const MainSectionFilm:FC<IMainSectionProps> = ({film}) => {
    return (
        <div className='filmsection'>
            <div className='filmsection__container'>
                <img className='filmsection__image' src={film.image}/>
            </div>
            <div className='filmsection__infofilm'>
                <div className='infofilm__title'>
                    <h1>
                        {film.name}
                    </h1>
                </div>
                <div className='infofilm__rate'>
                    РЕЙТИНГ {film.rate}
                </div>
                <Rate  disabled value={film.rate}/>
                <div className='infofilm__desc'>
                    {film.description}
                </div>
            </div>
        </div>
    );
};

