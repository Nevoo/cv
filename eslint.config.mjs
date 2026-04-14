import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...(Array.isArray(nextCoreWebVitals) ? nextCoreWebVitals : [nextCoreWebVitals]),
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default config;
