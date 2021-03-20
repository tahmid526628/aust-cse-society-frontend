import React from 'react';

import './homepage.style.scss';

import Slider from '../../components/slider/slider.component';
import HomeMenu from '../../components/home-menu/home-menu.component';
import SocietyOverview from '../../components/society-overview/society-overview.component';
import HomeShowcase from '../../components/home-showcase/home-showcase.component';
import HomeDepartment from '../../components/home-department/home-department.component';
import ImageGallery from '../../components/image-gallery/image-gallery.component';
import Superior from '../../components/superior/superior.component';
import HomeTeacher from '../../components/home-teacher/home-teacher.component';

const HomePage = () => {
    return(
        <div className="home-page">
            <Slider />
            <HomeMenu />
            <SocietyOverview />
            <HomeShowcase />
            <HomeDepartment />
            <ImageGallery />
            <Superior />
            <HomeTeacher />
        </div>
    );
}

export default HomePage;