import DepartmentDetail from "../components/common/DepartmentDetail";

const department = {
  code: "TDI",
  name: "Talent Development & Innovation",
  description:
    "Mengenal lebih dekat gagasan, arah gerak, dan nilai dasar yang kami bawa dalam satu periode kepengurusan.",
  image: "/departments/tdi/TDI.jpg",
};

// Ganti "name" dan "role" sesuai anggota.
// Urutan kartu di halaman mengikuti urutan di daftar ini.
const members = [
  {
    name: "RIDHA AKIFAH",
    role: "Koordinator Divisi",
    image: "/departments/tdi/anggotatdi1.jpg",
  },
  {
    name: "RIZKY AL KAHFI",
    role: "Staff of Department",
    image: "/departments/tdi/anggotatdi2.jpg",
  },
  {
    name: "RISTA SANIA PUTRI",
    role: "Staff of Department",
    image: "/departments/tdi/anggotatdi3.jpg",
  },
  {
    name: "NAWWAR ULAYYA FRODINE",
    role: "Staff of Department",
    image: "/departments/tdi/anggotatdi4.jpg",
  },
  {
    name: "TAYSA RAHMA IRAHIM",
    role: "Staff of Department",
    image: "/departments/tdi/anggotatdi5.jpg",
  },
  {
    name: "AHMAD LUTHFI HABIBIE",
    role: "Staff of Department",
    image: "/departments/tdi/anggotatdi6.jpg",
  },
  {
    name: "MARZHENDO GALANG SAPTURA",
    role: "Staff of Department",
    image: "/departments/tdi/anggotatdi7.jpg",
  },
  {
    name: "BRILYANT KEYZA HIDAYAT",
    role: "Staff of Department",
    image: "/departments/tdi/anggotatdi8.jpg",
  },
];

export default function TDI() {
  return <DepartmentDetail department={department} members={members} />;
}
