import { injectGlobal } from '@emotion/css';

export const Themes = {
  Dark: 'myApp-dark',
  Light: 'myApp-light',
} as const;

export type Theme = (typeof Themes)[keyof typeof Themes];

export const Keys = {
  BackgroundColor: 'BackgroundColor',
  BackgroundColorHover: 'BackgroundColorHover',
  TextColor: 'TextColor',
  ShadowColor: 'ShadowColor',
  BorderColor: 'BorderColor',
} as const;

export const ThemeVariables = {
  [Keys.BackgroundColor]: '--myApp-background-color',
  [Keys.BackgroundColorHover]: '--myApp-background-color-hover',
  [Keys.TextColor]: '--myApp-text-color',
  [Keys.ShadowColor]: '--myApp-shadow-color',
  [Keys.BorderColor]: '--myApp-border-color',
} as const;

export type ThemeVariableKey = keyof typeof Keys;
export type ThemeVariableValue = (typeof ThemeVariables)[keyof typeof ThemeVariables];
export type ThemeStyleValues = Record<keyof typeof Keys, string>;

export const ThemeStyles: Record<Theme, ThemeStyleValues> = {
  [Themes.Dark]: {
    [Keys.BackgroundColor]: '#333333',
    [Keys.BackgroundColorHover]: '#2c2c2c',
    [Keys.TextColor]: '#ffffff',
    [Keys.ShadowColor]: 'black',
    [Keys.BorderColor]: 'rgb(58, 58, 58)',
  },
  [Themes.Light]: {
    [Keys.BackgroundColor]: '#ffffff',
    [Keys.BackgroundColorHover]: '#d8d8d8',
    [Keys.TextColor]: '#333333',
    [Keys.ShadowColor]: 'rgba(0, 0, 0, 0.15)',
    [Keys.BorderColor]: '#eeeeee',
  },
} as const;

export function getThemeVariableValues(theme: Theme): ThemeStyleValues {
  return ThemeStyles[theme];
}

export function getThemeVariableValue(theme: Theme, key: ThemeVariableKey): string {
  const themeParamValues = getThemeVariableValues(theme);
  return themeParamValues[key];
}

export const injectGlobalThemes = () => {
  injectGlobal`
    .${Themes.Dark} {
      background-color: ${getThemeVariableValue(Themes.Dark, Keys.BackgroundColor)};
      color: ${getThemeVariableValue(Themes.Dark, Keys.TextColor)};
    }

    .${Themes.Light} {
      background-color: ${getThemeVariableValue(Themes.Light, Keys.BackgroundColor)};
      color: ${getThemeVariableValue(Themes.Light, Keys.TextColor)};
    }
  `;
};

export function applyThemeVariables(target: HTMLElement, values: ThemeStyleValues): void {
  (Object.keys(values) as ThemeVariableKey[]).forEach((key) => {
    const variable = ThemeVariables[key];
    const value = values[key];
    target.style.setProperty(variable, value);
  });
}

export function applyTheme(target: HTMLElement, theme: Theme) {
  target.classList.toggle(Themes.Dark, theme === Themes.Dark);
  target.classList.toggle(Themes.Light, theme === Themes.Light);
}

export function findTheme(from: HTMLElement): Theme {
  if (from.classList.contains(Themes.Dark)) return Themes.Dark;
  if (from.classList.contains(Themes.Light)) return Themes.Light;
  return Themes.Dark;
}
