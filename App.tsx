import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

import Routes from './src/routes';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

export default function App() {
    const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

    useEffect(() => {
        const subscription = Notifications.addNotificationResponseReceivedListener(
            async notification => {
                const data = notification.request.content.data.plant as PlantProps;
                console.log(data);
            });

            return () => subscription.remove();
    },[]);

    // listar todas as notifications via console
    // async function notifications() {
    //     excluir todas as notifications
    //     await Notifications.cancelAllScheduledNotificationsAsync();
        
    //     const data = await Notifications.getAllScheduledNotificationsAsync();
    //     console.log("########### NOTIFICAÇÕES AGENDADAS ##########");
    //     console.log(data);

    // }

    if (!fontsLoaded)
        return <AppLoading />

    return (
        <Routes />
    )
}
