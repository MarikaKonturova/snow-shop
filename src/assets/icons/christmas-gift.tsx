import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.75 5.625C8.75 7.69562 10.4294 9.375 12.5 9.375M27.5 9.375C29.5706 9.375 31.25 7.69562 31.25 5.625M35.625 21.875V35.625C35.625 37.0056 34.5056 38.125 33.125 38.125H6.875C5.49437 38.125 4.375 37.0056 4.375 35.625V21.875M28.75 35.625L27.8119 34L28.75 35.625ZM28.75 35.625L29.6875 34.0006L28.75 35.625ZM26.875 35.625H30.625H26.875ZM5.25125 14.6875L8.5 12.8125L5.25125 14.6875ZM5.25125 12.8125L8.49937 14.6875L5.25125 12.8125ZM6.875 11.875V15.625V11.875ZM30 16.875L29.0619 15.25L30 16.875ZM30 16.875L30.9375 15.2506L30 16.875ZM28.125 16.875H31.875H28.125ZM6.875 26.25L8.5 25.3125L6.875 26.25ZM6.875 26.25L8.49937 27.1875L6.875 26.25ZM6.875 24.375V28.125V24.375ZM11.5013 33.4375L14.75 31.5625L11.5013 33.4375ZM11.5013 31.5625L14.7494 33.4375L11.5013 31.5625ZM13.125 30.625V34.375V30.625ZM29.0013 28.4375L32.25 26.5625L29.0013 28.4375ZM29.0013 26.5625L32.2494 28.4375L29.0013 26.5625ZM30.625 25.625V29.375V25.625ZM20 5.625C20 3.55438 18.3206 1.875 16.25 1.875C14.1794 1.875 12.5 3.55438 12.5 5.625C12.5 7.69562 14.1794 9.375 16.25 9.375C18.3206 9.375 20 7.69562 20 5.625ZM27.5 5.625C27.5 3.55438 25.8206 1.875 23.75 1.875C21.6794 1.875 20 3.55438 20 5.625C20 7.69562 21.6794 9.375 23.75 9.375C25.8206 9.375 27.5 7.69562 27.5 5.625ZM23.125 11.875V19.375V11.875ZM16.875 11.875V19.375V11.875ZM23.125 21.875V38.125V21.875ZM16.875 21.875V38.125V21.875ZM38.125 10.625C38.125 9.935 37.565 9.375 36.875 9.375H3.125C2.435 9.375 1.875 9.935 1.875 10.625V18.125C1.875 18.815 2.435 19.375 3.125 19.375H36.875C37.565 19.375 38.125 18.815 38.125 18.125V10.625Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
