import styled from "styled-components";

export const BackgroundImage = styled.div`
  height: ${({ height }) => (height ? height : "88px")};
  background: ${({ src }) =>
    src
      ? `linear-gradient(360deg, #0d090b 6.2%, rgba(13, 9, 11, 0) 100%),
url(${src}) center center / cover no-repeat;`
      : "#0d090b"};
  z-index: -1;
`;
