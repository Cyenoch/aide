import * as React from 'react'
import { cn } from '@webview/utils/common'
import { cva, type VariantProps } from 'class-variance-authority'

import { ChatMessageLoading } from './chat-message-loading'

export const chatBubbleVariant = cva(
  'flex gap-2 max-w-[60%] items-end relative',
  {
    variants: {
      variant: {
        received: 'self-start',
        sent: 'self-end flex-row-reverse'
      },
      layout: {
        default: '',
        ai: 'max-w-full w-full items-center'
      }
    },
    defaultVariants: {
      variant: 'received',
      layout: 'default'
    }
  }
)

interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariant> {}

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant, layout, children, ...props }, ref) => (
    <div
      className={cn(chatBubbleVariant({ variant, layout, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
)
ChatBubble.displayName = 'ChatBubble'

// ChatBubbleMessage
export const chatBubbleMessageVariants = cva('p-4', {
  variants: {
    variant: {
      received: 'bg-background text-foreground w-full',
      sent: 'bg-background text-foreground w-full'
    },
    layout: {
      default: '',
      ai: 'w-full rounded-none bg-muted'
    }
  },
  defaultVariants: {
    variant: 'received',
    layout: 'default'
  }
})

interface ChatBubbleMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleMessageVariants> {
  isLoading?: boolean
}

export const ChatBubbleMessage = React.forwardRef<
  HTMLDivElement,
  ChatBubbleMessageProps
>(
  (
    { className, variant, layout, isLoading = false, children, ...props },
    ref
  ) => (
    <div
      className={cn(chatBubbleMessageVariants({ variant, layout, className }))}
      ref={ref}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <ChatMessageLoading />
        </div>
      ) : (
        children
      )}
    </div>
  )
)
ChatBubbleMessage.displayName = 'ChatBubbleMessage'

// ChatBubbleTimestamp
interface ChatBubbleTimestampProps
  extends React.HTMLAttributes<HTMLDivElement> {
  timestamp: string
}

export const ChatBubbleTimestamp: React.FC<ChatBubbleTimestampProps> = ({
  timestamp,
  className,
  ...props
}) => (
  <div className={cn('text-xs mt-2 text-right', className)} {...props}>
    {timestamp}
  </div>
)