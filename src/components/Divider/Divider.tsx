import { Box, BoxProps } from "../Box/Box";

export function Divider({ ...props }: BoxProps) {
  return (
    <Box height={2} width={"100%"} backgroundColor={"border"} {...props} />
  );
}
