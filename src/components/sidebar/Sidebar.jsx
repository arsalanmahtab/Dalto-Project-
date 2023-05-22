import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import DALTA from './Dalto.png';

const sidebarNavItems = [
    // {
    //     display: 'Listings',
    //     icon: <i className='bx bx-home'></i>,
    //     to: '/',
    //     section: ''
    // },
    // {
    //     display: 'Notifications',
    //     icon: <i class="bi bi-app-indicator"></i>,
    //     to: '/started',
    //     section: 'started'
    // },
    {
        display: 'Messages ',
        icon: <i class="bi bi-chat-square-text"></i>,
        to: '/Messages',
        section: 'Messages'
    },
    {
        display: 'Tenancy Management ',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Account Settings',
        icon: <i class="bi bi-gear-fill"></i>,
        to: '/Settings',
        section: 'Settings'
    },
   
   
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
      
       
        <div className="sidebar__logo" style={{marginBottom:"75px"}}>
        <img  src={DALTA} style={{width:"30%",marginTop:"15px"}}/>
          <h4 style={{marginTop:"21px"}}>  X-builders </h4>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
