import * as React from 'react';
import NavComponent from '../shared/components/nav';

import Logo from '../../assets/images/logo.svg';
import MoistureIcon from '../../assets/images/icons/moisture.svg';
import TemperatureIcon from '../../assets/images/icons/temperature.svg';
import NotificationIcon from '../../assets/images/icons/notification.svg';
import ProfileIcon from '../../assets/images/icons/profile.svg';
import LogoutIcon from '../../assets/images/icons/logout.svg';

import ContainerComponent from '../shared/components/container';

import TitleComponent from '../shared/components/title';
import ListComponent from '../shared/components/list';

export const NotificationComponent: React.FC = () => {

    return (
        <>
            <NavComponent
                logo={Logo}
                navicon1='/umidade'
                icon1={MoistureIcon}
                navicon2='/temperatura'
                icon2={TemperatureIcon}
                navicon3='/notificacao'
                icon3={NotificationIcon}
                navicon4='/perfil'
                icon4={ProfileIcon}
                logout={LogoutIcon}
            />
            <ContainerComponent>
                <TitleComponent
                    title='Notificações'
                />
                <ListComponent />
            </ContainerComponent>
        </>
    );
}