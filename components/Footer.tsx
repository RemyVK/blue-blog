"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 mb-4">
      <FacebookShareButton url={"https://www.facebook.com/"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={"https://github.com/next-share"}
        title={"next-share is a social share buttons for your next React apps."}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={"https://web.whatsapp.com/"}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={"https://www.linkedin.com/"}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}
