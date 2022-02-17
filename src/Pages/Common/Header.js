import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [stiky, setStiky] = useState(false);
    const location = useLocation();
    const hash = location.hash;

    const scroll = () => {
        if (window.scrollY >= 80) {
            setStiky(true);
        } else {
            setStiky(false)
        }
    }
    const goTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    window.addEventListener("scroll", scroll);
    return (
        <div className={`${stiky && "sticky"} block bg-secondary top-0 z-20 px-3 md:px-10 py-3 h-auto`}>
            <Grid container>
                <Grid item xs={8}>
                    <div>
                        <div className='flex items-center menu'>
                            <img className='w-12' src="https://i.ibb.co/XWR6g7g/Group-8449.png" alt="" />
                            <a
                                className={hash === "#top" && "menu-active"}
                                onClick={goTop}
                                href="#top">
                                Home
                            </a>
                            <a
                                className={hash === "#about" && "menu-active"}
                                href="#about">
                                About
                            </a>
                            <a
                                className={hash === "#service" && "menu-active"}
                                href="#service">
                                Service
                            </a>
                            <a
                                className={hash === "#project" && "menu-active"}
                                href="#project">
                                Portfolio
                            </a>
                            <a
                                className={`${hash === "#hire" && "menu-active"} hidden md:block`}
                                href="#hire">
                                Contact
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='hidden md:flex items-center justify-between'>
                        <div className='icon flex items-center'>
                            <a href="https://www.facebook.com/profile.php?id=100009923686402">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/md-iqbal-hossen0483/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/md-rakib420">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.upwork.com/freelancers/~01cf970c2813eaf6e3">
                                <img className='w-9' src="https://i.ibb.co/JzsgpKS/y4bsw-MT02-OROjz-OPa5z-DGsn-XX5-c-BABj-F93j26se-JH2c-EHD4-Pu-BW1d5-Vvwf-Ylee-Kf4-X.png" alt="" />
                            </a>
                        </div>
                        <a className='btn hidden md:block' href="#hire">Hire me</a>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;