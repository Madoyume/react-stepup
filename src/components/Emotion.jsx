/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({ margin: 0, color: "#3d84a8" });
  const buttonStyle = css`
    background-color: #abedd8;
    border: none;
    padding: 8px 24px;
    border-radius: 8px;
    color: #333;
    font-weight: bold;
    &:hover {
      background-color: #46cdcf;
    }
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button css={buttonStyle}>FIGHT!</button>
    </div>
  );
};
