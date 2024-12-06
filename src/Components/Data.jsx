import { IoMdStar } from "react-icons/io";



import { Work, School } from "@mui/icons-material";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentIcon from '@mui/icons-material/Payment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export const timelineData = [
  {
    type: "work",
    description: "Tidak melayani pembuatan aplikasi yang tidak didasari oleh SPK / PO (Kecuali jika aplikasi sejenis pernah kami buat untuk client lain sebelumnya)",
    icon: <AnnouncementIcon />,
    style: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowColor: "rgb(33, 150, 243)",
  },
  {
    type: "work",
    description: "Client Menjelaskan aplikasi apa yang dibutuhkan - by email",
    icon: <ConnectWithoutContactIcon />,
    style: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowColor: "rgb(33, 150, 243)",
  },
  {
    type: "work",
    description: "Client Mengirimkan SOP dalam bentuk flowchart atau narasi, data dan dokumen kepada vendor yang berkaitan dengan aplikasi yang akan dibuat - by email",
    icon: <AccountTreeIcon />,
    style: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowColor: "rgb(33, 150, 243)",
  },
  {
    type: "education",
    description: "Pengaturan schedule supervisi - by email atau telepon",
    icon: <DateRangeIcon />,
    style: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowColor: "rgb(33, 150, 243)",
  },
  {
    type: "education",
    description: "Meeting membahas SOP, data dan  dokumen",
    icon: <GroupsIcon />,
    style: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowColor: "rgb(33, 150, 243)",
  },
  {
    type: "education",
    description: "Vendor membuat penawaran harga dan argreement",
    icon: <MonetizationOnIcon />,
    style: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowColor: "rgb(33, 150, 243)",
  },
  {
    type: "education",
    description: "Client Menerbitkan SPK atau PO pembuatan aplikasi",
    icon: <PaymentsIcon />,
    style: { background: "rgb(233, 30, 99)", color: "#fff" },
    arrowColor: "#000",
  },
  {
    type: "education",
    description: "Client Melakukan pembayaran DP dan termin payment setelah invoice sesuai SPK atau PO",
    icon: <PaymentIcon />,
    style: { background: "rgb(233, 30, 99)", color: "#fff" },
    arrowColor: "#000",
  },
  {
    type: "education",
    description: "Vendor mulai membuat aplikasi, memasang, trial, go live, cut off dan maintenance",
    icon: <ManageAccountsIcon />,
    style: { background: "rgb(233, 30, 99)", color: "#fff" },
    arrowColor: "#000",
  },
  {
    type: "education",
    description: "Client Menerima pemasangan aplikasi, trial, go live, cut off dan maintenance",
    icon: <CloudDownloadIcon />,
    style: { background: "rgb(233, 30, 99)", color: "#fff" },
    arrowColor: "#000",
  },
];


export const faq = [
  {
    pertanyaan: "Apa layanan utama yang ditawarkan oleh Inspirasi Software?",
    jawaban: "Inspirasi Software menawarkan jasa pembuatan aplikasi desktop yang disesuaikan dengan kebutuhan bisnis Anda, mulai dari perencanaan hingga implementasi.",
  },
  {
    pertanyaan: "Platform apa saja yang didukung oleh aplikasi yang dikembangkan?",
    jawaban: "Aplikasi desktop yang kami kembangkan mendukung sistem operasi Windows, dan dapat disesuaikan untuk kebutuhan khusus Anda.",
  },
  {
    pertanyaan: "Berapa lama waktu yang dibutuhkan untuk membuat aplikasi desktop?",
    jawaban: "Waktu pengembangan bergantung pada kompleksitas aplikasi. Untuk proyek sederhana, biasanya memakan waktu 1-2 bulan. Proyek yang lebih kompleks dapat memakan waktu lebih lama.",
  },
  {
    pertanyaan: "Bagaimana cara memulai proyek bersama Inspirasi Software?",
    jawaban: "Anda dapat menghubungi kami melalui form kontak di website, email, atau nomor telepon kami untuk konsultasi awal. Kami akan mendiskusikan kebutuhan Anda secara mendetail.",
  },
  {
    pertanyaan: "Apakah Inspirasi Software menyediakan layanan after-sales?",
    jawaban: "Ya, kami menyediakan layanan purna jual seperti dukungan teknis, pemeliharaan aplikasi, dan pembaruan fitur sesuai kebutuhan.",
  },
  {
    pertanyaan: "Berapa biaya pembuatan aplikasi desktop di Inspirasi Software?",
    jawaban: "Biaya pengembangan aplikasi bervariasi tergantung pada fitur, kompleksitas, dan kebutuhan khusus. Silakan hubungi kami untuk mendapatkan penawaran harga.",
  },
  {
    pertanyaan: "Apakah Inspirasi Software menerima revisi selama proses pengembangan?",
    jawaban: "Ya, kami menerima revisi selama tahap pengembangan sesuai dengan perjanjian awal. Jumlah revisi akan dibahas saat penyusunan kontrak proyek.",
  },
  {
    pertanyaan: "Aplikasi Yang Dapat Kami Kerjakan",
    jawaban: [
      "-Aplikasi E-Faktur dengan QR Code",
      <br />,
      "-Aplikasi Monitoring Produksi",
      <br />,
      "-Aplikasi Digitalisasi Dokumen - Arsip",
      <br />,
      "-Aplikasi Restoran",
      <br />,
      "-Aplikasi Inventori",
      <br />,
      "-Aplikasi Inventori IT Beacukai",
      <br />,
      "-Aplikasi Warehouse",
      <br />,
      "-Aplikasi Penjualan Mobil (Umum dan Dealer)",
      <br />,
      "-Aplikasi Inventori Spare Part Kendaraan",
      <br />,
      "-Aplikasi Robotika - Mikro Controler",
      <br />,
      "-Aplikasi Akuntansi - Keuangan",
      <br />,
      "-Aplikasi Rumah Sakit",
      <br />,
      "-Aplikasi Service Kendaraan",
      <br />,
      "-Aplikasi Management Kursus",
      <br />,
      "-Aplikasi Karaoke",
      <br />,
      "-Aplikasi Pedagang Besar Farmasi (PBF)",
      <br />,
      "-Aplikasi Antrian (Rumah Sakit, Klinik, Bank, Kantor pelayanan Public lainnya)",
      <br />,
      "-Aplikasi Pembayaran SPP",
      <br />,
      "-Aplikasi Point Of Sale",
      <br />,
      "-Aplikasi lainnya sesuai kebutuhan anda",
      <br />,
    ]
  },
  {
    pertanyaan: "Apakah data pelanggan aman selama pengembangan?",
    jawaban: "Kami sangat menjaga kerahasiaan data pelanggan dengan menggunakan kebijakan privasi dan pengamanan standar industri.",
  },
  {
    pertanyaan: "Bagaimana cara Inspirasi Software memastikan kualitas aplikasi?",
    jawaban: "Kami menerapkan pengujian aplikasi secara menyeluruh, termasuk pengujian fungsionalitas, performa, dan keamanan, sebelum menyerahkan produk akhir kepada pelanggan.",
  },
]
