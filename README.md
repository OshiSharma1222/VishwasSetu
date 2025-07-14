# VishwasSetu

VishwasSetu is a web application that enables secure analytics and collaboration on encrypted retail data using confidential computing. It allows retailers to upload customer data, which is encrypted and processed inside Trusted Execution Environments (TEEs), ensuring that raw data is never exposed to the OS, server, or cloud provider. Only anonymized or aggregated results are returned, maintaining full compliance with privacy regulations like GDPR and CCPA.

## Key Features

- **Confidential Computing Platform:** Data is processed inside secure hardware enclaves (TEEs).
- **End-to-End Encryption:** Customer data is encrypted before leaving the retailer’s infrastructure.
- **Zero Exposure:** Raw data is never visible outside the enclave.
- **Anonymized Insights:** Only aggregated, anonymized results are returned.
- **Secure Collaboration:** Retailers can share insights without exposing sensitive data.
- **Compliance:** Designed for GDPR, CCPA, and other privacy regulations.

## Main Sections

- **Home:** Overview of the platform and its benefits.
- **How It Works:** Step-by-step flow of secure data processing.
- **Benefits:** Advantages for both retailers and customers.
- **Upload Portal:** Retailers can securely upload CSV data for analysis.
- **Processing & Insights:** Data is processed securely, and insights are displayed.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **UI:** Tailwind CSS, shadcn/ui, framer-motion, lucide-react
- **Routing:** react-router-dom
- **State/Queries:** @tanstack/react-query

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Folder Structure

- `src/components/` – UI components (Hero, Flow, Benefits, Upload, Footer, etc.)
- `src/pages/` – Main pages (Index, Processing, Insights, NotFound)
- `src/hooks/` – Custom React hooks
- `src/lib/` – Utility functions
- `public/` – Static assets

## License

Specify your license here. 