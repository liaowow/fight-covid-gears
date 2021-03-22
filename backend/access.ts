import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isLoggedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// permissions check
export const permissions = {
  ...generatedPermissions,
};

// rule-based function: decides who can CRUD which products
export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    if (!isLoggedIn({ session })) {
      return false;
    }
    // do they have the permission?
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // if not, do they own this product?
    return { user: { id: session.itemId } };
  },
  canOrder({ session }: ListAccessArgs) {
    if (!isLoggedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageOrders({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }: ListAccessArgs) {
    if (!isLoggedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return { order: { user: { id: session.itemId } } };
  },
  canReadProducts({ session }: ListAccessArgs) {
    // do they have the permission to see/read all products?
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // if not, only show available products
    return { status: 'AVAILABLE' };
  },
  canManageUsers({ session }: ListAccessArgs) {
    if (!isLoggedIn({ session })) {
      return false;
    }
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // if not, they may only update themselves
    return { id: session.itemId };
  },
};
