import classnames from "classnames";

interface ButtonTabProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}
export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, active, onClick } = props;
  const btnClass = classnames({
    "btn btn-status rounded-pill text-sm": true,
    "btn-active": active,
  });
  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
}
