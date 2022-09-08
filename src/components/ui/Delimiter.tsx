import { AccentText } from '@/components/ui/Text'
import { displayFrom } from '@/helpers/visibilityClassnames'
import classnames, { TTextColor, width } from 'classnames/tailwind'

const bottomSeparator = classnames(width('w-fit'), displayFrom('md'))

export default function ({ color }: { color?: TTextColor }) {
  return (
    <div className={bottomSeparator}>
      <AccentText small color={color || 'text-primary-dimmed'}>
        |
      </AccentText>
    </div>
  )
}
