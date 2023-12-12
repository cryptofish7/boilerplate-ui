import { Tab, TabList, Tabs, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { MoonIcon, SunIcon } from 'theme/icons'

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleTabsChange = () => {
    toggleColorMode()
  }

  const initialTabIndex = colorMode === 'dark' ? 1 : 0

  return (
    <Tabs
      defaultIndex={initialTabIndex}
      onChange={handleTabsChange}
      variant="soft-rounded-outlined-white"
      size="lg"
    >
      <TabList>
        <Tab w="full">
          <SunIcon boxSize="24px" />
        </Tab>
        <Tab>
          <MoonIcon boxSize="24px" />
        </Tab>
      </TabList>
    </Tabs>
  )
}

export default ColorModeToggle
