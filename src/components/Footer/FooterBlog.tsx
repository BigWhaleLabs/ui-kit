import SC from '@/icons/SC'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
} from '@/classnames/tailwind'

const footerLogo = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  flexDirection('flex-row'),
  gap('gap-x-4')
)

export default function () {
  return (
    <div className={footerLogo}>
      <SC />
      <span>Blog</span>
    </div>
  )
}
