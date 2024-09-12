import EcosystemImage from "@assets/ecosystem.png";
import React from "react";
import GradientText from "../ui/GradientText";
const EcoSystemCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div>
      <p className="mb-3 text-lg font-medium leading-7">{title}</p>
      <p className="text-sm font-light leading-7 text-gray-400">
        {description}
      </p>
    </div>
  );
};
const EchosystemSection: React.FC = () => {
  return (
    <section id="ecosystems" className="py-12">
      <GradientText text="Ecosystem" className="my-12 sm:my-24" />
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
        <img src={EcosystemImage} alt="Ecosystem" className="w-full sm:w-1/2" />
        <div className="flex flex-col items-center justify-center gap-4 sm:w-1/2 sm:items-start">
          <p className="text-sm leading-7 text-gray-400">
            The Skytech ecosystem is specifically designed to ease the process
            of freelancing for service providers/freelancers and clients/buyers.
            Thisranges from proper exposure of services by service providers,
            safer and better payment method through cryptocurrency, genuine
            customer reviews and lots more.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <EcoSystemCard
              title="ONE MARKETPLACE"
              description="One International Marketplace that combines online store and services around the world. Buy any goods or services with our Skytech tokens."
            />
            <EcoSystemCard
              title="Low transaction cost"
              description="With blockchain technology in the SkyTech platform, users can quickly get paid for their services without having to go through strict or delayed payment procedures with low costs."
            />
            <EcoSystemCard
              title="Anti-cheating"
              description="With the integration of blockchain technology into the platform, every data on SkyTech will be stored on the blockchain which is immutable and falsify-proof as no one can tamper with them."
            />
            <EcoSystemCard
              title="Reliable and secure  "
              description="Buyers in the SkyTech ecosystem can safely rely on the platform to provide credible, genuine, and professional service providers who will offer them premium services."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EchosystemSection;
