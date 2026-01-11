import React, { useState } from "react";
 // Adjust the import path

function Eye() {
  const [file, setFile] = useState(null);
  const [formattedPrediction, setFormattedPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFormattedPrediction(null); // reset previous prediction
  };

  const formatModel2Response = (model2Data) => {
    const { predicted_class, confidence, scores } = model2Data;

    const results = Object.entries(scores).map(([condition, prob]) => {
      let severity = "low";
      if (prob > 0.7) severity = "high";
      else if (prob > 0.3) severity = "medium";

      return {
        condition: condition.charAt(0).toUpperCase() + condition.slice(1),
        probability: Math.round(prob * 100),
        severity,
        description: `Probability of ${condition}: ${(prob * 100).toFixed(2)}%`,
      };
    });

    let overallRisk = "low";
    if (confidence > 0.7) overallRisk = "high";
    else if (confidence > 0.3) overallRisk = "medium";

    return {
      results,
      overallRisk,
      timestamp: new Date().toLocaleString(),
    };
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image first!");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8001/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Raw Model2 Response:", data);

      const formatted = formatModel2Response(data);
      setFormattedPrediction(formatted);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>OCT Image Classifier</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      <button
        onClick={handleUpload}
        disabled={loading}
        style={{ marginTop: "10px" }}
      >
        {loading ? "Classifying..." : "Upload & Predict"}
      </button>

      {formattedPrediction && (
        <div style={{ marginTop: "20px" }}>
          {/* <AnalysisResults
            results={formattedPrediction.results}
            overallRisk={formattedPrediction.overallRisk}
            timestamp={formattedPrediction.timestamp}
          /> */}
          {console.log(formattedPrediction.results)}
          {console.log(formattedPrediction.overallRisk)}
          {console.log(formattedPrediction.timestamp)}
        </div>
      )}
    </div>
  );
}

export default Eye;
