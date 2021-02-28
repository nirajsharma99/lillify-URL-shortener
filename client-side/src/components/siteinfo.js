import { useState } from 'react';
import TabNav from './TabNav';

function SiteInfo() {
  const [selected, setSelected] = useState('What is lillify?');
  return (
    <div>
      <TabNav
        tabs={[
          'What is lillify?',
          'Why lillify?',
          'Lil.fy URL-Shortener',
          'Branded URLs',
        ]}
        selected={selected}
        setSelected={setSelected}
      ></TabNav>
    </div>
  );
}
export default SiteInfo;
