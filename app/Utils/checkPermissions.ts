import Database from '@ioc:Adonis/Lucid/Database'

type Permission = string
type Permissions = Permission[]

async function checkPermissions (id: string, cmdPermissions: Permissions) {
  const userData = await Database.from('users').where('discord_id', id).first()

  const userPermissions = userData.permissions

  const allOrEvery =
        cmdPermissions.every((perm) => userPermissions.includes(perm)) ||
        userPermissions.includes('*')

  if (allOrEvery) {
    return true
  }

  const userPermissionsArray = userPermissions.map((perm) => perm.split('.'))
  const cmdPermissionsArray = cmdPermissions.map((perm) => perm.split('.'))
  const userPermissionsArrayLength = userPermissionsArray.length
  const cmdPermissionsArrayLength = cmdPermissionsArray.length

  for (let i = 0; i < userPermissionsArrayLength; i++) {
    for (let j = 0; j < cmdPermissionsArrayLength; j++) {
      if (
        userPermissionsArray[i][0] === cmdPermissionsArray[j][0] &&
                userPermissionsArray[i][1] === '*' &&
                cmdPermissionsArray[j][1] !== '*'
      ) {
        return true
      }
    }
  }
  return false
}

export default checkPermissions
