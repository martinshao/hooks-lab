import React from 'react';

function Page(props) {
  const { user, avatarSize } = props.user;
  const content = <Feed user={user} />

  const topBar = (
    <NavigationBar>
      <Link>
        <Avatar user={user} size={avatarSize} />
      </Link>
    </NavigationBar>
  )

  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  )
}

function ContextDemo() {
  return <Page />
}

export default ContextDemo;