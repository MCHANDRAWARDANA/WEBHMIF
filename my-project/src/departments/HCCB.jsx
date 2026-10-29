import DepartmentDetail from "../components/common/DepartmentDetail";

const department = {
  code: "HCCB",
  name: "Human Capital & Character Building",
  description:
    "Mengenal lebih dekat gagasan, arah gerak, dan nilai dasar yang kami bawa dalam satu periode kepengurusan.",
  image: "/departments/hccb/HCCB.jpg",
};

// Ganti "name" dan "role" sesuai anggota.
// Urutan kartu di halaman mengikuti urutan di daftar ini.
// Catatan: anggotahccb1 dan anggotahccb2 punya spasi sebelum ".jpg",
// makanya ditulis "%20". Kalau file-nya sudah di-rename tanpa spasi,
// hapus "%20" di dua baris pertama.
const members = [
  {
    name: "CHILYA FADHILATIN NISA",
    role: "Koordinator Divisi",
    image: "/departments/hccb/anggotahccb1%20.jpg",
  },
  {
    name: "AMANDA SEPTIANA SALSABILA",
    role: "Staff of Department",
    image: "/departments/hccb/anggotahccb2%20.jpg",
  },
  {
    name: "ADHARA FALIYA UTANTI",
    role: "Staff of Department",
    image: "/departments/hccb/anggotahccb3.jpg",
  },
  {
    name: "NEHEMIA PANDU INDRAGIRI",
    role: "Staff of Department",
    image: "/departments/hccb/anggotahccb4.jpg",
  },
  {
    name: "DIVA ZAHRA NABILA",
    role: "Staff of Department",
    image: "/departments/hccb/anggotahccb5.jpg",
  },
  {
    name: "ANNISA BERLIANA NINDYA SYAH PUTRI",
    role: "Staff of Department",
    image: "/departments/hccb/anggotahccb6.jpg",
  },
  {
    name: "BARRET FAIRUZ AZIZAH",
    role: "Staff of Department",
    image: "/departments/hccb/anggotahccb7.jpg",
  },
  {
    name: "TIO ARMANNI",
    role: "Staff of Department",
    image: "/departments/hccb/anggotahccb8.jpg",
  },
];

export default function HCCB() {
  return <DepartmentDetail department={department} members={members} />;
}
