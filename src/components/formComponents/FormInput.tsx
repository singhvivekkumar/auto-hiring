import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";

const FormInput = ({ ...props }) => {
	const {
		label,
		placeholder,
		name,
		onChange,
		onBlur,
		value,
		error,
		touched,
	} = props;

	return (
		<Box py="3" >
			<Text py={1} fontSize="lg">
				{label}
			</Text>
			<Input
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				onError={error}
				
			/>
			<Text>{touched}</Text>
		</Box>
	);
};

export default FormInput;
