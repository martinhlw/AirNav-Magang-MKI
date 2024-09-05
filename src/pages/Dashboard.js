import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="top-nav">
        <h1>Home</h1>
        <div className="user-info">Administrator</div>
      </nav>
      
      <div className="quick-access">
        <button>Pengelolaan Organisasi</button>
        <button>Administrasi Personal</button>
        {/* Tambahkan semua tombol lainnya */}
      </div>

      <div className="dashboard-content">
        <div className="map-section">Peta Demografi</div>
        <div className="absence-section">Absensi</div>
        <div className="chart-section">Perjalanan Dinas</div>
      </div>

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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Tambahkan data di sini */}
            <tr>
              <td>1</td>
              <td>Sertifikat ISO</td>
              <td>07/05/2016</td>
              <td>07/05/2016</td>
              <td>20</td>
              <td>Keuangan</td>
              <td>
                <div className="status ongoing">Ongoing</div>
              </td>
            </tr>
            {/* Tambahkan row lainnya */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
