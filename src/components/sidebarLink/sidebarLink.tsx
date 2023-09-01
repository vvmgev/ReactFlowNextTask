import Image from 'next/image';
import Link from 'next/link';

type Props = {
    active: boolean,
    icon: string;
    path: string;
    name: string;
};

const SidebarLink: React.FC<Props> = ({ path, active, icon, name }): React.ReactElement => {
    return (
        <Link href={path}>
            <div className={`hover:bg-teal-500 text-white p-1 border 
                ${active ?  'bg-teal-500': 'bg-transparent' } border-teal-500 rounded-xl`}>
                <div className='flex gap-2 justify-center px-2'>
                    <Image src={icon} alt={name} />
                    <div className='max-md:hidden max-sm:block'>{name}</div>
                </div>
            </div>
        </Link>
    )
};

export default SidebarLink;
  