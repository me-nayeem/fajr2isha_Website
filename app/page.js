import Hero from "@/components/Hero";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUniqueSection from "@/components/WhyUniqueSection";
import ConsistencySection from "@/components/ConsistencySection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TechStackSection from "@/components/TechStackSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const REPO_URL = "https://github.com/me-nayeem/fajr_to_isha";
const DOWNLOAD_URL = `${REPO_URL}/releases/latest/download/fajr2isha.apk`;

export default function Home() {
  return (
    <main>
      <Hero downloadUrl={DOWNLOAD_URL} />
      <WhatIsSection />
      <HowItWorksSection />
      <WhyUniqueSection />
      <ConsistencySection />
      <FeaturesSection />
      <ScreenshotsSection />
      <TechStackSection />
      <DownloadSection downloadUrl={DOWNLOAD_URL} />
      <Footer repoUrl={REPO_URL} />
    </main>
  );
}
