import { Box, Select, Text } from "@chakra-ui/react";
import React from "react";

const FormSelect = ({ ...props }) => {
	const {
		label,
		name,
		placeholder,
		options,
		onChange,
		onBlur,
		error,
		touched,
		value,
	} = props;

	return (
		<Box py='2' display="" >
			<Text py={1} fontSize="lg">{label}</Text>
			<Select
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				onError={error}
				value={value}>
				{options?.map((item: { label: string; value: string }) => {
					return <option value={item?.value}>{item?.label}</option>;
				})}
			</Select>
			<Text>{touched}</Text>
		</Box>
	);
};

export default FormSelect;
