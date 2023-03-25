import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing space between components
export const SpacerXSmallWidth = styled.div`
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmallWidth = styled.div`
  width: 16px;
`;

// Used for providing space between components
export const SpacerMediumWidth = styled.div`
  width: 24px;
`;

// Used for providing space between components (width only)
export const SpacerLargeWidth = styled.div`
  width: 32px;
`;

// Used for providing space between components (width only)
export const SpacerXLWidth = styled.div`
  width: 48px;
`;

// Used for providing super space between components (Height only)
export const SuperSpacerXLHeight = styled.div`
  height: 10vh;
`;

export const AppBackground = styled.div`
  @media (min-width: 768px) {
    background-image: radial-gradient(
        at -5% 78%,
        hsla(339, 49%, 30%, 0.25) 1%,
        transparent 20%
      ),
      radial-gradient(at 170% 50%, hsla(339, 49%, 30%, 0.5) 0, transparent 50%);
  }
`;
