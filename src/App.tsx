import { BadgeText } from '@/components/ui/Text'
import FooterBlog from '@/components/Footer/FooterBlog'
import Navbar from '@/components/navbar/Navbar'
import PostCard from '@/components/ui/PostCard'

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
      <PostCard>
        <BadgeText>
          <FooterBlog />
        </BadgeText>
      </PostCard>
    </div>
  )
}
