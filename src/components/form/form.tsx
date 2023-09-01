import { FormEvent, FormEventHandler, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}>;

const Form: React.FC<Props> = ({ children, onSubmit }): React.ReactElement => {
    const onHandleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(onSubmit) {
            onSubmit(e);
        }
      };

    return (
        <form onSubmit={onHandleSubmit}>{children}</form>
    )
}

export default Form;