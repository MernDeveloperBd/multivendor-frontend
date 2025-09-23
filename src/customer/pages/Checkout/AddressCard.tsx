import { Radio } from "@mui/material";

interface AddressCardProps {
  value: number;
  selectedValue: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressCard = ({ value, selectedValue, handleChange }: AddressCardProps) => {
  return (
    <div
      className={`p-5 border rounded-md flex cursor-pointer ${
        selectedValue === value ? "border-teal-600" : "border-gray-300"
      }`}
    >
      {/* Radio */}
      <div className="pt-2">
        <Radio
          checked={selectedValue === value}
          value={value}
          onChange={handleChange}
          name="radio-buttons"
          size="small"
        />
      </div>

      {/* Address Details */}
      <div className="ml-3 space-y-2 text-sm">
        <h1 className="font-semibold">{"Marifa Akter"}</h1>
        <p>{"Road: 15, House: 24, Sector: 1"}</p>
        <p>
          <strong>Mobile:</strong> 0154875465
        </p>
      </div>
    </div>
  );
};

export default AddressCard;