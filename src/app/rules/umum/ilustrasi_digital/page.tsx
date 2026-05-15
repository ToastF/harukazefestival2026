import RulesTemplate from "@/components/RulesTemplate";
import {LINKS} from "@/lib/Constants";
import ArtworkSubmissionCard from "@/components/ArtworkSubmissionCard";

export default function IlutrasiDigitalRulesPage() {
  return (
    <div>
      <RulesTemplate title="Ilutrasi Digital">
        <section>
            <h2 className="fw-bold mb-4 mt-4 rules-Subtitle">Peraturan Ilustrasi Digital</h2>
            <ol className="mb-0">
                <li>Setiap peserta hanya boleh mengunggah 1 poster.</li>
                <li>Tema dari perlombaan poster ini adalah &quot;輝く 春 へ&quot; atau &quot;Kagayaku Haru e&quot; (<i>Towards a
                    Shining Spring</i>) yang mencerminkan esensi dari momen yang bersinar dalam kehidupan.</li>
                <li>Karya bersifat digital/online.</li>
                <li>Ukuran karya <em>DIWAJIBKAN A3 (300 DPI, 3508 x 4961 px)</em>.</li>
                <li>Karya <em>DILARANG</em> mengandung unsur SARA, politik, pornografi, dan hal melanggar norma sosial.</li>
                <li><em>DIWAJIBKAN</em> menyertakan menyertakan salah satu karakter dari maskot Soushin (boleh lebih dari
                    satu). Referensi karakter dapat diakses di google drive yang disediakan: <a target="_blank" href="https://drive.google.com/drive/folders/1l2BfIXMVqyrdoCSvYTt97q08i9I6lJr3">Referensi Karakter Mascot Soushin</a></li>
                <li>Fitur wajah dan fisik maskot <em>tidak boleh diubah</em> (termasuk warna mata, warna rambut, tahi lalat, dan lain-lain).</li>
                <li>Kostum boleh dimodifikasi tetapi tetap sesuai karakter asli.</li>
                <li>Karya harus dirender dengan baik (arsir, shading, dll).</li>
                <li>Format pengumpulan yang dilakukan melalui <a target="_blank" href={LINKS.kumpul_illust}>Google Form</a>: PNG & PDF (Nama_Judul Poster).</li>
                <li><em>WAJIB</em> menyertakan speedpaint (maks 2 menit).</li>
                <li><em>DILARANG</em> menggunakan karya lama atau karya yang pernah dilombakan sebelumnya.</li>
                <li>Karya harus original (tanpa AI, plagiarisme, tracing).</li>
                <li>Panitia berhak mendiskualifikasi peserta jika dianggap melanggar aturan.</li>
                <li>Keputusan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>
                <li><em>WAJIB</em> follow Instagram Harukaze Festival (@harufest_soushin) dan Soushin UNTAR (@soushin_untar).</li>
                <li>
                  <em>WAJIB</em> mengunggah foto di Instagram dengan:
                  
                  <ul>
                    <li>
                      Tag <strong>@harufest_soushin</strong> dan menggunakan hashtag
                      <strong> #HarukazeFestival2026</strong> dan <strong>#IlustrasiHaruFest2026</strong>
                    </li>

                    <li>
                      Setiap peserta <em>DIWAJIBKAN</em> menyertakan deskripsi makna ilustrasi
                      (minimal 1 paragraf / 4 kalimat).
                    </li>

                    <li>
                      Menggunakan caption dengan format:
                      <div className="caption-box">
                        {"🎏 Harukaze Festival 2026 - Lomba Ilustrasi 🎏\n" +
                        "☀️ KAGAYAKU HARU E ☀️\n" +
                        "(Nama Peserta)\n\n" +
                        "(Judul Ilustrasi)\n" +
                        "(Penjelasan Ilustrasi)\n" +
                        "Minna de kagayaku~ ✨\n" +
                        "#HarukazeFestival2026 #IlustrasiHaruFest2026"}
                      </div>
                    </li>
                  </ul>
                </li>
            </ol>
        </section>
        <section>
            <h2 className="fw-bold mb-4 mt-4 rules-Subtitle">Kriteria Penilaian</h2>
            <ol className="mb-0">
              <li>Elemen visual yang tersusun secara menarik, rapi, dan mudah dipahami.</li>
              <li>Keunikan ide serta orisinalitas konsep yang ditampilkan.</li>
              <li>Tingkat kesesuaian karya dengan tema yang ditentukan.</li>
              <li>Kemampuan ilustrasi dalam menarik perhatian dan minat audiens.</li>
              <li>Komposisi gambar yang seimbang, harmonis, dan enak dipandang.</li>
              <li>Kejelasan dan efektivitas dalam menyampaikan pesan.</li>
            </ol>
        </section>
        <ArtworkSubmissionCard
          title="Pengumpulan Karya Illustrasi Digital"
          description="Unggah hasil karya Illustrasi Digital melalui Google Form berikut."
          qrImage="/images/qr_illust.png"
          formUrl={LINKS.kumpul_illust}
        />
      </RulesTemplate>
    </div>
  );
}