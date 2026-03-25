"use client";

import { useEffect, useRef, useState } from "react";

// Lightweight QR code generator (no external dependency)
// Based on QR Code specification - generates SVG path data
function generateQR(text: string): boolean[][] {
  // We'll use a canvas-free approach with the QR encoding logic
  // For reliability, we use the established qrcode-generator algorithm pattern
  
  // Since we want zero dependencies, we'll encode the QR data URI approach
  // Actually, let's use a minimal inline QR generator
  
  return [];
}

export default function QRDisplay() {
  const [mode, setMode] = useState<"online" | "offline">("online");
  const onlineCanvasRef = useRef<HTMLCanvasElement>(null);
  const offlineCanvasRef = useRef<HTMLCanvasElement>(null);
  const [qrLoaded, setQrLoaded] = useState(false);

  const LANDING_URL = "https://jdm-advisory.vercel.app/preview-card-jd7x";
  
  const VCARD_DATA = `BEGIN:VCARD
VERSION:3.0
N:Druckenmüller;Jens;;;
FN:Jens Druckenmüller
ORG:JDM Advisory
TITLE:Managing Director
EMAIL;TYPE=WORK:jens.druckenmueller@jdm-advisory.com
URL:https://jdm-advisory.com
END:VCARD`;

  useEffect(() => {
    // Load QR library dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js";
    script.onload = () => {
      setQrLoaded(true);
      renderQRCodes();
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (qrLoaded) renderQRCodes();
  }, [qrLoaded, mode]);

  function renderQRCodes() {
    const w = window as any;
    if (!w.qrcode) return;

    // Online QR
    if (onlineCanvasRef.current) {
      const qr = w.qrcode(0, "M");
      qr.addData(LANDING_URL);
      qr.make();
      drawQR(qr, onlineCanvasRef.current, "#C9A84C");
    }

    // Offline QR
    if (offlineCanvasRef.current) {
      const qr = w.qrcode(0, "M");
      qr.addData(VCARD_DATA);
      qr.make();
      drawQR(qr, offlineCanvasRef.current, "#C9A84C");
    }
  }

  function drawQR(qr: any, canvas: HTMLCanvasElement, color: string) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const count = qr.getModuleCount();
    const cellSize = Math.floor(280 / count);
    const size = cellSize * count;
    const padding = 20;
    
    canvas.width = size + padding * 2;
    canvas.height = size + padding * 2;
    canvas.style.width = "280px";
    canvas.style.height = "280px";
    
    // Background
    ctx.fillStyle = "#0a0a0f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // QR modules with rounded corners
    for (let row = 0; row < count; row++) {
      for (let col = 0; col < count; col++) {
        if (qr.isDark(row, col)) {
          ctx.fillStyle = color;
          const x = padding + col * cellSize;
          const y = padding + row * cellSize;
          const r = cellSize * 0.15;
          ctx.beginPath();
          ctx.roundRect(x, y, cellSize - 0.5, cellSize - 0.5, r);
          ctx.fill();
        }
      }
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0f;
          color: #fff;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-user-select: none;
          user-select: none;
        }

        .qr-page {
          width: 100%; max-width: 420px; padding: 20px;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
          animation: fadeIn 0.6s ease-out both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .logo-small {
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 4px;
        }
        .logo-small .jdm {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 700; color: #C9A84C; letter-spacing: 2px;
        }
        .logo-small .adv {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 400; color: #666; letter-spacing: 2px;
        }

        .toggle-container {
          display: flex; background: #12121a; border-radius: 50px;
          border: 1px solid rgba(201,168,76,0.15); overflow: hidden;
          position: relative;
        }
        .toggle-btn {
          padding: 12px 24px; font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 400; letter-spacing: 0.5px;
          border: none; background: transparent; color: #666;
          cursor: pointer; transition: all 0.3s ease; position: relative; z-index: 1;
        }
        .toggle-btn.active {
          color: #0a0a0f; font-weight: 500;
        }
        .toggle-slider {
          position: absolute; top: 3px; bottom: 3px; border-radius: 50px;
          background: linear-gradient(135deg, #C9A84C 0%, #a08530 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        .toggle-slider.online { left: 3px; right: 50%; }
        .toggle-slider.offline { left: 50%; right: 3px; }

        .qr-frame {
          background: linear-gradient(145deg, #12121a 0%, #1a1a2e 50%, #12121a 100%);
          border: 1px solid rgba(201,168,76,0.15); border-radius: 24px;
          padding: 32px; position: relative; overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 80px rgba(201,168,76,0.05);
        }
        .qr-frame::before {
          content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent 40%, rgba(201,168,76,0.03) 45%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0.03) 55%, transparent 60%);
          animation: shine 4s ease-in-out infinite;
        }
        @keyframes shine {
          0%, 100% { transform: translateX(-30%) translateY(-30%) rotate(45deg); }
          50% { transform: translateX(30%) translateY(30%) rotate(45deg); }
        }

        .qr-canvas-wrapper {
          position: relative; z-index: 1;
          border-radius: 12px; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        canvas { display: block; border-radius: 12px; }

        .qr-label {
          text-align: center; margin-top: 4px; position: relative; z-index: 1;
        }
        .qr-label .icon { font-size: 18px; margin-bottom: 4px; }
        .qr-label .text {
          font-size: 12px; font-weight: 300; color: #888; letter-spacing: 1px;
        }
        .qr-label .subtext {
          font-size: 11px; font-weight: 300; color: #555; margin-top: 2px;
        }

        .instructions {
          text-align: center; padding: 0 20px;
        }
        .instructions p {
          font-size: 12px; font-weight: 300; color: #555; line-height: 1.6;
        }

        .qr-view { display: none; flex-direction: column; align-items: center; gap: 16px; }
        .qr-view.active { display: flex; }
      `}</style>

      <div className="qr-page">
        {/* Logo */}
        <div className="logo-small">
          <span className="jdm">JDM</span>
          <span className="adv">Advisory</span>
        </div>

        {/* Toggle */}
        <div className="toggle-container">
          <div className={`toggle-slider ${mode}`} />
          <button
            className={`toggle-btn ${mode === "online" ? "active" : ""}`}
            onClick={() => setMode("online")}
          >
            🌐 Full Experience
          </button>
          <button
            className={`toggle-btn ${mode === "offline" ? "active" : ""}`}
            onClick={() => setMode("offline")}
          >
            📱 Offline
          </button>
        </div>

        {/* Online QR */}
        <div className={`qr-view ${mode === "online" ? "active" : ""}`}>
          <div className="qr-frame">
            <div className="qr-canvas-wrapper">
              <canvas ref={onlineCanvasRef} />
            </div>
          </div>
          <div className="qr-label">
            <div className="icon">✨</div>
            <div className="text">Animierte Visitenkarte</div>
            <div className="subtext">Empfänger braucht Internet</div>
          </div>
        </div>

        {/* Offline QR */}
        <div className={`qr-view ${mode === "offline" ? "active" : ""}`}>
          <div className="qr-frame">
            <div className="qr-canvas-wrapper">
              <canvas ref={offlineCanvasRef} />
            </div>
          </div>
          <div className="qr-label">
            <div className="icon">⚡</div>
            <div className="text">Kontakt direkt speichern</div>
            <div className="subtext">Funktioniert ohne Internet</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <p>Lass dein Gegenüber den QR-Code mit der Kamera scannen</p>
        </div>
      </div>
    </>
  );
}
