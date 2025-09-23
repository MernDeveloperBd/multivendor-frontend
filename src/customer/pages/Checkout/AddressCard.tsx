import { Radio } from "@mui/material";



const AddressCard = ({ value, selectedValue, handleChange, item }: any) => {
  return (
    <div className={`p-3 border border-teal-600 rounded-md flex cursor-pointer `}>
      <div>
        <Radio
          checked={selectedValue == value}
          value={value}
          onChange={handleChange}
          name="radio-buttons" />
      </div>
      <div className="space-y-3 pt-3 text-sm">
        <h1 className="font-semibold">Marifa Akter</h1>
        <p>Road: 15, House: 24, Sector: 1</p>
        <p>
          <strong>Mobile:</strong> 0154875465
        </p>
      </div>
    </div>
  );
};

export default AddressCard;