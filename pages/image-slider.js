import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658af083c1dd7e6584dfafb5.png",
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658af083096557967ca56d3d.png",
  "https://storage.googleapis.com/msgsndr/8wzvpSrP8kH1ViALeGlE/media/65f708138fbeae29834c8016.png",
  "https://storage.googleapis.com/msgsndr/8wzvpSrP8kH1ViALeGlE/media/65f708134d78693859bc64d2.png",
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658af08206cdd75b80cda518.png",
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658af08206cdd71b02cda517.png",
  "https://storage.googleapis.com/msgsndr/8wzvpSrP8kH1ViALeGlE/media/65f708134d78695c6cbc64d3.png",
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658cf9aa888153309b3c7eb8.png",
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658cf9aa25e0d6abdda0f78f.png",
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658cf9aa888153a9de3c7eb9.png",
  "https://storage.googleapis.com/msgsndr/mwngrKYqDAAVfixyKkt5/media/658cf9aa25e0d66d5da0f790.png",
];

export default function ImageSliderPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="embed-slider" aria-label="Burrow Base image slider">
      {slides.map((src, index) => (
        <div
          className={`embed-slide${index === activeIndex ? " is-active" : ""}`}
          key={src}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            style={{
              objectFit: "cover",
              filter: "brightness(1.14) saturate(1.06) contrast(1.04)",
            }}
          />
        </div>
      ))}
      <div className="embed-overlay" aria-hidden="true" />

      <style jsx>{`
        :global(html, body) {
          margin: 0;
          padding: 0;
          background: #0b0b0d;
          overflow: hidden;
        }

        .embed-slider {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #0b0b0d;
        }

        .embed-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .embed-slide.is-active {
          opacity: 1;
        }

        .embed-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            70% 65% at 50% 45%,
            rgba(11, 11, 13, 0) 25%,
            rgba(11, 11, 13, 0.24) 100%
          );
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

ImageSliderPage.getLayout = (page) => page;
