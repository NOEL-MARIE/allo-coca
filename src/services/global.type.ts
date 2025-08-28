export type DefaultFiltersPayload = {
  q?: string;
  page: number;
  country_id?: string;
  dates?: [Date, Date];
  limit?: number;
};
