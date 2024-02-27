"use client";

import { useEffect, useState } from "react";

function HomePage() {
  const [healthCheck, setHealthCheck] = useState("");

  useEffect(() => {
    fetch("http://localhost:5050/health-check")
      .then((response) => response.text())
      .then((data) => setHealthCheck(data));
  });

  return <main>홈페이지 입니다~~~~ healthCheck는 {healthCheck}</main>;
}

export default HomePage;
