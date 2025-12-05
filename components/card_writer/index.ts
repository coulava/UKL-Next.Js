
export interface Writer {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
}

export const writers: Writer[] = [
  {
    id: "w1",
    name: "James Clear",
    avatarUrl:"https://i.pinimg.com/1200x/80/9e/29/809e295c38ee893b66702ade205f17cb.jpg",
    bio: "James Clear is a writer and speaker. He is author of the #1 New York Times bestseller Atomic Habits and the popular 3-2-1 newslatter.",
    followers: 20500,
  },
  {
    id: "w2",
    name: "Tere Liye",
    avatarUrl:"https://asset.kompas.com/crops/PaZRk1P0VgkRvcBWl-VcvLXZoUc=/0x0:0x0/750x500/data/photo/buku/6244f60d53b8b.jpeg",
    bio: "Tere Liye is an Indonesian author with more than 50 books.",
    followers: 20500,
  },
  {
    id: "w3",
    name: "Brian Khrisma",
    avatarUrl:"https://awsimages.detik.net.id/community/media/visual/2023/12/06/penulis-brian-krishna-saat-menyambangi-kantor-detikcom-pada-jumat-1122023-1_43.jpeg?w=700&q=90",
    bio: "Brian Khrisma is an Indonesian writer known for his novels.",
    followers: 20500,
  },
];


export default writers;
