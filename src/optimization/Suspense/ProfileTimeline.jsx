import React from 'react'

import { fetchProfileData } from "./fakeApi";

const resource = fetchProfileData();

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

export default ProfileDetails
