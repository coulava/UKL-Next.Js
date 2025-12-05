import writers from "@/components/card_writer";

export default async function WriterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params karena Next.js menjadikannya Promise
  // promise adalah janji yg akan memberi id
  
  const { id } = await params; //tunggu promise selesai lalu ambil nilai id dari dalamnya

  // Cari writer berdasarkan ID
  const writer = writers.find((w) => w.id === id);

  if (!writer) {
    return (
      <div className="p-6 text-center text-red-500">
        Writer not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen px-6 md:px-24 py-10 bg-[#F1E8DF]">
      <div className="">
        <h1 className="text-3xl font-bold text-[#5B5A2F] mb-6">Writer</h1>

        <div className=" p-6 rounded-lg bg-gray-50 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={writer.avatarUrl}
              alt={writer.name}
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <h2 className="font-semibold  text-black text-xl">{writer.name}</h2>
              <p className="text-gray-600 text-sm">
                {(writer.followers / 1000).toFixed(1)}k Followers
              </p>
            </div>
          </div>
           
           {/* Bio Section */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {writer.bio}
          </p>
        </div>
      </div>
    </main>
  );
}
