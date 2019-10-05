import React from "react";
import { Switch } from "antd";

// utils
import {
  FavoriteTogglerWrapper,
  FavoriteTogglerText
} from "components/blocks/FavoriteToggler/favoriteTogglerStyles";

type FavoriteToggler = {
  toggleIsFavorite: () => void;
  isFavorite: boolean;
  isEditMode: boolean;
  itemIsFavorite: boolean | undefined;
};

const FavoriteToggler = ({
  toggleIsFavorite,
  isFavorite,
  isEditMode,
  itemIsFavorite
}: FavoriteToggler) => (
  <FavoriteTogglerWrapper>
    <Switch
      onChange={toggleIsFavorite}
      checked={isFavorite}
      defaultChecked={isEditMode ? itemIsFavorite : isFavorite}
    />
    <FavoriteTogglerText>Add to favorite</FavoriteTogglerText>
  </FavoriteTogglerWrapper>
);

export default FavoriteToggler;
