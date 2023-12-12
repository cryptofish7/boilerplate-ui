import { SmallCloseIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement
} from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from 'theme/icons'

interface SearchBarProps {
  inputRef?: React.RefObject<HTMLInputElement>
  inputRightElement?: JSX.Element
  onValueChange?: (value: string) => void
}

const SearchBar = ({
  inputRef,
  inputRightElement,
  onValueChange,
  ...props
}: SearchBarProps & InputProps) => (
  <InputGroup size={props.size}>
    <InputLeftElement>
      <SearchIcon />
    </InputLeftElement>
    <Input
      ref={inputRef}
      borderRadius={{ base: 'md', md: 'xl' }}
      onChange={(e) => onValueChange?.(e.currentTarget.value)}
      borderColor="border"
      {...props}
    />
    {props.value ? (
      <InputRightElement pr={1} _hover={{ cursor: 'pointer' }}>
        <IconButton
          aria-label="clear search"
          icon={<SmallCloseIcon boxSize={4} />}
          borderRadius="full"
          size="sm"
          variant="ghost"
          onClick={() => onValueChange?.('')}
        />
      </InputRightElement>
    ) : (
      inputRightElement
    )}
  </InputGroup>
)

export default SearchBar
