import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isLoggedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatePermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// permissions check
export const permissions = {
  ...generatePermissions,
};

// rule-based function: decides who can CRUD which products
export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    // do they have the permission?
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // if not, do they own this product?
    return { user: { id: session.itemId } };
  },
  canReadProducts({ session }: ListAccessArgs) {
    // do they have the permission to see/read all products?
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // if not, only show available products
    return { status: 'AVAILABLE' };
  },
};
