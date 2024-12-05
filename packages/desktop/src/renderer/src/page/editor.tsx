import { useParams } from 'react-router';
import { CoreEditor } from '../component/CoreEditor.tsx';

const Editor = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <CoreEditor id={id} />;
};

export { Editor };
