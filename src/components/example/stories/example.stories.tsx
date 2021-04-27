import * as React from 'react'

export default {
  title: 'Example component',
  decorators: [],
  argTypes: {
    initialValue: {
      control: {
        type: 'number'
      }
    }
  }
}

export interface ExampleComponentProps {
  initialValue: number;
}

const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  return (
    <div>
      <h1>{props.initialValue}</h1>
    </div>
  )
}

export const ExampleTemplate = ExampleComponent.bind({});
ExampleTemplate.args = {
  initialValue: 0
}