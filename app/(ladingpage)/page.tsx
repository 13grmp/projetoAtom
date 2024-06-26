import { CustomCard } from "./components/CustomCard";
import HeroSection from "./components/HeroSection";
import { ContactCard } from "./components/Contact";

const LandingPagePage = () => {
  return (
    <>
      <div className="flex-col space-y-4 bg-[#FBF6FF]">
        <section id="home">
          <div className="bg-[#290742] mb-0 p-0 border-[#4FFF4B] border-b-8 pt-20">
            <div className="w-[70%] justify-center mx-auto">
              <HeroSection imageSrc="/assets/images/image-1.jpeg" />
            </div>
          </div>
        </section>
        <section id="sobre">
          <div className="w-[70%] justify-center mx-auto pt-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
              <div className="lg:col-span-4">
                <CustomCard
                  imageSrc="/assets/images/image-2.jpeg"
                  date="Janeiro 04, 2022"
                  title="Começando no ReactJS em 2022"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                />
              </div>
              <div className="space-y-4 lg:col-span-3">
                <div className="lg:ps-4 lg:pe-4 rounded-md">
                  <div className="text-purple-600 text-xs mb-1">
                    Janeiro 04, 2022
                  </div>
                  <div className="font-bold text-2xl mb-1 text-[#290742]">
                    Conheça as principais técnicas para conseguir uma vaga
                    internacional em programação
                  </div>
                  <p className="text-gray-700 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                    nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                    vitae, sed tristique.
                  </p>
                </div>
                <div className="lg:p-4 rounded-md">
                  <div className="text-purple-600 text-xs mb-1">
                    Janeiro 04, 2022
                  </div>
                  <div className="font-bold text-2xl mb-1 text-[#290742]">
                    Veja a evolução do Front-end na prática
                  </div>
                  <p className="text-gray-700 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                    nibh eu in aliquet ut adipiscing neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="categoria">

          <div className="w-[70%] justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CustomCard
              imageSrc="/assets/images/image-3.jpeg"
              date="Janeiro 04, 2022"
              title="10 dicas para conseguir a vaga desejada"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
            />
            <CustomCard
              imageSrc="/assets/images/image-4.jpeg"
              date="Janeiro 04, 2022"
              title="Deixe seu código mais semântico com essas dicas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
            />
            <CustomCard
              imageSrc="/assets/images/image-5.jpeg"
              date="Janeiro 04, 2022"
              title="Use essas dicas nas suas aplicações mobile"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
            />
          </div>
        </section>
        <section id="contact">
          <ContactCard/>
        </section>
      </div>
    </>
  );
};

export default LandingPagePage;
