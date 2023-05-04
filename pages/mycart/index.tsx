import MyCardPage from '@/components/mycartpage';
import * as React from 'react';

export interface  MyCartProps {
}

export default function MyCart (props:  MyCartProps) {
  return (
    <div>
      <MyCardPage/>
    </div>
  );
}
