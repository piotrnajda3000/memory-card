import { Icon as I } from "@mdi/react";

import styled from "styled-components/macro";

export const StyledIcon = styled(I).attrs((p) => ({
  size: p.size || 1,
}))`
  color: ${({ theme }) =>
    $dark ? theme.colors.icon.dark : theme.colors.icon.light};
`;
