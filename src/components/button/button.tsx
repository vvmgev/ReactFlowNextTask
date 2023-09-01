import Image from 'next/image';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    icon?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>;

const Button: React.FC<Props> = ({ onClick, children, icon}): React.ReactElement => {
    return (
      <button onClick={e => onClick && onClick(e)}
            className='text-white p-2 border border-teal-500 bg-teal-500 hover:bg-teal-600
                         rounded-xl min-w-[100px] w-full'>
        <div className='flex gap-1 justify-center'>
            {icon && <Image src={icon} alt='chart' /> }
            {children}
        </div>
    </button>
    )
};

export default Button;
  