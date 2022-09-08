import { BadgeText } from '@/components/ui/Text'
import Card from '@/components/ui/Card'
import FooterBlog from '@/components/Footer/FooterBlog'
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
      <Card>
        <BadgeText>
          <FooterBlog />
        </BadgeText>
      </Card>
    </div>
  )
}
