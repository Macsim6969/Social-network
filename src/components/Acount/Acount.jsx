import React from 'react'
import AccLink from './LinkSoc/LinkSoc'
import ss from './Account.module.scss'
import LinkLog from './LinkLog/LinkLog'
import SocialInfo from './LinkSocial/SocialInfo'

const Acount = () => {
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
                        <LinkLog  name="M_A_C_S_669"/>
                    </div>
                    <div className={ss.link_soc}>
                        <SocialInfo name='Posts' number='880' />
                        <SocialInfo name='Followers' number='400' />
                        <SocialInfo name='Following' number='330' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acount
