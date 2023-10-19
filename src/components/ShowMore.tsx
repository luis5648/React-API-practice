import React, { useState } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button"
import { Typography } from "@mui/material";

type Props = {
  children: string;
	limit: number;
};

const ShowMore: React.FC<Props> = ({ children, limit }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);


	const buttonPressed = () =>{
		setReadMoreShown(prevState => !prevState)
	}

	const text = children
  return (
    <Box>
			
                    <Typography variant="body2" color="text.secondary">

      {isReadMoreShown ? text : text.substring(0,limit)}
										</Typography>
      <Button color="secondary" onClick={buttonPressed}> 
			{isReadMoreShown ? 'Read Less' : "Read More"}
			</Button>
    </Box>
  );
};

export default ShowMore;
