import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen h-full flex relative">
      <Outlet />
    </div>
  );
};

export default RootLayout;
