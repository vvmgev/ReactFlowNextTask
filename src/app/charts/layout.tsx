import Sidebar from '@/components/sidebar/sidebar'
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>

const ChartsLayout: React.FC<Props> =({ children }) => {
  return (
    <div className='flex flex-row max-sm:flex-col-reverse'>
        <div className='w-fit max-sm:w-full h-screen max-sm:h-[5vh]'><Sidebar /></div>
        <div className='p-20 w-full h-[100vh] max-sm:h-[95vh] overflow-auto'>{children}</div>
    </div>
  )
}

export default ChartsLayout;
