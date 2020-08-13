import React from 'react';

function ContextDemo(props) {
  const { user, avatarSize } = props
  return (
    <>
      <Page user={user} avatarSize={avatarSize} />
      {/* ... which renders ... */}
      <PageLayout user={user} avatarSize={avatarSize} />
      {/* ... which renders ... */}
      <NavigationBar user={user} avatarSize={avatarSize} />
      {/* ... which renders ... */}
      <Link href={user.permalink}>
        <Avatar user={user} size={avatarSize} />
      </Link>
    </>
  )
}

export default ContextDemo;