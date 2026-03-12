export const SWIGGY_BASE_URL = "https://www.swiggy.com/dapi";

export const PROXY_BASE_URL = "https://corsproxy.io/?";

export const buildProxyUrl = (targetUrl) =>
  `${PROXY_BASE_URL}${encodeURIComponent(targetUrl)}`;
