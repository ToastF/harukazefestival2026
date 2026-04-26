import RulesTemplate from "@/components/RulesTemplate";

export default function DanceCoverRulesPage() {
  return (
    <div>
      <RulesTemplate title="Dance Cover">
        <section>
            <h2 className="fw-bold mb-2 rules-Subtitle">Peraturan Coswalk</h2>
          <ol className="mb-0">
              <li>Lomba ini terbuka khusus untuk siswa/i tingkat SMA-SMK yang masih aktif pada saat pelaksanaan lomba.</li>
              <li>Peserta boleh berupa individu maupun grup.</li>
              <li>Seluruh peserta <em>WAJIB</em> hadir saat <i>Technical Meeting</i> dan melakukan <i>rehearsal</i> sesuai jadwal.</li>
              <li>Lagu yang dibawakan <em>WAJIB</em> berbahasa Jepang.</li>
              <li>Durasi penampilan adalah <em>minimal 2 menit</em> dan <em>maksimal 5 menit</em>.</li>
              <li><em>DILARANG</em> menggunakan lagu dengan lirik yang mengandung kata kasar, kekerasan, atau makna seksual.</li>
              <li>Gerakan (<i>choreography</i>) dan kostum <em>DILARANG</em> mengandung unsur sensual, provokatif, SARA, atau politik.</li>
              <li>Kostum <em>WAJIB</em> sopan dan sesuai dengan norma yang berlaku di lingkungan universitas.</li>
              <li><em>DILARANG</em> menggunakan properti berbahaya seperti senjata tajam, api, cairan licin, atau bahan kimia berbahaya.</li>
              <li>Kebersihan panggung setelah tampil adalah tanggung jawab peserta.</li>
              <li>Bersedia mengikuti seluruh rangkaian proses audisi hingga akhir serta hadir tepat waktu sesuai jadwal.</li>
              <li><em>WAJIB</em> follow Instagram Harukaze Festival (@harufest_soushin) dan Soushin UNTAR (@soushin_untar).</li>
          </ol>
        </section>
        <section>
            <h2 className="fw-bold mb-4 rules-Subtitle">Kriteria Penilaian</h2>
            <h2 className="fw-bold mb-2 rules-Subtitle"> Individu </h2>
            <ol className="mb-0">
              <li>Penekanan Gerakan</li>
              <li>Ekspresi</li>
              <li>Kesesuaian Gerakan dan Irama</li>
              <li>Kostum</li>
              <li>Penguasaan Panggung</li>
              <li className="mb-2">Konsistensi Energi</li>
            </ol>
            <h2 className="fw-bold mb-2 rules-Subtitle"> Kelompok </h2>
            <ol className="mb-0">
              <li>Penekanan Gerakan</li>
              <li>Ekspresi</li>
              <li>Kesesuaian Gerakan dan Irama</li>
              <li>Kostum</li>
              <li>Penguasaan Panggung</li>
              <li>Konsistensi Energi</li>
              <li>Kekompakan</li>
            </ol>         
        </section>
      </RulesTemplate>
    </div>
  );
}