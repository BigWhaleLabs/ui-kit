import { SocialLink } from 'components/ui/Text'
import { displayTo } from 'helpers/visibilityClassnames'
import Delimiter from 'components/ui/Delimiter'
import Discord from 'icons/Discord'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
} from 'classnames/tailwind'

const socialContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  flexDirection('flex-row'),
  gap('gap-x-4')
)
const socialLinksContainer = classnames(displayTo('md'), socialContainer)

export default function () {
  return (
    <div className={socialLinksContainer}>
      <SocialLink url="https://discord.gg/NHk96pPZUV">
        <Discord />
      </SocialLink>
      <Delimiter />
      <SocialLink url="https://twitter.com/bigwhalelabs">
        <Twitter />
      </SocialLink>
    </div>
  )
}
