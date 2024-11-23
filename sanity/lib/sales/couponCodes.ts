export const COUPON_CODE = {
  BFRIDAY: "BFRIDAY",
  XMAS2021: "XMAS2021",
  NY2024: "NY2024",
  BFRIDAY2024: "BFRIDAY2024",
} as const;

export type CouponCode = [keyof typeof COUPON_CODE];
