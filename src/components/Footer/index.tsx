import { Children } from 'preact/compat'
import { VNode } from 'preact'
import Delimiter from '@/components/ui/Delimiter'
import SocialLinksContainer from '@/components/Footer/SocialLinksContainer'
import classnames, {
  TTextColor,
  alignItems,
  display,
  flexDirection,
  gap,
  padding,
} from '@/classnames/tailwind'

const commonClasses = classnames(display('flex'), alignItems('items-center'))
const socialContainerCard = classnames(
  commonClasses,
  flexDirection('flex-col', 'md:flex-row'),
  padding('py-4', 'px-4', 'lg:px-25'),
  gap('gap-y-4', 'md:gap-x-4', 'md:gap-y-0')
)
const linkContainer = classnames(
  commonClasses,
  flexDirection('flex-col', 'md:flex-row'),
  gap('gap-y-2', 'md:gap-y-0', 'md:gap-x-4')
)

export default function ({
  links,
  delimiterColor,
}: {
  links: VNode[]
  delimiterColor?: TTextColor
}) {
  return (
    <div className={socialContainerCard}>
      <div className={linkContainer}>
        {Children.map(links, (link, index) => (
          <>
            {link}
            {index !== links.length && <Delimiter color={delimiterColor} />}
          </>
        ))}
      </div>
      <SocialLinksContainer />
    </div>
  )
}
