/*!
 * Copyright (C) 2020  Josh Habdas <jhabdas@protonmail.com>
 *
 * This file is part of gatsby-starter-i18n-react-i18next.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import theme from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  ...theme.styles,
  global: (props) => ({
    ...theme.styles.global,
    fontFamily: "body",
    fontWeight: "normal",
    color: mode("gray.100", "whiteAlpha.900")(props),
    bg: mode("gray.700", "gray.900")(props),
  }),
};

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: `"Work Sans",${theme.fonts.body}`,
    heading: `"Work Sans",${theme.fonts.heading}`,
  },
  colors: {
    ...theme.colors,
    black: "#131217",
  },
  config: {
    ...theme.config,
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  styles,
};

export default customTheme;