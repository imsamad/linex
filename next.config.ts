import type { NextConfig } from "next";

import nextra from "nextra"

const withNextra = nextra({
})

const nextConfig: NextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source:"/",
  //       destination:"/docs",
  //       permanent:true
  //     }
  //   ]
  // }
  /* config options here */
};

export default withNextra(nextConfig);
