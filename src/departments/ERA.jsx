import DepartmentDetail from "../components/common/DepartmentDetail";

const department = {
  code: "ERA",
  name: "External Relations & Affairs",
  description:
    "Mengenal lebih dekat gagasan, arah gerak, dan nilai dasar yang kami bawa dalam satu periode kepengurusan.",
  image: "/departments/era/ERA.jpg",
};

const members = [
  {
    name: "DAMANIK YOHANES GEOVAN ONDOVA",
    role: "Koordinator Divisi",
    image: "/departments/era/anggotaera1.jpg",
  },
  {
    name: "RAYHAN AHZA WIDAYA MUKTI",
    role: "Staff of Department",
    image: "/departments/era/anggotaera3.jpg",
  },
  {
    name: "AIS NURHANIFAH",
    role: "Staff of Department",
    image: "/departments/era/anggotaera4.jpg",
  },
  {
    name: "ANGELIA LORIA TIMBA",
    role: "Staff of Department",
    image: "/departments/era/anggotaera5.jpg",
  },
  {
    name: "ILHAM SULISTYO RIZKY",
    role: "Staff of Department",
    image: "/departments/era/anggotaera6.jpg",
  },
  {
    name: "RAKHMAT PRATAMA",
    role: "Staff of Department",
    image: "/departments/era/anggotaera7.jpg",
  },
  {
    name: "ELFAN ENDRIYANTO",
    role: "Staff of Department",
    image: "/departments/era/anggotaera8.jpg",
  },
];

export default function ERA() {
  return <DepartmentDetail department={department} members={members} />;
}
