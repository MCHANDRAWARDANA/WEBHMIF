import { useLocation } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./ScrollReveal.css";

export default function ScrollMotion({ ready }) {
  const { pathname } = useLocation();
  useScrollReveal({ enabled: ready, routeKey: pathname });
  return null;
}
