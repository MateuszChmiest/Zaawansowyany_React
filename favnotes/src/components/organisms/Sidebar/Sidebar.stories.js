import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

export default {
    title: 'Organisms/Sidebar',
    component: Sidebar,
    decorators: [(Story) => (
        <MemoryRouter initialEntries={['/']}><Story/></MemoryRouter>
    )],
}

export const Normal = () => <Sidebar/>;