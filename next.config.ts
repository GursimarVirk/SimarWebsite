import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/Home/60a566a5a4395445cc3d781dbab4e536.webp",
        destination: "https://sites.google.com/sitesv-images-rt/AMxu72sKO8MIuLZRTc2E_2I-DqjoOnRIN4AgDGHFbB7B-NAXw7LoWn6R1Z5UgPLhTMZ-o2cqne9iXtfzwm6QrZKaWs83_JZoYdOV_6z_XcncoxCjm7gDwAY9CNZTj_rgZobAGfve8ncaqAei_2VHNkiZDMi00PZ-Ef-CV8q5-lRDikMk3587dWWETgP_jx0NOhw5bIwcTbtcHKMayPxYuBCUL1Sgn2-kDBGyJaPESftSACA%3Dw1280",
      },
    ];
  },
};

export default nextConfig;
