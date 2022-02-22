import { FacebookShareButton, LineShareButton } from 'react-share'
import { FacebookIcon, LineIcon } from 'react-share'

function SocialShare(props) {
    const {url , round} = props
  return (
    <>
      <FacebookShareButton url={url}>
        <FacebookIcon />
      </FacebookShareButton>
      <LineShareButton url={url}>
        <LineIcon />
      </LineShareButton>
    </>
  )
}

export default SocialShare
