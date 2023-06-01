import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { Tabs } from '@mantine/core';

export default function Membership() {
  const [tabID, setTabID] = useState<number>(1);
  function onChangeTab(value: number): void {
    if (tabID !== value) {
      setTabID(value);
    }
  }
  return (
    <Tabs defaultValue={'login'}>
      <Tabs.List className="w-full justify-around border-b-0 bg-white py-2 font-bold rounded">
        <Tabs.Tab className="px-0 text-BF4565" value="login">Üye Girişi</Tabs.Tab>
        <Tabs.Tab className="px-0 text-BF4565" value="sign">Üye Ol</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="login" pt="xs">
        <Login />
      </Tabs.Panel>
      <Tabs.Panel value="sign" pt="xs">
        <Register />
      </Tabs.Panel>
    </Tabs>
  )
}
