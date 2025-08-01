import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SidebarItem = ({ children }: Props) => {
  return (
    <div className='~flex ~h-[50px] ~w-full ~items-center ~justify-center hover:~bg-mosaic/10'>
      {children}
    </div>
  );
};

export default SidebarItem;
