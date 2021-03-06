import { useSelector } from 'react-redux';

const Image = ({ src, size, ...rest }) => {
  const { secure_base_url } =
    useSelector(state => state.configuration?.images) || {};
  return (
    <img
      src={
        src
          ? `${secure_base_url}${size || 'original'}${src}`
          : '/images/default.jpg'
      }
      {...rest}
    />
  );
};

export default React.memo(Image);
