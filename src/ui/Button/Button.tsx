import styled, { css } from "styled-components";

type ButtonProps = {
  title: string;
  width?: string;
  height?: string;
  className?: string;
};

const Button = (props: ButtonProps) => {
  const { title, width = "100%", height = "44px", className } = props;

  return (
    <StyledButton className={className} width={width} height={height}>
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ width: string; height: string }>`
  ${({ width, height }) => css`
    ${width &&
    css`
      width: ${width};
    `}

    ${height &&
    css`
      height: ${height};
    `}

    border: 2px solid #24c7ff;
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background-color: #24c7ff;
    }

    &:active {
      background-color: #79dcfd;
      border: 2px solid #79dcfd;
    }
  `}
`;
