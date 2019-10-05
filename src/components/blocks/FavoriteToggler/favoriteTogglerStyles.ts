import styled from "styled-components";

const FavoriteTogglerText = styled.span``;
const FavoriteTogglerWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;

  ${FavoriteTogglerText} {
    margin-left: 12px;
  }
`;

export { FavoriteTogglerText, FavoriteTogglerWrapper };
