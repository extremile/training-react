import { Component } from 'react';

class ShowCount extends Component {
  render() {
    const { count } = this.props;
    // This.props récupére les arguments reçus dans Le component. Ici on vient le destructurer
    return (
      <h1 className="text-blue-600 p-2 m-4 text-4xl font-bold text-center">{count}</h1>
    );
  }
}
export default ShowCount;
