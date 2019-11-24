// While waiting for Storybook to expose such type
export interface StoriesFC extends React.FC {
  story?: {
    name: string;
  };
}
