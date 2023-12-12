import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  tabsAnatomy.keys
)

const baseStyle = {
  tab: {
    color: 'blue',
    fontWeight: 'semibold'
  }
}

const enclosed = {
  tab: {
    _selected: {
      _dark: { bg: 'joeDark.700' },
      bg: 'joeLight.300',
      border: 0,
      color: 'textPrimary'
    },
    border: 0,
    borderTopRadius: '2xl',
    color: 'textSecondary',
    fontWeight: 'semibold',
    padding: 4
  },
  tablist: {
    border: 0
  },
  tabpanels: {
    _dark: { bg: 'joeDark.700' },
    bg: 'joeLight.300'
  }
}

const softRounded = {
  tab: {
    _dark: {
      _selected: { bg: 'joeDark.500', color: 'white' },
      borderColor: 'joeDark.500'
    },
    _selected: {
      bg: 'joeLight.400',
      borderColor: 'joeLight.400',
      color: 'textPrimary'
    },
    bg: 'transparent',
    border: '1px solid',
    borderColor: 'joeLight.500',
    color: 'joeDark.300',
    px: 4,
    py: 3
  },
  tablist: {
    _dark: {
      borderColor: 'joeDark.500'
    },
    gap: 2
  }
}

const softRoundedOutlined = {
  tab: {
    _dark: {
      _selected: { bg: 'joeDark.500', color: 'white' },
      color: 'joeDark.300'
    },
    _selected: {
      bg: 'joeLight.600',
      color: 'textPrimary'
    },
    borderRadius: { base: '8px', md: '12px' },
    color: 'joeLight.700',
    fontSize: 'md',
    paddingX: 3
  },
  tablist: {
    _dark: {
      borderColor: 'joeDark.500'
    },
    border: '1px',
    borderColor: 'joeLight.600',
    borderRadius: { base: 'md', md: '2xl' },
    height: 12,
    padding: '3px',
    size: { base: 'sm', md: 'md' }
  }
}

const softRoundedOutlinedWhite = {
  ...softRoundedOutlined,
  tab: {
    ...softRoundedOutlined.tab,
    _selected: {
      ...softRoundedOutlined.tab._selected,
      bg: 'joeLight.400'
    }
  },
  tablist: {
    ...softRoundedOutlined.tablist,
    borderColor: 'border'
  }
}

export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    enclosed,
    'soft-rounded': softRounded,
    'soft-rounded-outlined': softRoundedOutlined,
    'soft-rounded-outlined-white': softRoundedOutlinedWhite
  }
})
