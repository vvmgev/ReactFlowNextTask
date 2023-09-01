import { ChangeEvent } from "react";

type Props = {
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    type?: string,
    id?: string
    placeholder?: string,
    value?: string
    name?: string
    classes?: string
}
const InputText: React.FC<Props> = ({ 
    onChange, 
    type = 'text', 
    id, classes = '', 
    placeholder = '', 
    value = '', ...rest }): React.ReactElement => {
        if(type === 'textarea') {
            return (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    className={`block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md ${classes}`}
                    onChange={e => onChange && onChange(e)}
                    value={value}
                    {...rest}
                />
            )
        }
        return (
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md ${classes}`}
                onChange={e => onChange && onChange(e)}
                value={value}
                {...rest}
            />
        )
}

export default InputText;