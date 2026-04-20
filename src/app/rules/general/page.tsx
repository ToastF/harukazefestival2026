import RulesTemplate from "@/components/RulesTemplate";

export default function GeneralRulesPage() {
  return (
    <RulesTemplate title="General Rules">
      <h2 className="fw-bold mb-2 rules-Do"> Do&apos;s </h2>
      <ol className="mb-0">
          <li>Siapkan uang saku secukupnya untuk kebutuhan selama acara.</li>
          <li>Jangan lupa membawa <i>tumbler</i> atau botol minum dan <i>powerbank</i> agar dapat mengikuti 
              kegiatan seharian, termasuk berburu <i>merchandise</i>.</li>
          <li>Perhatikan kebersihan dan kerapihan diri.</li>
          <li>Gunakan pakaian/ kostum yang sopan dan tidak mengandung unsur pornografi, SARA,
              atau kekerasan berlebihan.</li>
          <li>Selalu menjaga kebersihan di area acara.</li>
          <li>Bersikap sopan dan menjaga etika terhadap seluruh peserta maupun panitia.</li>
          <li>Jaga kesehatan pribadi dan gunakan masker apabila sedang kurang sehat.</li>
          <li>Dokumentasikan momen seru selama acara dan tandai akun Instagram Harukaze Festival (@harufest_soushin).</li>
          <li>Dan yang terpenting, jangan lupa untuk menikmati acara dan bersenang-senang!</li>
      </ol>
      <h2 className="fw-bold mb-2 mt-2 rules-Dont"> Dont&apos;s </h2>
      <ol className="mb-0">
          <li><em>DILARANG</em> merusak fasilitas venue.</li>
          <li><em>DILARANG</em> makan di dalam venue.</li>
          <li><em>DILARANG</em> membawa ataupun mengkonsumsi alkohol di area kampus.</li>
          <li><em>DILARANG</em> membawa ataupun menggunakan rokok/rokok elektrik di area kampus.</li>
          <li><em>DILARANG</em> keras melakukan tindakan tidak senonoh, pelecehan, atau perilaku tidak
              pantas terhadap pengunjung, <i>cosplayer</i>, atau panitia.</li>
          <li><em>DILARANG</em> menggunakan pakaian/kostum instansi dan sejenisnya.</li>
          <li><em>Tidak diperbolehkan</em> memotret cosplayer tanpa izin.</li>
          <li>Peserta dan pengunjung dilarang membawa properti/peralatan yang dapat mengganggu/
              menimbulkan ketidaknyamanan di lingkungan.</li>
          <li><i>Cosplayer</i> tidak diperbolehkan membawa senjata tajam asli. Properti harus aman dan
              terbuat dari bahan tidak berbahaya.</li>
      </ol>
    </RulesTemplate>
  );
}