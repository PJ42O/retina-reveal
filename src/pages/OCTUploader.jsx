import React, { useState } from "react";

function OCTUploader() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPrediction(null); // reset previous prediction
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image first!");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData, // your image file in FormData
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      setPrediction(data.result);
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
      <button onClick={handleUpload} disabled={loading} style={{ marginTop: "10px" }}>
        {loading ? "Classifying..." : "Upload & Predict"}
      </button>

      {prediction && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Prediction:</h3>
          <p>
            <strong>Class:</strong> {prediction.predicted_class}
          </p>
          <p>
            <strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(2)}%
          </p>
          <h4>All Scores:</h4>
          <ul>
            {Object.entries(prediction.scores).map(([cls, score]) => (
              <li key={cls}>
                {cls}: {(score * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OCTUploader;
