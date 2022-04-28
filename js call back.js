const userProfile = async () => {
  const user = await fetchUsers(1) // argument indicated number of users to fetch
  const updatedAddress = await updateAddress(user)
  const pincode = await getPincode()
//  const updateUser = await updateUser(user, updatedAdress, pincode)
  return user
}