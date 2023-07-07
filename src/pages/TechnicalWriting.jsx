import ServicesBanner from '../components/Banner/ServicesBanner'
import Footer from '../components/Footer/Footer';
import ServicesContent from '../components/Services/ServicesContent'


const TechnicalWriting = () => {
  return (
    <>
      <ServicesBanner heading="Technical Writing" />
      <ServicesContent
        heading="Technical Writing"
        description="We understand the importance of clear and concise technical documentation. Our technical writers have the expertise to translate complex concepts into user-friendly and easy-to-understand content. Whether it's user manuals, product guides, or technical reports, we ensure your technical content is accurate, informative, and accessible to your target audience."
      />
      <Footer/>
    </>
  );
};

export default TechnicalWriting;
