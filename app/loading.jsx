import Image from "@node_modules/next/image";

const loading = () => {
  return (
    <Image
      src="/assets/icons/loading.gif"
      alt="loading"
      width={150}
      height={150}
      className="w-auto h-auto"
    />
  );
};

export default loading;
