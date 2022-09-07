import { AccentText } from 'components/ui/Text'
import ENSAddress from 'components/ui/ENSAddress'
import Network from 'models/Network'

export default function ({
  account,
  needNetworkChange,
  getENSName,
}: {
  account?: string
  needNetworkChange: boolean
  getENSName: (address: string) => string | undefined
}) {
  const NotConnected = () =>
    needNetworkChange ? <span>Change network</span> : <span>No wallet</span>

  return (
    <AccentText
      extraSmall
      color={account ? 'text-accent' : 'text-primary-semi-dimmed'}
    >
      {account ? (
        <ENSAddress
          address={account}
          network={Network.Goerli}
          getENSName={getENSName}
        />
      ) : (
        <NotConnected />
      )}
    </AccentText>
  )
}
