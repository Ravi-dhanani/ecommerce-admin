import React from "react";
import MainLayout from "../components/common/MainLayout";
import LandingPage from "../components/home/LandingPage";

export default function landingPage() {
  return (
    <div>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </div>
  );
}
