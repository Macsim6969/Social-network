import news from './News.module.scss';
import React from 'react';
import { setNewsBLl, setNewsAC} from '../../Redux/News-reducer';
import Status from './Status'
import NewsForm from '../Form/NewsForm';

const News = (props) => {
    let infoblock = props.news.news.map(n => <div className={news.info}>
        <div key={n.id}>{n.message}</div>
    </div>)

    let newmess = props.news.setnews
    let addMEss = () => {
        props.addNews();
    }
    let addMessB = (e) => {
        let text = e.target.value;
        props.addNewsAC(text);
    }

    return (
        <div className={news.news}>
            <div className={news.logo_block}>
                Check News
            </div>
            <div className={news.seatch_block}>
                <NewsForm/>
            </div>
            <div className={news.info_block}>
                {infoblock}
            </div>
        </div>
    )
}

export default News; 