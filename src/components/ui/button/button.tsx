import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cl from './button.module.scss'

type DefaultButtonProps = ComponentPropsWithoutRef<'button'>

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends DefaultButtonProps {
  variant?: ButtonVariant
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ className, variant = 'primary', ...rest }, ref) => {
    const classNames = {
      root: `${variant ? cl[variant] : ''} ${cl.button} ${className}`,
    }

    return <button className={classNames.root} {...rest} ref={ref} />
  }
)
