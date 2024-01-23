import {FC, ReactNode} from 'react';

interface ResetPasswordLayoutProps{
    children: ReactNode;
}

const ResetPasswordLayout: FC<ResetPasswordLayoutProps> = ({ children }) => {
  return <div className='bg-slate-200 p-10 rounded-md'>{children}</div>;
};

export default ResetPasswordLayout;
