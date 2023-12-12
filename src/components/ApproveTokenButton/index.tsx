import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonProps,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  Portal,
  Text,
  VStack
} from '@chakra-ui/react'
import { TokenApprovalType } from 'hooks/useApproveSpenderIfNeeded'
import React from 'react'
import { formattedNum } from 'utils/format'

interface ApproveTokenMenuItemProps {
  description: string
  isSelected: boolean
  title: string
}

const ApproveTokenMenuItem = ({
  description,
  isSelected,
  title,
  ...props
}: ApproveTokenMenuItemProps & MenuItemProps) => (
  <MenuItem {...props}>
    <VStack align="flex-start" spacing={1}>
      <HStack>
        {isSelected ? <CheckIcon boxSize="14px" /> : null}
        <Heading size="sm" pl={isSelected ? 0 : '22px'}>
          {title}
        </Heading>
      </HStack>
      <Text pl="22px" fontSize="sm" textColor="textSecondary">
        {description}
      </Text>
    </VStack>
  </MenuItem>
)

interface ApproveTokenButtonProps {
  approvalType: TokenApprovalType
  onApprovalTypeSelect: (approvalType: TokenApprovalType) => void
  amount?: string
  currencySymbol?: string
}

const ApproveTokenButton = ({
  amount,
  approvalType,
  currencySymbol,
  onApprovalTypeSelect,
  ...props
}: ApproveTokenButtonProps & ButtonProps) => (
  <Flex w="full">
    <Button
      w="full"
      variant="primary"
      colorScheme="accent"
      pl={{ base: 12, md: 14 }}
      size="xl"
      loadingText={`Approving ${currencySymbol}`}
      borderRadius={0}
      borderLeftRadius="full"
      borderRight="1px solid"
      borderRightColor="accent.600"
      {...props}
    >
      {approvalType === 'unlimited'
        ? `Approve ${currencySymbol} permanently`
        : `Approve ${currencySymbol}`}
    </Button>
    <Menu placement="bottom-end">
      <MenuButton
        data-cy="approve-token-menu-button"
        as={IconButton}
        variant="primary"
        colorScheme="accent"
        size="xl"
        flexShrink={0}
        icon={<ChevronDownIcon boxSize="22px" />}
        w={{ base: 12, md: 14 }}
        borderRadius={0}
        borderRightRadius="full"
        isDisabled={props.isLoading || props.isDisabled}
      />
      <Portal>
        <MenuList maxW="320px" zIndex={3}>
          <ApproveTokenMenuItem
            data-cy="approve-token-menu-item-one-time"
            title="Approve one-time only"
            description={`You'll give your approval to spend ${
              amount ? formattedNum(amount) : ''
            } ${currencySymbol} on your behalf.`}
            isSelected={approvalType === 'one_time'}
            onClick={() => onApprovalTypeSelect('one_time')}
          />
          <ApproveTokenMenuItem
            data-cy="approve-token-menu-item-unlimited"
            title="Approve unlimited amount"
            description={`You won't need to approve again next time you want to spend ${currencySymbol}.`}
            isSelected={approvalType === 'unlimited'}
            onClick={() => onApprovalTypeSelect('unlimited')}
          />
        </MenuList>
      </Portal>
    </Menu>
  </Flex>
)

export default ApproveTokenButton
