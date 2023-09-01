'use client';
import Image from "next/image";
import SidebarLink from '@/components/sidebarLink/sidebarLink';
import LogoutIcon from '@/assets/icons/logout.svg';
import { usePathname, useRouter } from 'next/navigation'
import { sidebarPaths } from "@/config/routes";
import AuthService from "@/services/AuthService";

const Sidebar: React.FC = (): React.ReactElement => {
  const pathname = usePathname();
  const router = useRouter();

  const onLogout = async (): Promise<void> => {
    await AuthService.logout();
    router.push("/login");
  }
  
  return (
    <div className='flex flex-col h-[100vh] px-10 pt-20 pb-10 justify-between border border-slate-700 bg-slate-800
                    max-md:px-5 max-sm:h-full max-sm:flex-row max-sm:items-center max-sm:px-[5vh] max-sm:py-0'>
      <div className='flex flex-col gap-5 max-sm:flex-row'>
        {sidebarPaths.map((item, index) => (
          <SidebarLink key={index} active={pathname === item.path} {...item} />
        ))}
      </div>
      <div className='flex gap-1 cursor-pointer' onClick={onLogout}>
        <Image src={LogoutIcon} alt="logout" />
        <p className='max-md:hidden max-sm:block'>Logout</p>
      </div>
    </div>
  )
};

export default Sidebar;