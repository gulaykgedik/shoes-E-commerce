import { FC } from "react";

interface Props {
  pictures: string[];
}

const Images: FC<Props> = ({ pictures }) => {
  console.log(pictures);

  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit mt-6">
      {pictures.map((url, key) => (
        <img src={`../${url}`} alt="" key={key} />
      ))}
    </div>
  );
};

export default Images;
