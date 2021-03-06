import React from 'react'
import AccLink from './LinkSoc/LinkSoc.tsx'
import ss from './Account.module.scss'
import LinkLog from './LinkLog/LinkLog.tsx'
import SocialInfo from './LinkSocial/SocialInfo.tsx'
import MainLink from './MainLink/MainLink.tsx'
import { Navigate, Route, Routes} from 'react-router-dom'
import TimelineContainer from "./MainBlog/Timeline/TimelineContainer.tsx";
import PhotoContainer from './MainBlog/Photos/PhotoContainer'
 
const Acount = (props) => { 
    let inform = props.acount.info.map(i => <SocialInfo name={i.name} number={i.number} />);
    return (

        <div className={ss.acc_block}>
            <div className={ss.block_column}>
                <div className={ss.acc}>
                    <img className={ss.acount_log_img} src="https://repository-images.githubusercontent.com/190431388/626c3880-2030-11ea-9696-62ff3e72017d" alt="" />
                </div>
                <div className={ss.acc_link}>
                    <div className={ss.link_social}>
                        <AccLink link='https://www.pinclipart.com/picdir/big/364-3648099_facebook-logo-red-transparent-fb-icon-white-png.png' />
                        <AccLink link='https://cdn.mosoah.com/wp-content/uploads/2019/11/30234058/صور-صور-شعار-انستقرام-جديدة1.jpg' />
                        <AccLink link='https://w7.pngwing.com/pngs/639/5/png-transparent-computer-icons-harmony-pediatrics-shefali-chheda-md-social-media-google-social-media-logo-social-media-internet.png' />
                        <AccLink link='https://www.planet.com/assets/icons/youtube.svg' />
                        <AccLink link='https://w7.pngwing.com/pngs/772/115/png-transparent-computer-icons-telegram-logo-angle-white-triangle.png' />
                    </div>
                    <div className={ss.link_log}>
                        <LinkLog name="M_A_C_S_669" updateStatus={props.updateStatus} status={props.status} profile={props.profile} />
                    </div>
                    <div className={ss.link_soc}>
                        {inform}
                    </div>
                </div>
                <div className={ss.acc_link_main}>
                 <MainLink />
                </div>
                <div className={ss.acc_main}>
                    <Routes>
                        <Route path='timeline' element={<TimelineContainer   />}/>
                        <Route path = 'photos' element = {<PhotoContainer />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Acount
