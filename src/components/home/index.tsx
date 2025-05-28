import ArticlesInsights from "./articles";
import InFinityMesh from "./infinity-mesh";
import Introduction from "./introduction";
import ServicesSection from "./service-section";
import VisionMission from "./vision-mission";

const Home = () => {
  return (
    <div>
      <InFinityMesh />
      <Introduction />
      <VisionMission />
      <ServicesSection />
      <ArticlesInsights />
    </div>
  );
};

export default Home;
