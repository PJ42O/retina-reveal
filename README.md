# Retina Reveal 👁️🔬

> **AI-Powered Retinal Disease Detection & OCT Image Classification Platform**

Retina Reveal is a modern healthcare web application designed to assist in the early detection and classification of retinal pathologies. By combining an intuitive clinical dashboard with deep learning inference, the platform enables users and practitioners to upload retinal fundus images and Optical Coherence Tomography (OCT) scans to receive instant disease probability assessments, risk stratification, and visual breakdown.

---

## 🌟 Key Features

- **Automated Retinal Image Analysis**: Upload retinal fundus photographs and receive instant evaluation for common retinal conditions:
  - Diabetic Retinopathy
  - Age-Related Macular Degeneration (AMD)
  - Glaucoma
  - Healthy / Normal Retinal Scan Verification
- **OCT Scan Classification**: Dedicated OCT image classifier module with multi-class probability scoring, confidence metrics, and condition risk assessment.
- **Risk Stratification**: Dynamic severity grading (Low, Medium, High) with visual progress indicators and summary badges.
- **Interactive Dashboard**: Clean medical portal to manage uploads, review detailed diagnostic breakdowns, and monitor screening history.
- **Secure Authentication**: User registration and login powered by Firebase Authentication and Firestore.
- **Modern Medical UI**: Designed with React, Tailwind CSS, Lucide icons, and Radix UI (shadcn/ui) for a responsive and accessible user experience.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: JavaScript / TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Routing**: [React Router v6](https://reactrouter.com/)

### Backend & Services
- **Authentication & Database**: [Firebase](https://firebase.google.com/) (Auth, Firestore)
- **Model Inference**: REST API endpoints for deep learning classification models (`/predict`)

---

## 📁 Project Structure

```text
retina-reveal/
├── public/                 # Static assets and icons
├── src/
│   ├── components/         # Reusable UI & domain components
│   │   ├── ui/             # Radix / shadcn UI primitives (cards, buttons, dialogs, etc.)
│   │   ├── AnalysisResults.jsx # Diagnostic report & severity visualizer
│   │   ├── Navigation.jsx      # Top navigation header
│   │   └── PhotoUpload.jsx     # Drag-and-drop retinal image uploader
│   ├── pages/              # Application views & routes
│   │   ├── Index.jsx       # Landing page with feature highlights
│   │   ├── Dashboard.jsx   # Clinical analysis dashboard
│   │   ├── Eye.jsx         # Model-2 OCT classifier view
│   │   ├── OCTUploader.jsx # Dedicated OCT scan classifier page
│   │   ├── Login.jsx       # User login page
│   │   ├── Signup.jsx      # User registration page
│   │   └── NotFound.jsx    # 404 fallback page
│   ├── lib/                # Utility helpers (cn, tailwind merge)
│   ├── firebaseConfig.js   # Firebase initialization & SDK configuration
│   ├── App.jsx             # Route definitions & provider wrapping
│   └── main.jsx            # Application entry point
├── package.json            # Project dependencies and npm scripts
├── vite.config.ts          # Vite configuration
└── tailwind.config.ts      # Tailwind CSS theme configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm**, **yarn**, or **bun**
- (Optional) Python backend server running the classification model for live inference

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PJ42O/retina-reveal.git
   cd retina-reveal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port displayed in your terminal) in your browser.

---

## 🧪 Available Scripts

- `npm run dev` – Launch the local Vite development server.
- `npm run build` – Build optimized production bundle to the `dist/` folder.
- `npm run preview` – Locally preview production build.
- `npm run lint` – Run ESLint across source files.

---

## ⚠️ Medical Disclaimer

> **Disclaimer**: Retina Reveal is intended for academic, research, and educational screening demonstration purposes only. It is not an FDA-approved diagnostic tool and should not be used as a substitute for professional clinical medical advice, diagnosis, or treatment. Always consult a licensed ophthalmologist or healthcare professional for eye health evaluations.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) (or applicable open-source license).
