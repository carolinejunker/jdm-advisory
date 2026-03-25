"use client";

import { useEffect } from "react";

export default function BusinessCard() {
  useEffect(() => {
    // Generate particles
    const container = document.getElementById("particles");
    if (!container || container.children.length > 0) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 4 + "s";
      p.style.animationDuration = 3 + Math.random() * 3 + "s";
      const size = 1 + Math.random() * 2 + "px";
      p.style.width = size;
      p.style.height = size;
      container.appendChild(p);
    }
  }, []);

  function saveContact() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Druckenmüller;Jens;;;
FN:Jens Druckenmüller
ORG:JDM Advisory
TITLE:Managing Director
EMAIL;TYPE=WORK:jens.druckenmueller@jdm-advisory.com
URL:https://jdm-advisory.com
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Jens_Druckenmueller.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Visual feedback
    const btn = document.getElementById("save-btn");
    if (btn) {
      btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Gespeichert!`;
      btn.style.background = "linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)";
      setTimeout(() => {
        btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> Kontakt speichern`;
        btn.style.background = "linear-gradient(135deg, #C9A84C 0%, #a08530 100%)";
      }, 2000);
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0f;
          color: #fff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
        .particle {
          position: absolute; width: 2px; height: 2px; background: #C9A84C;
          border-radius: 50%; opacity: 0; animation: particleFloat 4s ease-in-out infinite;
        }
        @keyframes particleFloat {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          20% { opacity: 0.6; }
          80% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-120px) scale(1); }
        }

        .card-container {
          position: relative; z-index: 1; width: 100%; max-width: 420px; padding: 20px;
          animation: cardFadeIn 1s ease-out 0.3s both;
        }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card {
          background: linear-gradient(145deg, #12121a 0%, #1a1a2e 50%, #12121a 100%);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 24px; padding: 48px 32px 40px; text-align: center;
          position: relative; overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 80px rgba(201,168,76,0.05);
        }
        .card::before {
          content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent 40%, rgba(201,168,76,0.03) 45%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0.03) 55%, transparent 60%);
          animation: shine 4s ease-in-out infinite;
        }
        @keyframes shine {
          0%, 100% { transform: translateX(-30%) translateY(-30%) rotate(45deg); }
          50% { transform: translateX(30%) translateY(30%) rotate(45deg); }
        }

        .photo-wrapper {
          width: 140px; height: 140px; margin: 0 auto 28px; position: relative;
          animation: photoReveal 1.2s ease-out 0.8s both;
        }
        @keyframes photoReveal {
          from { opacity: 0; transform: scale(0.8); filter: blur(10px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .photo-ring {
          position: absolute; inset: -3px; border-radius: 50%;
          background: conic-gradient(from 0deg, #C9A84C, #e8d48b, #C9A84C, #a08530, #C9A84C);
          animation: ringRotate 6s linear infinite;
        }
        @keyframes ringRotate { to { transform: rotate(360deg); } }
        .photo-inner {
          position: absolute; inset: 3px; border-radius: 50%; background: #0a0a0f;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .photo-inner img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
        .photo-wrapper::after {
          content: ''; position: absolute; inset: -8px; border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.2); animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0; }
        }

        .logo { margin-bottom: 24px; animation: logoReveal 1s ease-out 1.2s both; }
        @keyframes logoReveal {
          from { opacity: 0; transform: translateY(10px); letter-spacing: 8px; }
          to { opacity: 1; transform: translateY(0); letter-spacing: 3px; }
        }
        .logo-jdm {
          font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 700;
          color: #C9A84C; letter-spacing: 3px;
        }
        .logo-advisory {
          font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 400;
          color: #888; letter-spacing: 3px; margin-left: 8px;
        }

        .divider {
          width: 60px; height: 1px; background: linear-gradient(90deg, transparent, #C9A84C, transparent);
          margin: 0 auto 24px; animation: dividerGrow 0.8s ease-out 1.5s both;
        }
        @keyframes dividerGrow { from { width: 0; opacity: 0; } to { width: 60px; opacity: 1; } }

        .name {
          font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600;
          color: #fff; margin-bottom: 6px; animation: textReveal 0.8s ease-out 1.7s both;
        }
        .title-text {
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 300;
          color: #999; letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 32px; animation: textReveal 0.8s ease-out 1.9s both;
        }
        @keyframes textReveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-info { margin-bottom: 32px; animation: textReveal 0.8s ease-out 2.1s both; }
        .contact-item {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 8px 0; color: #bbb; font-size: 14px; font-weight: 300;
          text-decoration: none; transition: color 0.3s ease;
        }
        a.contact-item:hover { color: #C9A84C; }
        .contact-icon { width: 16px; height: 16px; opacity: 0.5; }

        .save-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 36px; background: linear-gradient(135deg, #C9A84C 0%, #a08530 100%);
          color: #0a0a0f; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase; border: none; border-radius: 50px;
          cursor: pointer; transition: all 0.3s ease; animation: btnReveal 0.8s ease-out 2.4s both;
          position: relative; overflow: hidden;
        }
        .save-btn::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .save-btn:hover::before { left: 100%; }
        .save-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,168,76,0.3); }
        .save-btn:active { transform: translateY(0); }
        @keyframes btnReveal {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .btn-icon { width: 18px; height: 18px; }

        .website-link { margin-top: 20px; animation: textReveal 0.8s ease-out 2.6s both; }
        .website-link a {
          color: #666; font-size: 12px; font-weight: 300; letter-spacing: 1px;
          text-decoration: none; transition: color 0.3s ease;
        }
        .website-link a:hover { color: #C9A84C; }
      `}</style>

      <div className="particles" id="particles" />

      <div className="card-container">
        <div className="card">
          <div className="photo-wrapper">
            <div className="photo-ring" />
            <div className="photo-inner">
              <img src="/jens.jpg" alt="Jens Druckenmüller" />
            </div>
          </div>

          <div className="logo">
            <span className="logo-jdm">JDM</span>
            <span className="logo-advisory">Advisory</span>
          </div>

          <div className="divider" />

          <h1 className="name">Jens Druckenmüller</h1>
          <p className="title-text">Managing Director</p>

          <div className="contact-info">
            <a href="mailto:jens.druckenmueller@jdm-advisory.com" className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jens.druckenmueller@jdm-advisory.com
            </a>
          </div>

          <button className="save-btn" id="save-btn" onClick={saveContact}>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Kontakt speichern
          </button>

          <div className="website-link">
            <a href="https://jdm-advisory.com" target="_blank" rel="noopener noreferrer">
              jdm-advisory.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
