import classnames from "classnames";

interface ButtonTabProps {
  title: string;
  active?: boolean;
}
export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, active } = props;
  const btnClass = classnames({
    "btn btn-status rounded-pill text-sm": true,
    "btn-active": active,
  });
  return (
    <a data-filter="*" href="/#" className={btnClass}>
      {title}
    </a>
  );
}
