import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to')?.replace(/\+/g, ' ') || 'Tamu Undangan';

function App() {
  return (
    <div className="App">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Undangan Pernikahan
      </motion.h1>
<audio controls autoPlay loop style={{ width: "100%" }}>
  <source src="/uhayyikum.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
          
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Yth. {namaTamu}
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        Dengan hormat, kami mengundang Anda ke acara pernikahan Fulan & Fulanah
      </motion.p>
      <motion.audio controls autoPlay loop style={{ marginTop: '1rem' }}>
        <source src="music.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung pemutar audio.
      </motion.audio>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ marginTop: '2rem' }}>
        <p><strong>Waktu:</strong> Sabtu, 2 Agustus 2025</p>
        <p><strong>Lokasi:</strong> Griya Sakinah, Bandung</p>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} style={{ marginTop: '2rem' }}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfRSVPformContoh/viewform?embedded=true" width="100%" height="500" frameBorder="0">Memuat…</iframe>
      </motion.section>
    </div>
  );
}

export default App;
