import React from "react";
import Footer from "@docusaurus/theme-classic/lib/theme/Footer";
import { MendableFloatingButton } from "@mendable/search";
export default function FooterWrapper(props) {
  return (
    <>
      <MendableFloatingButton anon_key={""} />
      <Footer {...props} />
    </>
  );
}
