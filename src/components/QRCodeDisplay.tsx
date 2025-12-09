import { useState } from "react";
import "../styles/QRCodeDisplay.css";

interface QRCodeDisplayProps {
  url: string;
}

export default function QRCodeDisplay({ url }: QRCodeDisplayProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Gebruik Google Charts API voor QR code generatie (gratis, geen library nodig)
  const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${encodeURIComponent(url)}`;
  const qrCodeUrlLarge = `https://chart.googleapis.com/chart?cht=qr&chs=800x800&chl=${encodeURIComponent(url)}`;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isFullscreen) {
    return (
      <div className="qr-fullscreen" onClick={toggleFullscreen}>
        <div className="qr-fullscreen-content">
          <h2>Scan voor reflectievragenlijst</h2>
          <img src={qrCodeUrlLarge} alt="QR Code" className="qr-image-large" />
          <p className="qr-hint">Klik om te sluiten</p>
        </div>
      </div>
    );
  }

  return (
    <div className="qr-display">
      <h3>Reflectie QR-code</h3>
      <img src={qrCodeUrl} alt="QR Code" className="qr-image" onClick={toggleFullscreen} />
      <p className="qr-instruction">Klik voor fullscreen</p>
    </div>
  );
}
