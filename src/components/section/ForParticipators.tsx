import ForParticipatorsImage from "@assets/participators.png";
import GradientText from "@components/ui/GradientText";
import { Lightbulb, Sparkles, Stamp, Waypoints } from "lucide-react";
import React from "react";
const ForParticipators: React.FC = () => {
  return (
    <section className="py-12">
      <GradientText text="For Participators" className="text-center" />
      <div className="flex flex-col items-center sm:justify-between sm:flex-row">
        <div className="text-sm font-light leading-7 text-gray-400 sm:w-1/2">
          <p>
            This refers to businessmen, individuals who require digital services
            for their businesses or personal use. The services found on the
            SkyTech platform are completely determined by the Sellers as they
            could range from web design, writing, programming, finance and lots
            more.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Lightbulb className="flex-shrink-0 text-blue-400" size={44} />
            <p className="flex-grow">
              Search for service: Buyers can use the search feature to find
              services they need on the SkyTech platform.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Waypoints className="flex-shrink-0 text-blue-400" size={44} />
            <p className="flex-grow">
              Connect human service provider: After searching for a required
              service, the search results display a list of human service
              providers offering such service. This leaves the buyer to make a
              choice and proceed to connect with the desired service provider.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Sparkles className="flex-shrink-0 text-blue-400" size={44} />
            <p className="flex-grow">Sign an intelligent service contract.</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Stamp className="flex-shrink-0 text-blue-400" size={44} />
            <p className="flex-grow">
              Undertake the two parties to approve and complete the service.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="flex h-[400px] w-[400px] animate-spin-slow items-center justify-center overflow-hidden rounded-full border-2 border-blue-400 border-b-transparent opacity-50 sm:h-[500px] sm:w-[500px]">
            <div className="animate-reverse-spin h-[300px] w-[300px] rounded-full border-2 border-blue-400 border-t-transparent opacity-50 duration-1000 sm:h-[400px] sm:w-[400px]"></div>
          </div>
          <img
            src={ForParticipatorsImage}
            alt="For Participators"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          />
        </div>
      </div>
    </section>
  );
};

export default ForParticipators;
