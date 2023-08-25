interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Customer'],
  tenantName: 'Account',
  applicationName: 'Pizza Ordering App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
