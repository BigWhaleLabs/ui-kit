import { FooterLink } from '@/components/ui/Text'
import Delimiter from '@/components/ui/Delimiter'
import SC from '@/icons/SC'
import SocialLinksContainer from '@/components/Footer/SocialLinksContainer'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  padding,
  space,
} from 'classnames/tailwind'

const commonClasses = classnames(display('flex'), alignItems('items-center'))
const socialContainerCard = classnames(
  commonClasses,
  flexDirection('flex-col', 'md:flex-row'),
  padding('py-4', 'px-4', 'lg:px-25'),
  space('space-y-4', 'md:space-x-4', 'md:space-y-0')
)
const linkContainer = classnames(
  commonClasses,
  flexDirection('flex-col', 'md:flex-row'),
  space('space-y-2', 'md:space-y-0', 'md:space-x-4')
)
const footerLogo = classnames(
  commonClasses,
  justifyContent('justify-center'),
  flexDirection('flex-row'),
  space('space-x-4')
)

export default function () {
  return (
    <div className={socialContainerCard}>
      <div className={linkContainer}>
        <FooterLink url="https://blog.bigwhalelabs.com/">
          <div className={footerLogo}>
            <SC />
            <span>Blog</span>
          </div>
        </FooterLink>
        <Delimiter />
        <FooterLink internal url="/terms">
          Terms of service
        </FooterLink>
        <Delimiter />
        <FooterLink internal url="/privacy">
          Privacy policy
        </FooterLink>
      </div>
      <SocialLinksContainer />
    </div>
  )
}
