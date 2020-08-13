import React, { Suspense } from "react";

const ProfileDetails = React.lazy(() => import('./ProfileDetails')); // 懒加载
const ProfileTimeline = React.lazy(() => import('./ProfileTimeline')); // 懒加载

function ProfilePage() {
  return (
    <Suspense
      fallback={<h1>Loading profile...</h1>}
    >
      <ProfileDetails />
      <Suspense
        fallback={<h1>Loading posts...</h1>}
      >
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}


export default ProfilePage
