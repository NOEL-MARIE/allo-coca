enum AdminRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
  // Ajoutez d'autres rôles selon vos besoins
}

export const AdminRouteApi = {
  // /admin/api/v1/user/
  default: '/admin/api/v1/user',
  getOne: (id: string) => `/admin/api/v1/user/${id}`,
  getOneName: '/admin/api/v1/user/*',
  filter: '/admin/api/v1/user',
  adminsFilter: '/admin/api/v1/user/admins',
  role: '/admin/api/v1/role',
  getStats: '/admin/api/v1/user/stats',
  getRole: (id: string) => `/admin/api/v1/role/${id}`,
  getRoleName: `/admin/api/v1/role/*`,
  policy: '/admin/api/v1/policies',
  addNewPolicies: '/admin/api/v1/role/add_permissions',
  getPolicy: (id: string) => `/admin/api/v1/policies/role/${id}`,
  getPolicyName: `/admin/api/v1/policies/role/*`,
}

export { AdminRole }
