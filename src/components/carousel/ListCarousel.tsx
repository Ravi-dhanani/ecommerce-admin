import React from "react";
import { useCarouselList } from "../services/query/ApiHandlerQuery";

export default function ListCarousel() {
  const lstCarousel = useCarouselList();
  console.log(lstCarousel);
  return <div>ListCarousel</div>;
}
