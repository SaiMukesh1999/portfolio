import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Updated_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              // renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import pdf from "../../Assets/../Assets/Updated_resume.pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// // Set up PDF.js worker
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// const Resume = () => {
//   const pdfUrl = pdf; // Put your file in public/ folder
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "downloaded-sample.pdf";
//     link.click();
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>PDF Page Preview</h2>
//       <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={1} width={600} />
//       </Document>
//       <button
//         onClick={handleDownload}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           fontSize: "16px",
//           cursor: "pointer",
//         }}
//       >
//         Download PDF
//       </button>
//     </div>
//   );
// };

// export default Resume;
