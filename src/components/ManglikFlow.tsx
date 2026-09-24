"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import Result from "./Result";

interface ManglikFormData {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  second: string;
  ampm: string;
  country: string;
  city: string;
}

export interface ManglikResult {
  manglikStatus: string;
  moonSign: string;
  birthStar: string;
  marsCombination?: string;
  prediction?: string;
  remedies?: string;
}

const ManglikFlow = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isManglik, setIsManglik] = useState(false);
  const [resultData, setResultData] = useState<ManglikResult | null>(null);
  const [loadingText, setLoadingText] = useState(
    "Calculate Manglik Dosha"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleCalculate = async (formData: ManglikFormData) => {
    if (isCalculating) return;

    try {
      setIsCalculating(true);
      setShowResult(false);
      setErrorMsg("");

      setLoadingText("✨ Analyzing Birth Chart...");

      setTimeout(() => {
        setLoadingText("✨ Checking Mars Position...");
      }, 300);

      setTimeout(() => {
        setLoadingText("✨ Calculating Manglik Dosha...");
      }, 600);

      const response = await fetch("/api/manglik", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();


      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to calculate Manglik Dosha"
        );
      }

      if (data?.success && data?.data) {
        setResultData(data.data);
        const manglikStatusStr = data.data.manglikStatus?.toLowerCase() || "";
        const isManglikResult = manglikStatusStr === "manglik" || manglikStatusStr.includes("high manglik");
        setIsManglik(isManglikResult);
        setShowResult(true);
      } else {
        throw new Error(data?.message || "Invalid result from server");
      }

      setTimeout(() => {
        const resultSection =
          document.getElementById("resultSection");

        if (resultSection) {
          resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);
    } catch (error: any) {
      console.error("Manglik calculation error:", error);
      setErrorMsg(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsCalculating(false);
      setLoadingText("Calculate Manglik Dosha");
    }
  };

  return (
    <>
      {errorMsg && (
        <div style={{
          background: '#fee2e2', 
          color: '#b91c1c', 
          padding: '10px 20px', 
          textAlign: 'center', 
          fontWeight: '600',
          borderBottom: '1px solid #f87171'
        }}>
          {errorMsg}
        </div>
      )}
      <Hero
        onCalculate={handleCalculate}
        isCalculating={isCalculating}
        loadingText={loadingText}
      />

      <div className="elegant-section-breaker" style={{ position: "relative", zIndex: 0 }}>
        <svg
          width="100%"
          max-width="600"
          height="24"
          viewBox="0 0 600 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            maxWidth: "600px",
            display: "block",
            margin: "0 auto",
          }}
        >
          <line
            x1="0"
            y1="12"
            x2="260"
            y2="12"
            stroke="#be123c"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.4"
          />

          <circle
            cx="300"
            cy="12"
            r="6"
            fill="#d4af37"
          />

          <circle
            cx="280"
            cy="12"
            r="3"
            fill="#be123c"
            opacity="0.8"
          />

          <circle
            cx="320"
            cy="12"
            r="3"
            fill="#be123c"
            opacity="0.8"
          />

          <line
            x1="340"
            y1="12"
            x2="600"
            y2="12"
            stroke="#be123c"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.4"
          />
        </svg>
      </div>

      {showResult && (
        <Result
          isVisible={showResult}
          isManglik={isManglik}
          result={resultData}
        />
      )}
    </>
  );
};

export default ManglikFlow;