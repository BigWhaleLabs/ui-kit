import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'

export default function () {
  return (
    <div>
      <Navbar
        logo={<div>No</div>}
        account={undefined}
        needNetworkChange={false}
        logoText="SealCaster"
        noWalletText={'Connect burner wallet'}
      />
      <Footer />
    </div>
  )
}
