import {Box, Heading, Tab, TabList, Tabs} from '@chakra-ui/react';
import React from 'react';
import {useHistory, useLocation} from 'react-router';
import {getSelectedTab} from './Header.helpers';
import {ROUTES} from '../../utils/routes';

interface TabItem {
    url: ROUTES;
    label: string;
}

const tabs: TabItem[] = [
    {
        url: ROUTES.HOME,
        label: 'Home',
    },
    {
        url: ROUTES.COUNTRIES_LIST,
        label: 'Countries',
    },
    {
        url: ROUTES.ADD_AIRPORT,
        label: 'Add airport',
    },
];

export const Header: React.FC = () => {
    const location = useLocation();
    const history = useHistory();

    const setRoute = (id: number) => {
        history.push(tabs[id].url);
    };

    const selectedTab = getSelectedTab(location.pathname);

    return (
        <Box marginBottom={'20px'}>
            <Heading as={'h1'} marginBottom={'40px'}>
                Nest/CRA monorepo
            </Heading>
            <Tabs variant={'enclosed'} isFitted onChange={setRoute} index={selectedTab}>
                <TabList>
                    {tabs.map(tab => (
                        <Tab key={tab.label}>{tab.label}</Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
};
