import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'


import cl from './text-field.module.scss'
import { VisibilityOff, Eye } from '@/assets/icons'

export type TextFieldProps = {
    containerProps?: ComponentProps<'div'>
    errorMessage?: string
    label?: string
    labelProps?: ComponentProps<'label'>
    onValueChange?: (value: string) => void
    search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            className,
            containerProps,
            errorMessage,
            label,
            labelProps,
            onChange,
            onValueChange,
            placeholder,
            search,
            type,
            ...restProps
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false)

        const isShowPasswordButtonShown = type === 'password'

        const finalType = getFinalType(type, showPassword)

        function handleChange(e: ChangeEvent<HTMLInputElement>) {
            onChange?.(e)
            onValueChange?.(e.target.value)
        }

        const classNames = {
            error: cl.error,
            field: `${cl.field} ${!!errorMessage && cl.error} ${className}`,
            fieldContainer: cl.fieldContainer,
            label: `${cl.label} ${labelProps?.className}`,
            leadingIcon: cl.leadingIcon,
            root: `${cl.root} ${containerProps?.className}`,
        }

        return (
            <div className={classNames.root}>
                {label && (
                    <p className={classNames.label}>
                        {label}
                    </p>
                )}
                <div className={classNames.fieldContainer}>
                    <input
                        className={classNames.field}
                        onChange={handleChange}
                        placeholder={placeholder}
                        ref={ref}
                        type={finalType}
                        {...restProps}
                    />
                    {isShowPasswordButtonShown && (
                        <button
                            className={cl.showPassword}
                            onClick={() => setShowPassword(prev => !prev)}
                            type={'button'}
                        >
                            {showPassword ? <VisibilityOff /> : <Eye />}
                        </button>
                    )}
                </div>

                <p className={classNames.error}>
                    {errorMessage}
                </p>
            </div>
        )
    }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
    if (type === 'password' && showPassword) {
        return 'text'
    }

    return type
}