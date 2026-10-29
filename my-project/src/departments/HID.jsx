import DepartmentDetail from "../components/common/DepartmentDetail";

const department = {
  code: "HID",
  name: "Humanity Impact & Development",
  description:
    "Mengenal lebih dekat gagasan, arah gerak, dan nilai dasar yang kami bawa dalam satu periode kepengurusan.",
  image: "/departments/hid/HID.jpg",
};

// Ganti "name" dan "role" sesuai anggota.
// Urutan kartu di halaman mengikuti urutan di daftar ini.
const members = [
  {
    name: "MUHAMMAD FACHRI AURAVYANO SAKA",
    role: "Koordinator Divisi",
    image: "/departments/hid/anggotahid1.jpg",
  },
  {
    name: "SHAFIRA SHIFA AZAHRA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid2.jpg",
  },
  {
    name: "ASSYIFA ZAHRA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid3.jpg",
  },
  {
    name: "JAHRA SYARIFAH NAQIYYAH SALSABILA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid4.jpg",
  },
  {
    name: "HILYATI AULIA",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid5.jpg",
  },
  {
    name: "MUHAMMAD FARREL ARGIANTO",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid6.jpg",
  },
  {
    name: "MUHAMMAD ARI TRIANIRTO",
    role: "Staff of Department",
    image: "/departments/hid/anggotahid7.jpg",
  },
];

export default function HID() {
  return <DepartmentDetail department={department} members={members} />;
}
