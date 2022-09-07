import {
  classnames,
  container,
  margin,
  maxWidth,
  padding,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(container('container'), margin('mx-auto'))
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
