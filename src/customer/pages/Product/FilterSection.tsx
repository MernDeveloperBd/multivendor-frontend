import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { teal } from "@mui/material/colors";
import { colors } from "../../../data/color";
import { useState } from "react";
import { price } from "../../../data/price";


const FilterSection = () => {
    const [expendColor, setExpendColor] = useState(false);
    const handleExpendColor = () => setExpendColor(!expendColor)
    return (
        <div className="-z-50 space-y-2 bg-white">
            <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
                <p className="text-lg font-semibold">Filters</p>
                <Button>Clear All</Button>
            </div>
            <Divider />
            <div className="px-9 space-y-4 mt-2">
                <section className="p-2">
    <FormControl sx={{ zIndex: 0, width: "100%" }}>
        {/* Section Title */}
        <FormLabel
            sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: teal[700],
                mb: 0.5,
            }}
        >
            Color
        </FormLabel>

        {/* Radio List */}
        <RadioGroup
            aria-labelledby="color-radio"
            defaultValue=""
            name="color-options"
            sx={{
                "& .MuiFormControlLabel-root": {
                    marginBottom: "4px",
                    marginRight: 0,
                    alignItems: "center",
                },
                "& .MuiFormControlLabel-label": {
                    fontSize: "13px",
                    color: "#374151",
                },
            }}
        >
            {colors
                ?.slice(0, expendColor ? colors.length : 5)
                .map((item: any, index) => (
                    <FormControlLabel
                        key={index}
                        value={item?.name}
                        control={
                            <Radio
                                size="small"
                                sx={{ p: "2px" }}
                            />
                        }
                        label={
                            <div className="flex items-center gap-1">
                                <span>{item?.name}</span>
                                {/* গোলাকার color swatch */}
                                <span
                                    style={{
                                        backgroundColor: item.hex,
                                    }}
                                    className="w-3.5 h-3.5 rounded-full border border-gray-200"
                                />
                                
                            </div>
                        }
                    />
                ))}
        </RadioGroup>
    </FormControl>

    {/* Toggle More Button */}
    <div className="">
        <Button
            onClick={handleExpendColor}
            className="!text-[13px] !font-medium !capitalize !p-0 !min-w-0 !text-teal-600"
            variant="text"
        >
            {expendColor ? "Hide" : `+ ${colors?.length - 5} more`}
        </Button>
    </div>
</section>
<Divider />
                {/* Price */}
                <section className="p-2">
                    <FormControl sx={{ zIndex: 0, width: "100%" }}>
                        {/* Section Title */}
                        <FormLabel
                            sx={{
                                fontSize: "13px",
                                fontWeight: 600,
                                color: teal[700],
                                mb: 0.5,
                            }}
                        >
                            Price
                        </FormLabel>

                        {/* Radio List */}
                        <RadioGroup
                            aria-labelledby="color-radio"
                            defaultValue=""
                            name="color-options"
                            sx={{
                                "& .MuiFormControlLabel-root": {
                                    marginBottom: "2px",
                                    marginRight: 0,
                                },
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "13px",
                                    color: "#374151",
                                },
                            }}
                        >
                            {price
                                .map((item: any, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={item?.value}
                                        control={
                                            <Radio
                                                size="small"
                                                sx={{ p: "2px" }}
                                            />
                                        }
                                        label={item?.name}
                                    />
                                ))}
                        </RadioGroup>
                    </FormControl>
                </section>
                <Divider />
                  {/* Price */}
                <section className="p-2">
                    <FormControl sx={{ zIndex: 0, width: "100%" }}>
                        {/* Section Title */}
                        <FormLabel
                            sx={{
                                fontSize: "13px",
                                fontWeight: 600,
                                color: teal[700],
                                mb: 0.5,
                            }}
                        >
                            Discount
                        </FormLabel>

                        {/* Radio List */}
                        <RadioGroup
                            aria-labelledby="color-radio"
                            defaultValue=""
                            name="color-options"
                            sx={{
                                "& .MuiFormControlLabel-root": {
                                    marginBottom: "2px",
                                    marginRight: 0,
                                },
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "13px",
                                    color: "#374151",
                                },
                            }}
                        >
                            {price
                                .map((item: any, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={item?.value}
                                        control={
                                            <Radio
                                                size="small"
                                                sx={{ p: "2px" }}
                                            />
                                        }
                                        label={item?.name}
                                    />
                                ))}
                        </RadioGroup>
                    </FormControl>
                </section>
            </div>
        </div>
    );
};

export default FilterSection;