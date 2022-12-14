import { SocialLink } from '@/components/ui/Text'
import { displayFrom } from '@/helpers/visibilityClassnames'
import AccountAndLogo from '@/components/navbar/AccountAndLogo'
import Discord from '@/icons/Discord'
import ExternalLink from '@/components/ui/ExternalLink'
import Network from '@/models/Network'
import SealVerse from '@/components/navbar/SealVerse'
import Twitter from '@/icons/Twitter'
import classnames, {
  alignItems,
  backgroundColor,
  borderWidth,
  cursor,
  display,
  flexDirection,
  gap,
  height,
  space,
  width,
} from '@/classnames/tailwind'
import getEtherscanAddressUrl from '@/helpers/network/getEtherscanAddressUrl'

const walletContainer = classnames(
  display('flex'),
  flexDirection('flex-col-reverse', 'xs:flex-row'),
  alignItems('items-center'),
  gap('gap-x-3', 'sm:gap-x-4'),
  cursor('cursor-pointer')
)
const accountLinkContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('xs:space-x-4', 'space-x-2'),
  cursor('cursor-pointer')
)
const socialContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('space-x-4')
)
const delimiterContainer = classnames(
  borderWidth('border-0'),
  backgroundColor('bg-primary-dimmed'),
  width('w-px'),
  height('h-4')
)
const lastDelimiterContainer = classnames(delimiterContainer, displayFrom('xs'))
const socialLinksContainer = classnames(socialContainer, displayFrom('md'))

const AccountContainer = ({
  account,
  onChangeNetwork,
  needNetworkChange,
  eNSName,
  noWalletText,
}: {
  account?: string
  onChangeNetwork?: () => Promise<void>
  needNetworkChange: boolean
  eNSName?: string
  noWalletText?: string
}) => {
  if (account)
    return (
      <ExternalLink url={getEtherscanAddressUrl(account, Network.Goerli)}>
        <div className={accountLinkContainer}>
          <AccountAndLogo
            needNetworkChange={needNetworkChange}
            account={account}
            eNSName={eNSName}
            connected={true}
            noWalletText={noWalletText}
          />
        </div>
      </ExternalLink>
    )

  return (
    <div className={accountLinkContainer} onClick={onChangeNetwork}>
      <AccountAndLogo
        eNSName={eNSName}
        needNetworkChange={needNetworkChange}
        connected={false}
        noWalletText={noWalletText}
      />
    </div>
  )
}

export default function ({
  account,
  needNetworkChange,
  eNSName,
  noWalletText,
}: {
  account?: string
  needNetworkChange: boolean
  eNSName?: string
  noWalletText?: string
}) {
  return (
    <div className={walletContainer}>
      <div className={socialLinksContainer}>
        <SocialLink url="https://discord.gg/NHk96pPZUV">
          <Discord />
        </SocialLink>
        <SocialLink url="https://twitter.com/bigwhalelabs">
          <Twitter />
        </SocialLink>
        <hr className={delimiterContainer} />
      </div>
      <SealVerse />
      <hr className={lastDelimiterContainer} />

      <AccountContainer
        eNSName={eNSName}
        needNetworkChange={needNetworkChange}
        account={account}
        noWalletText={noWalletText}
      />
    </div>
  )
}
