import * as React from 'react';
import * as styles from "./hello.less" 

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export default class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className={styles.hello}>
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div> 
      </div>
    );
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}