import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F2E6DC] flex items-center text-left">
      <section className="container mx-auto flex flex-col md:flex-row justify-center items-center my-2  md:gap-2 w-full px-4">

        {/* IMAGE */}
        <div className=" justify-end">
          <Image
            src="/element.png"
            alt="Profil"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="justify-end max-w-md text-center md:text-left md:-mx-10 md:-mt-20">
          <h2 className="text-4xl mt-1 font-extrabold text-lime-700 mb-1">
            Digital
          </h2>
          <h2 className="text-4xl font-extrabold text-orange-500 -mt-2">
            Library
          </h2>

          <p className="text-gray-600 mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            aperiam odit dolorum quibusdam libero repudiandae deleniti fuga
            beatae iure atque.
          </p>

          <p className="text-black font-semibold mt-4">
            SMK Telkom Malang
          </p>
        </div>

      </section>
    </div>
  );
}
