import cls from 'classnames';

import type { NavbarType } from '@/types';

const Navbar = ({
  brand,
  startContent,
  centerContent,
  endContent,
  className
}: NavbarType) => {
  return (
    <div className={cls('navbar bg-base-100 shadow-md', className)}>
      <div className='navbar-start'>
        {startContent}
        {brand && <div className='text-xl font-bold px-2'>{brand}</div>}
      </div>
      {centerContent && (
        <div className='navbar-center hidden lg:flex'>{centerContent}</div>
      )}
      {endContent && <div className='navbar-end'>{endContent}</div>}
    </div>
  );
};

export default Navbar;
