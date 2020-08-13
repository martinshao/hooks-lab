import React from 'react';

function Page(props) {
  const { user, avatarSize } = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={avatarSize} />
    </Link>
  );

  return <PageLayout userLink={userLink} />
}

function ContextDemo(props) {
  const { user, avatarSize } = props
  return (
    <>
      {/* Now, we have: */}
      <Page user={user} avatarSize={avatarSize} />
      {/* ... which renders ... */}
      <PageLayout userLink={...} />
      {/* ... which renders ... */}
      <NavigationBar userLink={...} />
      {/* ... which renders ... */}
      {props.userLink}
    </>
  )
}

export default ContextDemo;