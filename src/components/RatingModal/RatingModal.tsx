import { FC } from "react";

type Props = {
  isOpen: boolean;
};

const RatingModal: FC<Props> = (props) => {
  const { isOpen } = props;

  return (
    <div
      className={`fixed z-[61] inset-0 flex items-center justify-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      RatingModal
    </div>
  );
};

export default RatingModal;
