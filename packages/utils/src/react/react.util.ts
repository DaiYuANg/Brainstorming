const typesHelper = () => {
  console.log(123);
  console.log('this is react helper');
};

const cl = (...className: string[]) => {
  return className.join(' ');
};
export { typesHelper,cl };
