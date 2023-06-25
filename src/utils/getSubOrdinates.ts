import { RoleType, UserType } from '../context/AppContext';

export function getSubOrdinates(
  userId: string,
  roles: RoleType[],
  users: UserType[]
) {
  const selectedUserRole = users?.filter((usr) => usr.Id === Number(userId))[0]; // find the role of user id

  const getRoleParent = roles?.filter(
    (role) => role.Id === selectedUserRole?.Role
  )[0]?.Parent; // find the role id parent of selected user id

  const getSubOrdinateRoleIds = roles
    ?.filter((role) => role.Parent > getRoleParent)
    ?.map((rl) => rl.Id); // get the sub ordinate roles to find users

  return users?.filter((user) => getSubOrdinateRoleIds.includes(user.Role)); // filter the user with sub ordinate user ids
}
