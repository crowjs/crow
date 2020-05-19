import Application  from "../libs/application.ts";


new Application(
  {
    proxy: false,
    subdomainOffset: 2,
    proxyIpHeader: "",
    maxIpsCount: 2,
    env: "",
    keys: ["Helow"]
  }
);