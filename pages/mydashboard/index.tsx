import MyDashBoardPage from '@/components/mydashboardpage';
import * as React from 'react';

export interface MyDashBoardProps {
}

export default function MyDashBoard(props: MyDashBoardProps) {
    return (
        <div className='bg-yellow-50 h-screen'>
            <MyDashBoardPage />
        </div>
    );
}
