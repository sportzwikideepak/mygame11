const base_url_v2 = process.env.NEXT_PUBLIC_ENTITY_BASE_URL_V2;
const base_url_v4 = process.env.NEXT_PUBLIC_ENTITY_BASE_URL_V4;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

export const internalVariables = {
  url_v2: base_url_v2,
  url_v4: base_url_v4,
  token: token,
};
