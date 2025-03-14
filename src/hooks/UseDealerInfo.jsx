import { useEffect, useState } from "react";
import { regions as staticRegions, districts as staticDistricts, comunas as staticDealers } from "../assets/data/FullDealers"; 

// Hook para obtener las regiones
function useRegions() {
  const [regions, setRegions] = useState(staticRegions);

  useEffect(() => {
    fetch("https://api.example.com/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data))
      .catch(() => console.log("Using fallback JSON data"));
  }, []);

  return regions;
}

// Hook para obtener los distritos
function useDistricts() {
  const [districts, setDistricts] = useState(staticDistricts);

  useEffect(() => {
    fetch("https://api.example.com/districts")
      .then((res) => res.json())
      .then((data) => setDistricts(data))
      .catch(() => console.log("Using fallback JSON data"));
  }, []);

  return districts;
}

// Hook para obtener los concesionarios
function useDealers() {
  const [dealers, setDealers] = useState(staticDealers);

  useEffect(() => {
    fetch("https://api.example.com/comunas")
      .then((res) => res.json())
      .then((data) => setDealers(data))
      .catch(() => console.log("Using fallback JSON data"));
  }, []);

  return dealers;
}
export { useRegions, useDistricts, useDealers };