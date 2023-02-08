import { TailSpin } from 'react-loader-spinner';

const { useSelector } = require('react-redux');

export const Loader = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  // console.log(isLoading);
  return isLoading ? (
    <TailSpin
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  ) : null;
};
