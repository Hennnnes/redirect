export const REDIRECT_BASE_URL = "https://hennes.me/";

export const STATIC_REDIRECTS = new Map([
  ["/redirect/home", REDIRECT_BASE_URL],
  ["/redirect/blog", "https://blog.hennes.me"],
]);

export const DYNAMIC_REDIRECTS = new Map([
  ["/redirect/path/:path", `${REDIRECT_BASE_URL}`],
]);
