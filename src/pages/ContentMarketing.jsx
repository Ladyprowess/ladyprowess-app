import ServicesBanner from '../components/Banner/ServicesBanner'
import Footer from '../components/Footer/Footer';
import ServicesContent from '../components/Services/ServicesContent'

const ContentMarketing = () => {
  return (
    <>
      <ServicesBanner heading="Content Marketing" />
      <ServicesContent
        heading="Content Marketing"
        description="We understand the power of words and their impact on your brand. Our talented writers are dedicated to creating captivating, informative content that resonates with your target audience. From website copy and blog posts to social media content and product descriptions, we ensure that our content reflects your brand's unique voice."
      />
      <Footer/>
    </>
  );
};

export default ContentMarketing;
