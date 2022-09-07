import { Suspense, memo } from 'react'
import { display } from 'classnames/tailwind'
import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import Network from 'models/Network'
import truncateMiddleIfNeeded from 'helpers/network/truncateMiddleIfNeeded'

interface ENSAddressProps {
  address: string
  network: Network
  getENSName: (address: string) => string | undefined
}

function ENSAddressSuspended({
  address,
  truncate,
  truncateSize,
  getENSName,
}: ENSAddressProps & {
  truncate?: boolean
  truncateSize: number
}) {
  const ensName = getENSName(address)

  return (
    <>
      {truncate
        ? truncateMiddleIfNeeded(ensName || address, truncateSize)
        : ensName || truncateMiddleIfNeeded(address, truncateSize)}
    </>
  )
}

function ENSAddress({
  address,
  network,
  truncateSize,
  getENSName,
}: ENSAddressProps & { truncateSize: number }) {
  return (
    <Suspense fallback={truncateMiddleIfNeeded(address, truncateSize)}>
      <ENSAddressSuspended
        truncate
        address={address}
        network={network}
        truncateSize={truncateSize}
        getENSName={getENSName}
      />
    </Suspense>
  )
}

export default memo<ENSAddressProps & { truncateSize?: number }>(
  ({ address, network, truncateSize, getENSName }) => {
    // Used for gradient link. It won't work if we wrap it with a span
    if (truncateSize)
      return (
        <ENSAddress
          address={address}
          network={network}
          truncateSize={truncateSize}
          getENSName={getENSName}
        />
      )

    return (
      <>
        <span className={displayTo('md')}>
          <ENSAddress
            getENSName={getENSName}
            address={address}
            network={network}
            truncateSize={11}
          />
        </span>
        <span className={display(displayFrom('md'), 'lg:hidden')}>
          <ENSAddress
            getENSName={getENSName}
            address={address}
            network={network}
            truncateSize={17}
          />
        </span>
        <span className={displayFrom('lg')}>
          <ENSAddress
            getENSName={getENSName}
            address={address}
            network={network}
            truncateSize={25}
          />
        </span>
      </>
    )
  }
)
