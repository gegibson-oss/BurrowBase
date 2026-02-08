import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function FeatureSteps({
  features,
  className = "",
  title = "Automated Review Features",
  description = "",
  actions = null,
  autoPlayInterval = 4500,
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!features.length) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
        return;
      }

      setCurrentFeature((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, 100);

    return () => window.clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  if (!features.length) {
    return null;
  }

  return (
    <section className={`feature-steps ${className}`.trim()}>
      <div className="feature-steps-head">
        <h2>{title}</h2>
        {description ? (
          <p className="feature-steps-description">{description}</p>
        ) : null}
        {actions ? <div className="feature-steps-actions">{actions}</div> : null}
      </div>

      <div className="feature-steps-grid">
        <div className="feature-steps-list" aria-label="Feature list">
          {features.map((feature, index) => {
            const isActive = index === currentFeature;
            const isPassed = index < currentFeature;

            return (
              <button
                key={feature.step}
                type="button"
                className={`feature-step-item${isActive ? " is-active" : ""}`}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
                aria-pressed={isActive}
              >
                <span className="feature-step-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="feature-step-copy">
                  <span className="feature-step-title">{feature.title || feature.step}</span>
                  <span className="feature-step-content-wrap">
                    <span className="feature-step-content">{feature.content}</span>
                  </span>
                </span>
                <span className="feature-step-progress" aria-hidden="true">
                  <span
                    className="feature-step-progress-fill"
                    style={{
                      width: isActive ? `${progress}%` : isPassed ? "100%" : "0%",
                    }}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <div className="feature-steps-media" aria-live="polite">
          <AnimatePresence mode="wait">
            {features.map(
              (feature, index) =>
                index === currentFeature && (
                  <motion.figure
                    key={feature.step}
                    className="feature-step-figure"
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="feature-step-image-wrap">
                      <Image
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="feature-step-image"
                        fill
                        sizes="(max-width: 1100px) 100vw, 45vw"
                        priority={false}
                      />
                    </div>
                    <figcaption>{feature.imageCaption}</figcaption>
                  </motion.figure>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
