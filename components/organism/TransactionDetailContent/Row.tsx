import NumberFormat from "react-number-format";

interface RowProps {
  label: string;
  value: number | string;
  className?: string;
}
export default function Row(props: Partial<RowProps>) {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${className}`}>
        {typeof value === "number" ? (
          <NumberFormat
            value={value}
            displayType="text"
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
          />
        ) : (
          value
        )}
      </span>
    </p>
  );
}
