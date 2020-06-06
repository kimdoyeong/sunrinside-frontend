import styled, { FlattenSimpleInterpolation } from "styled-components";

const Flex = styled.div<{ css?: FlattenSimpleInterpolation }>`
  display: flex;
  ${(props) => props.css}
`;

export default Flex;
