import DepartmentDetail from "../components/common/DepartmentDetail";

const department = {
  code: "CCO",
  name: "Content Creation & Outreach",
  description:
    "Mengenal lebih dekat gagasan, arah gerak, dan nilai dasar yang kami bawa dalam satu periode kepengurusan.",
  image: "/departments/cco/CCO.jpg",
};

const members = [
  {
    name: "DAFA AWAL WAHYU PAMBUDI",
    role: "Koordinator Divisi",
    image: "/departments/cco/anggotacco1.jpg",
  },
  {
    name: "CHADAFYA PUTRA ZULFIKAR",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco2.jpg",
  },
  {
    name: "MUHAMMAD ZACKY PERMANA",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco3.jpg",
  },
  {
    name: "MUHAMMAD HAIDAR AZ ZACKY",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco4.jpg",
  },
  {
    name: "PAMELA SANDRA AMELIA BR. GINTING",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco5.jpg",
  },
  {
    name: "MAHARDIKA PUTRA AZLIAN",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco6.jpg",
  },
  {
    name: "LALUNA AFRIL DIASYIFA",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco7.jpg",
  },
  {
    name: "MOH. CHANDRA WARDANA",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco8.jpg",
  },
  {
    name: "MANGGALA PUTRA RADITYA",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco9.jpg",
  },
  {
    name: "AQILLA RACHEL RABBANI",
    role: "Staff of Department",
    image: "/departments/cco/anggotacco10.jpg",
  },
];

export default function CCO() {
  return <DepartmentDetail department={department} members={members} />;
}
