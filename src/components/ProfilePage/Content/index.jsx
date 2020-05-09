import React from 'react'
import PropTypes from 'prop-types'

// function Content(props) {
//   const showMessage = () => {
//     console.info('Followed ' + props.user);
//   };

//   const handleClick = () => {
//     setTimeout(showMessage, 3000);
//   };

//   return (
//     <>
//       <h3>{`Hi ${props.user}`}</h3>
//       <button onClick={handleClick}>
//         Follow
//       </button>
//     </>
//   );
// }

// Content.propTypes = {
//   user: PropTypes.string,
// }

class Content extends React.Component {
  static propTypes = {
    user: PropTypes.string,
  }

  showMessage = () => {
    console.info('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return (
      <>
        <h3>{`Hi ${this.props.user}`}</h3>
        <button onClick={this.handleClick}>
          Follow
      </button>
      </>
    );
  }
}

export default Content

