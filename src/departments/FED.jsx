import DepartmentDetail from "../components/common/DepartmentDetail";

const department = {
  code: "FED",
  name: "Finance & Entrepreneurship Department",
  description:
    "Mengenal lebih dekat gagasan, arah gerak, dan nilai dasar yang kami bawa dalam satu periode kepengurusan.",
  image: "/departments/fed/FED.jpg",
};

// Ganti "name" dan "role" sesuai anggota.
// Urutan kartu di halaman mengikuti urutan di daftar ini.
const members = [
  {
    name: "SYAHLA KHEISYYA MAYASTRIA",
    role: "Koordinator Divisi",
    image: "/departments/fed/anggotafed1.jpg",
  },
  {
    name: "NABELA RAHMATUS SANIA",
    role: "Staff of Department",
    image: "/departments/fed/anggotafed2.jpg",
  },
  {
    name: "AMELIA CANDRADEWI",
    role: "Staff of Department",
    image: "/departments/fed/anggotafed3.jpg",
  },
  {
    name: "HERDIAN ABDILLAH PURONOMO",
    role: "Staff of Department",
    image: "/departments/fed/anggotafed4.jpg",
  },
  {
    name: "RAFI AZIS FAOZAN",
    role: "Staff of Department",
    image: "/departments/fed/anggotafed5.jpg",
  },
  {
    name: "SHASA OLIVIA ROSE",
    role: "Staff of Department",
    image: "/departments/fed/anggotafed6.jpg",
  },
  {
    name: "AQILAH IZANI",
    role: "Staff of Department",
    image: "/departments/fed/anggotafed7.jpg",
  },
];

export default function FED() {
  return <DepartmentDetail department={department} members={members} />;
}
