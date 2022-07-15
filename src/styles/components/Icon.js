import styled from "styled-components/macro";

import { Icon as I } from "@mdi/react";

const Icon = styled(I).attrs((p) => ({
  size: p.size || 1,
}))`
  color: ${({ theme }) =>
    $dark ? theme.colors.icon.dark : theme.colors.icon.light};
`;

export default Icon;
