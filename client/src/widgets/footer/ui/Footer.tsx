import React from 'react';
import './styles.scss'
export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__left'>
                Наши социальные сети:
                <ol>VK: <a target="_blank" href='https://vk.com/twsmfu'>Ссылка</a></ol>
                <ol>telegram: <a target="_blank" href='https://t.me/maks1m_sS'>@t.me/maks1m_sS</a></ol>
                <ol>gitHub: <a target="_blank" href='https://github.com/MaksimPir'>Ссылка</a></ol>
            </div>
            <div className='footer__right'>
                Наши партнеры:
                <ol>VK: <a target="_blank" href='https://vk.com/twsmfu'>Ссылка</a></ol>
                <ol>telegram: <a target="_blank" href='https://t.me/maks1m_sS'>@t.me/maks1m_sS</a></ol>
                <ol>Одноклассники:</ol>
            </div>
        </div>
    );
};

