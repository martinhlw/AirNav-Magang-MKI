import React from 'react';
import './Dashboard.css';
import map from '../assets/map.png';
import diagrambulat from '../assets/diagrambulat.png';
import diagramgaris from '../assets/diagramgaris.png';

function Dashboard() {
  // Handle button clicks (for example purposes, you can customize this)
  const handleClick = (label) => {
    alert(`Button ${label} clicked`);
  };

  return (
    <div className="dashboard">
      {/* Navigasi */}
      <div className="navigation">
        <div className="nav-item" onClick={() => handleClick('Pengelolaan Organisasi')}><span>Pengelolaan Organisasi</span></div>
        <div className="nav-item" onClick={() => handleClick('Administrasi Personal')}><span>Administrasi Personal</span></div>
        <div className="nav-item" onClick={() => handleClick('Penggajian')}><span>Penggajian</span></div>
        <div className="nav-item" onClick={() => handleClick('Layanan Mandiri')}><span>Layanan Mandiri</span></div>
        <div className="nav-item" onClick={() => handleClick('Kehadiran')}><span>Kehadiran</span></div>
        <div className="nav-item" onClick={() => handleClick('Perjalanan Dinas')}><span>Perjalanan Dinas</span></div>
        <div className="nav-item" onClick={() => handleClick('Pendidikan dan Pelatihan')}><span>Pendidikan dan Pelatihan</span></div>
        <div className="nav-item" onClick={() => handleClick('Informasi dan Komunikasi')}><span>Informasi dan Komunikasi</span></div>
        <div className="nav-item" onClick={() => handleClick('Korespondensi dan Kearsipan')}><span>Korespondensi dan Kearsipan</span></div>
        <div className="nav-item" onClick={() => handleClick('Dashboard')}><span>Dashboard</span></div>
      </div>

      {/* Card Section */}
      <div className="card-container">
        <div className="card">
          <div className="title">Peta Demografi</div>
          <img src={map} alt="Peta Demografi" />
        </div>
        <div className="card">
          <div className="title">Absensi</div>
          <img src={diagrambulat} alt="Absensi" />
        </div>
        <div className="card">
          <div className="title">Perjalanan Dinas</div>
          <img src={diagramgaris} alt="Perjalanan Dinas" />
        </div>
      </div>

      {/* Tabel */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Sertifikat</th>
              <th>Tgl Pengajuan</th>
              <th>Masa Berlaku</th>
              <th>Jumlah Peserta</th>
              <th>Kategori/Divisi</th>
              <th>Ongoing</th>
              <th>Completed</th>
              <th>Request</th>
              <th>Canceled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sertifikat ISO</td>
              <td>07/05/2016</td>
              <td>07/05/2016</td>
              <td>20</td>
              <td>Keuangan</td>
              <td>40%</td>
              <td>74%</td>
              <td>32%</td>
              <td>92%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sertifikat ISO</td>
              <td>07/05/2016</td>
              <td>07/05/2016</td>
              <td>20</td>
              <td>Keuangan</td>
              <td>40%</td>
              <td>74%</td>
              <td>32%</td>
              <td>92%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sertifikat HMIF</td>
              <td>07/05/2016</td>
              <td>07/05/2016</td>
              <td>20</td>
              <td>Keuangan</td>
              <td>40%</td>
              <td>74%</td>
              <td>32%</td>
              <td>92%</td>
            </tr>
            {/* Tambahkan baris lainnya sesuai kebutuhan */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
