import type { DefaultFiltersPayload } from '../global.type'

export const adminQueryKeys = {
  // admins: (country: string) => ['admins', country],
  admin: ({ id, country }: { id: string; country: string }) => ['admin', { id }, { country }],
  adminPagination: (page: number) => ['adminPagination', { page }],
  adminFilters: (payload: DefaultFiltersPayload) => [
    'adminFilters',
    { page: payload.page },
    { q: payload.q },
    { country_id: payload.country_id },
  ],
  rolesFilters: (payload: DefaultFiltersPayload) => [
    'rolesFilters',
    { page: payload.page },
    { q: payload.q },
    { country_id: payload.country_id },
  ],
  role: ({ id }: { id: string }) => ['role', { id }],
}
