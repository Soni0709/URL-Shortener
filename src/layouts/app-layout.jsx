import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      {/* footer */}
      <div className="p-10 text-center bg-gray-800 mt-10">Stay inspired. Stay curious.</div>
    </div>
  );
};

export default AppLayout;
